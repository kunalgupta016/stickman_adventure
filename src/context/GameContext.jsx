import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { stories, storyOrder } from "../data/story";
import { achievements } from "../data/achievements";
import soundManager from "../utils/SoundManager";
import crazyGames from "../utils/CrazyGamesSDK";

const GameContext = createContext();

const STORAGE_KEY = "stickman_adventure_progress";
const STATS_KEY = "stickman_adventure_stats";
const ACHIEVEMENTS_KEY = "stickman_adventure_achievements";

const loadJSON = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export const GameProvider = ({ children }) => {
  const [activeStoryId, setActiveStoryId] = useState(null);
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [history, setHistory] = useState(["start"]);
  const [completedStories, setCompletedStories] = useState(() =>
    loadJSON(STORAGE_KEY, []),
  );
  const [stats, setStats] = useState(() => loadJSON(STATS_KEY, {}));
  const [unlockedAchievements, setUnlockedAchievements] = useState(() =>
    loadJSON(ACHIEVEMENTS_KEY, []),
  );
  const [pendingAchievement, setPendingAchievement] = useState(null);
  const [soundMuted, setSoundMuted] = useState(false);
  const startTimeRef = useRef(null);

  // Persist all data
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedStories));
  }, [completedStories]);
  useEffect(() => {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }, [stats]);
  useEffect(() => {
    localStorage.setItem(
      ACHIEVEMENTS_KEY,
      JSON.stringify(unlockedAchievements),
    );
  }, [unlockedAchievements]);

  const activeStory = activeStoryId ? stories[activeStoryId] : null;
  const currentScene = activeStory ? activeStory.scenes[currentSceneId] : null;

  // Check achievements
  const checkAchievements = useCallback(
    (newStats, newCompleted) => {
      for (const ach of achievements) {
        if (unlockedAchievements.includes(ach.id)) continue;
        if (ach.id === "true_master") {
          // Special: all others unlocked
          const otherIds = achievements
            .filter((a) => a.id !== "true_master")
            .map((a) => a.id);
          const allUnlocked = otherIds.every(
            (id) => unlockedAchievements.includes(id) || id === ach.id,
          );
          if (allUnlocked) {
            setUnlockedAchievements((prev) => [...prev, ach.id]);
            setPendingAchievement(ach);
            soundManager.achievement();
            return;
          }
          continue;
        }
        try {
          if (ach.condition(newStats, newCompleted)) {
            setUnlockedAchievements((prev) => {
              if (prev.includes(ach.id)) return prev;
              return [...prev, ach.id];
            });
            setPendingAchievement(ach);
            soundManager.achievement();
            return; // Show one at a time
          }
        } catch {
          /* skip */
        }
      }
    },
    [unlockedAchievements],
  );

  const dismissAchievement = () => setPendingAchievement(null);

  const isStoryUnlocked = (storyId) => {
    const index = storyOrder.indexOf(storyId);
    if (index === 0) return true;
    if (storyId === "multiverse") {
      return storyOrder
        .slice(0, -1)
        .every((id) => completedStories.includes(id));
    }
    return completedStories.includes(storyOrder[index - 1]);
  };

  const completeStory = useCallback((storyId) => {
    setCompletedStories((prev) => {
      if (prev.includes(storyId)) return prev;
      return [...prev, storyId];
    });
  }, []);

  const selectStory = (storyId) => {
    if (!isStoryUnlocked(storyId)) return;
    setActiveStoryId(storyId);
    setCurrentSceneId("start");
    setHistory(["start"]);
    startTimeRef.current = Date.now();
    crazyGames.gameplayStart();
    // Initialize stats for this story if needed
    setStats((prev) => {
      if (prev[storyId]) return prev;
      return { ...prev, [storyId]: { endings: [], deaths: 0, bestTime: null } };
    });
  };

  const exitToMenu = () => {
    setActiveStoryId(null);
    setCurrentSceneId("start");
    setHistory(["start"]);
    startTimeRef.current = null;
    crazyGames.gameplayStop();
  };

  const makeChoice = (nextSceneId) => {
    if (activeStory && activeStory.scenes[nextSceneId]) {
      const nextScene = activeStory.scenes[nextSceneId];

      // Track fail/death
      if (nextScene.type === "fail") {
        soundManager.fail();
        crazyGames.showMidgameAd();
        setStats((prev) => {
          const s = prev[activeStoryId] || {
            endings: [],
            deaths: 0,
            bestTime: null,
          };
          const updated = {
            ...prev,
            [activeStoryId]: { ...s, deaths: s.deaths + 1 },
          };
          setTimeout(() => checkAchievements(updated, completedStories), 100);
          return updated;
        });
      }

      // Track ending
      if (nextScene.type === "ending" && activeStoryId) {
        soundManager.success();
        crazyGames.happyTime();
        crazyGames.gameplayStop();
        const elapsed = startTimeRef.current
          ? Math.round((Date.now() - startTimeRef.current) / 1000)
          : null;

        let newCompleted = completedStories;
        if (!completedStories.includes(activeStoryId)) {
          newCompleted = [...completedStories, activeStoryId];
          completeStory(activeStoryId);
          soundManager.unlock();
        }

        setStats((prev) => {
          const s = prev[activeStoryId] || {
            endings: [],
            deaths: 0,
            bestTime: null,
          };
          const endingId = nextSceneId;
          const newEndings = s.endings.includes(endingId)
            ? s.endings
            : [...s.endings, endingId];
          const newBest =
            elapsed !== null
              ? s.bestTime
                ? Math.min(s.bestTime, elapsed)
                : elapsed
              : s.bestTime;
          const updated = {
            ...prev,
            [activeStoryId]: { ...s, endings: newEndings, bestTime: newBest },
          };
          setTimeout(() => checkAchievements(updated, newCompleted), 100);
          return updated;
        });
      }

      setHistory((prev) => [...prev, nextSceneId]);
      setCurrentSceneId(nextSceneId);
    } else {
      console.error(
        `Scene ${nextSceneId} not found in story ${activeStoryId}!`,
      );
    }
  };

  const resetGame = () => {
    setCurrentSceneId("start");
    setHistory(["start"]);
    startTimeRef.current = Date.now();
  };

  const toggleMute = () => {
    const muted = soundManager.toggleMute();
    setSoundMuted(muted);
  };

  return (
    <GameContext.Provider
      value={{
        activeStory,
        activeStoryId,
        currentScene,
        makeChoice,
        resetGame,
        exitToMenu,
        selectStory,
        history,
        stories,
        storyOrder,
        completedStories,
        isStoryUnlocked,
        completeStory,
        stats,
        unlockedAchievements,
        pendingAchievement,
        dismissAchievement,
        soundMuted,
        toggleMute,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

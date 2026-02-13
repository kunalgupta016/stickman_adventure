import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "../data/achievements";
import { getTotalEndingsCount, getTotalDeaths } from "../data/achievements";
import AchievementPopup from "./AchievementPopup";

const MainMenu = () => {
  const {
    stories,
    storyOrder,
    selectStory,
    completedStories,
    isStoryUnlocked,
    stats,
    unlockedAchievements,
    pendingAchievement,
    dismissAchievement,
    soundMuted,
    toggleMute,
  } = useGame();

  const [showAchievements, setShowAchievements] = useState(false);

  const totalEndings = getTotalEndingsCount(stats);
  const totalDeaths = getTotalDeaths(stats);

  return (
    <div className="w-full flex flex-col items-center px-8 py-4">
      {/* Achievement Popup */}
      <AnimatePresence>
        {pendingAchievement && (
          <AchievementPopup
            achievement={pendingAchievement}
            onDone={dismissAchievement}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl text-white font-black uppercase tracking-widest border-text drop-shadow-lg mb-2">
          Select Your Adventure
        </h2>
        <p className="text-gray-400">
          Complete each level to unlock the next...
        </p>

        {/* Global Stats */}
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <span className="text-gray-500">
            🏁 {completedStories.length}/{storyOrder.length} stories
          </span>
          <span className="text-gray-500">🔍 {totalEndings} endings</span>
          <span className="text-gray-500">💀 {totalDeaths} deaths</span>
          <span className="text-gray-500">
            🏆 {unlockedAchievements.length}/{achievements.length}
          </span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowAchievements(!showAchievements)}
          className="px-4 py-2 bg-yellow-500 text-black font-bold text-sm border-2 border-black hover:bg-yellow-400 active:scale-95 transition-transform shadow-[4px_4px_0_rgba(0,0,0,1)]"
        >
          🏆 Achievements ({unlockedAchievements.length}/{achievements.length})
        </button>
        <button
          onClick={toggleMute}
          className="px-4 py-2 bg-gray-700 text-white font-bold text-sm border-2 border-black hover:bg-gray-600 active:scale-95 transition-transform shadow-[4px_4px_0_rgba(0,0,0,1)]"
        >
          {soundMuted ? "🔇 Unmute" : "🔊 Mute"}
        </button>
      </div>

      {/* Achievements Panel */}
      <AnimatePresence>
        {showAchievements && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full max-w-6xl overflow-hidden mb-6"
          >
            <div className="bg-gray-800 border-4 border-yellow-400 rounded-xl p-6">
              <h3 className="text-xl text-yellow-400 font-black mb-4">
                🏆 Achievement Badges
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {achievements.map((ach) => {
                  const unlocked = unlockedAchievements.includes(ach.id);
                  return (
                    <div
                      key={ach.id}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        unlocked
                          ? "bg-yellow-400/10 border-yellow-400"
                          : "bg-gray-900 border-gray-700 opacity-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {unlocked ? ach.icon : "🔒"}
                      </div>
                      <div
                        className={`text-xs font-bold ${unlocked ? "text-yellow-300" : "text-gray-500"}`}
                      >
                        {ach.title}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1">
                        {ach.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {storyOrder.map((storyId, index) => {
          const story = stories[storyId];
          if (!story) return null;
          const unlocked = isStoryUnlocked(storyId);
          const completed = completedStories.includes(storyId);
          const isMultiverse = storyId === "multiverse";
          const storyStats = stats[storyId];

          return (
            <motion.div
              key={story.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: unlocked ? 1 : 0.5 }}
              transition={{ delay: index * 0.06 }}
              whileHover={unlocked ? { scale: 1.05, rotate: 1 } : {}}
              whileTap={unlocked ? { scale: 0.95 } : {}}
              onClick={() => unlocked && selectStory(story.id)}
              className={`
                relative group rounded-xl overflow-hidden border-4 shadow-[8px_8px_0_rgba(255,255,255,0.2)]
                ${unlocked ? "cursor-pointer border-black" : "cursor-not-allowed border-gray-700 grayscale"}
                ${story.color || "bg-gray-700"}
              `}
            >
              {/* Level Badge */}
              <div
                className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border-2 ${
                  completed
                    ? "bg-green-500 text-white border-green-700"
                    : unlocked
                      ? "bg-yellow-400 text-black border-yellow-600"
                      : "bg-gray-700 text-gray-400 border-gray-600"
                }`}
              >
                {isMultiverse ? "★ FINAL" : `LVL ${index + 1}`}
              </div>

              {/* Completed Badge */}
              {completed && (
                <div className="absolute top-3 right-3 z-10 text-2xl">✅</div>
              )}

              {/* Lock Overlay */}
              {!unlocked && (
                <div className="absolute inset-0 z-20 bg-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔒</div>
                    <p className="text-gray-300 text-sm font-bold">
                      {isMultiverse
                        ? "Complete all stories"
                        : `Complete Level ${index}`}
                    </p>
                  </div>
                </div>
              )}

              <div className="h-48 bg-black/20 flex items-center justify-center p-4">
                <h3 className="text-3xl text-white font-black text-center">
                  {story.title}
                </h3>
              </div>
              <div className="bg-white p-6 border-t-4 border-black flex flex-col justify-between">
                <p className="text-black font-bold text-sm">
                  {story.description}
                </p>

                {/* Mini Stats */}
                {storyStats && completed && (
                  <div className="flex gap-3 mt-2 text-xs text-gray-500">
                    <span>🔍 {storyStats.endings?.length || 0} endings</span>
                    <span>💀 {storyStats.deaths || 0} deaths</span>
                    {storyStats.bestTime && (
                      <span>⏱️ {storyStats.bestTime}s</span>
                    )}
                  </div>
                )}

                <div
                  className={`w-full py-2 text-center font-bold uppercase tracking-widest mt-4 transition-colors ${
                    !unlocked
                      ? "bg-gray-400 text-gray-600"
                      : completed
                        ? "bg-green-500 text-white"
                        : "bg-black text-white group-hover:bg-yellow-400 group-hover:text-black"
                  }`}
                >
                  {!unlocked
                    ? "Locked"
                    : completed
                      ? "✓ Completed"
                      : "Play Now"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;

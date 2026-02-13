import React from "react";
import { useGame } from "../context/GameContext";
import { motion } from "framer-motion";

const StoryRecap = ({ onClose }) => {
  const { history, activeStory, activeStoryId, stats } = useGame();
  const storyStats = stats[activeStoryId] || {};

  if (!activeStory) return null;

  // Build journey from history
  const journey = history
    .map((sceneId) => {
      const scene = activeStory.scenes[sceneId];
      if (!scene) return null;
      return { id: sceneId, text: scene.text, type: scene.type };
    })
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-gray-900 border-4 border-yellow-400 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-black text-yellow-400 mb-2 text-center">
          📜 Your Journey
        </h2>
        <p className="text-gray-400 text-center mb-6">
          {activeStory.title} — {journey.length} scenes visited
        </p>

        {/* Stats bar */}
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <div className="text-center">
            <div className="text-2xl">💀</div>
            <div className="text-gray-400">Deaths</div>
            <div className="text-white font-bold">{storyStats.deaths || 0}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">🏁</div>
            <div className="text-gray-400">Endings</div>
            <div className="text-white font-bold">
              {storyStats.endings?.length || 0}
            </div>
          </div>
          {storyStats.bestTime && (
            <div className="text-center">
              <div className="text-2xl">⏱️</div>
              <div className="text-gray-400">Best Time</div>
              <div className="text-white font-bold">{storyStats.bestTime}s</div>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-yellow-400/30">
          {journey.map((scene, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="mb-4 relative"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[25px] w-4 h-4 rounded-full border-2 ${
                  scene.type === "ending"
                    ? "bg-yellow-400 border-yellow-300"
                    : scene.type === "fail"
                      ? "bg-red-500 border-red-400"
                      : "bg-gray-600 border-gray-500"
                }`}
              />
              <div
                className={`p-3 rounded-lg text-sm ${
                  scene.type === "ending"
                    ? "bg-yellow-400/10 border border-yellow-400/30 text-yellow-300"
                    : scene.type === "fail"
                      ? "bg-red-500/10 border border-red-500/30 text-red-300"
                      : "bg-gray-800 text-gray-300"
                }`}
              >
                <span className="text-gray-500 text-xs mr-2">#{i + 1}</span>
                {scene.text}
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-yellow-400 text-black font-black text-lg uppercase tracking-wider border-4 border-black hover:bg-yellow-300 active:scale-95 transition-transform"
        >
          CLOSE
        </button>
      </motion.div>
    </motion.div>
  );
};

export default StoryRecap;

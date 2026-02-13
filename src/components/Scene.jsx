import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import ChoiceButton from "./ChoiceButton";
import FailScreen from "./FailScreen";
import StickmanAsset from "./StickmanAsset";
import StoryRecap from "./StoryRecap";
import { motion, AnimatePresence } from "framer-motion";

const Scene = () => {
  const { currentScene, makeChoice, activeStory } = useGame();
  const [imageError, setImageError] = useState(false);
  const [showRecap, setShowRecap] = useState(false);

  // Reset error state when scene changes
  React.useEffect(() => {
    setImageError(false);
    setShowRecap(false);
  }, [currentScene]);

  if (!currentScene) return <div>Loading...</div>;

  return (
    <>
      <AnimatePresence mode="wait">
        {currentScene.type === "fail" ? (
          <motion.div
            key="fail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full absolute inset-0 z-50 bg-black/90"
          >
            <FailScreen scene={currentScene} onRetry={makeChoice} />
          </motion.div>
        ) : (
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full h-full relative bg-white"
          >
            {/* Scene Visuals Area - Takes up most space */}
            <div className="flex-grow relative overflow-hidden group bg-white">
              {!imageError && currentScene.image ? (
                <img
                  src={`/assets/${currentScene.image}.png`}
                  alt={currentScene.text}
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <StickmanAsset
                  sceneId={currentScene.image || currentScene.id}
                />
              )}

              {currentScene.type === "ending" && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: -5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/30"
                >
                  <h1 className="text-8xl font-black text-yellow-400 drop-shadow-[8px_8px_0_rgba(0,0,0,1)] border-text">
                    MISSION COMPLETE
                  </h1>
                </motion.div>
              )}

              {/* Text Overlay (Bottom of image) */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t-4 border-black p-6 backdrop-blur-sm z-10">
                <p className="text-black text-2xl font-bold leading-relaxed font-mono">
                  {currentScene.text}
                </p>
              </div>
            </div>

            {/* Choices Bar (Bottom) */}
            <div className="min-h-[120px] bg-gray-800 p-4 border-t-4 border-black flex items-center justify-center gap-4 z-20">
              {currentScene.options.map((option, index) => (
                <div key={index} className="flex-1 max-w-sm">
                  <ChoiceButton
                    text={option.text}
                    onClick={() => makeChoice(option.next)}
                  />
                </div>
              ))}
              {/* Show Journey button on endings */}
              {currentScene.type === "ending" && (
                <div className="flex-1 max-w-sm">
                  <button
                    onClick={() => setShowRecap(true)}
                    className="w-full p-4 my-2 bg-yellow-400 border-4 border-black text-black text-xl font-bold uppercase tracking-widest hover:bg-yellow-300 hover:scale-105 transform transition-all active:scale-95 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    📜 View Journey
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Recap Overlay */}
      <AnimatePresence>
        {showRecap && <StoryRecap onClose={() => setShowRecap(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Scene;

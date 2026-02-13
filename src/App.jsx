import React from "react";
import { GameProvider, useGame } from "./context/GameContext";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu";
import AchievementPopup from "./components/AchievementPopup";
import { motion, AnimatePresence } from "framer-motion";

const GameContainer = () => {
  const { activeStory, exitToMenu, pendingAchievement, dismissAchievement } =
    useGame();

  return (
    <>
      {/* Global Achievement Popup */}
      <AnimatePresence>
        {pendingAchievement && (
          <AchievementPopup
            achievement={pendingAchievement}
            onDone={dismissAchievement}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!activeStory ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex-1 min-h-0"
          >
            <MainMenu />
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-6xl h-[85vh] bg-gray-200 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden"
          >
            {/* Back Button */}
            <button
              onClick={exitToMenu}
              className="absolute top-2 left-2 z-50 bg-red-600 text-white font-bold text-xs px-3 py-1 border-2 border-black hover:bg-red-500"
            >
              EXIT
            </button>
            <Scene />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <GameProvider>
      <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center overflow-auto relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/assets/bg_pattern.png')] bg-repeat"></div>

        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl md:text-6xl font-black text-white py-6 tracking-tighter uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-10 shrink-0"
        >
          Stickman <span className="text-red-500">Adventure</span>
        </motion.h1>

        <GameContainer />

        <div className="py-4 text-gray-500 text-xs z-20 shrink-0">
          v3.0 - Level Edition
        </div>
      </div>
    </GameProvider>
  );
}

export default App;

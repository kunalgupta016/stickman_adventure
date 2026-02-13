import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AchievementPopup = ({ achievement, onDone }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-6 right-6 z-[100] bg-gradient-to-r from-yellow-900 to-yellow-700 border-4 border-yellow-400 rounded-xl px-6 py-4 shadow-[4px_4px_0_rgba(0,0,0,0.5)] max-w-sm"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl">{achievement.icon}</div>
            <div>
              <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest">
                🏆 Achievement Unlocked!
              </p>
              <p className="text-white font-black text-lg">
                {achievement.title}
              </p>
              <p className="text-yellow-200 text-sm">
                {achievement.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;

import React from "react";

const FailScreen = ({ scene, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-black/80 fixed inset-0 z-50 animate-fade-in">
      <h1 className="text-8xl font-bold text-red-600 mb-4 animate-bounce">
        FAIL
      </h1>
      <p className="text-2xl text-white mb-8">{scene.text}</p>
      {scene.failMessage && (
        <p className="text-xl text-gray-400 italic mb-8">
          "{scene.failMessage}"
        </p>
      )}
      <button
        onClick={() => onRetry(scene.options[0].next)}
        className="px-8 py-3 bg-white text-black font-bold text-2xl border-4 border-white hover:bg-gray-200"
      >
        RETRY
      </button>
    </div>
  );
};

export default FailScreen;

import React from "react";
import soundManager from "../utils/SoundManager";

const ChoiceButton = ({ text, onClick }) => {
  const handleClick = () => {
    soundManager.click();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="
        w-full p-4 my-2 
        bg-white border-4 border-black box-border
        text-black text-xl font-bold uppercase tracking-widest
        hover:bg-gray-200 hover:scale-105 transform transition-all
        active:bg-gray-400 active:scale-95
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px] active:translate-y-[4px]
      "
    >
      {text}
    </button>
  );
};

export default ChoiceButton;

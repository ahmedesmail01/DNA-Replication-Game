import React from "react";

interface Props {
  onStart: () => void;
}

const IntroScene: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="game-holder min-h-screen bg-[#361f5e] flex flex-col justify-center items-center text-white relative">
      <img
        src="/assets/intro-scene.png"
        alt="Intro Scene"
        className="max-w-[90%] md:max-w-[700px] rounded-lg shadow-xl mb-6"
      />
      <button
        onClick={onStart}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded shadow"
      >
        Let's Help!
      </button>
    </div>
  );
};

export default IntroScene;

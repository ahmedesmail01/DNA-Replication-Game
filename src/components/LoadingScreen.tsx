import React, { useEffect, useState } from "react";

const LoadingScreen: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onLoaded();
        }
        return prev + 2;
      });
    }, 50);
  }, [onLoaded]);

  return (
    <div className="game-holder h-screen overflow-hidden w-screen bg-[#361f5e] flex flex-col justify-center items-center">
      <img
        src="/assets/cover.png"
        alt="DNA Game Intro"
        className="max-w-[90%] h-full object-contain md:max-w-[700px] lg:my-6 rounded shadow-xl"
      />
      <div className="w-2/3 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-orange-400 to-purple-500 h-full transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-white font-medium text-lg">Loading...</p>
    </div>
  );
};

export default LoadingScreen;

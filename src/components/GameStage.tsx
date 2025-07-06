import React, { useState } from "react";
import type { EnzymeOption, Stage } from "../data/stages";

interface Props {
  stage: Stage;
  onNext: (correct: boolean) => void;
}

const enzymeImage = (name: string) =>
  `/enzymes/images/${name.replace(/\s+/g, "-")}.png`;

const GameStage: React.FC<Props> = ({ stage, onNext }) => {
  const [feedback, setFeedback] = useState<{
    message: string;
    correct: boolean;
  } | null>(null);

  const handleClick = (option: EnzymeOption) => {
    const result = option.correct;
    setFeedback({
      message: result ? "Great job! That's correct!" : "Oops! Try again.",
      correct: result,
    });

    if (result) {
      setTimeout(() => {
        setFeedback(null);
        onNext(true);
      }, 1500);
    } else {
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const feedbackImage = feedback?.correct
    ? "/assets/cell-happy.png"
    : "/assets/cell-sad.png";

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-90 rounded shadow relative">
      <h2 className="text-2xl font-bold text-center text-purple-900 mb-4">
        {stage.title}
      </h2>
      <p className="mb-6 text-center text-gray-700 text-lg">{stage.question}</p>

      {/* Enzyme Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center mb-10">
        {stage.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(opt)}
            className="hover:scale-105 cursor-pointer transition-transform duration-200 focus:outline-none"
          >
            <img
              src={enzymeImage(opt.name)}
              alt={opt.name}
              className="w-[120px] h-auto rounded-xl shadow-lg"
            />
            <p className="text-center mt-2 font-medium text-purple-800">
              {opt.name}
            </p>
          </button>
        ))}
      </div>

      {/* Feedback Cell */}
      {feedback && (
        <div
          className={`flex items-end gap-4 mt-6 justify-center transition-opacity 
            

            `}
        >
          <img
            src={feedbackImage}
            alt={feedback.correct ? "Happy Cell" : "Sad Cell"}
            className="w-[100px] h-auto drop-shadow-xl"
          />
          <div
            className={`bg-white border  rounded-xl px-4 py-3 shadow text-purple-900 max-w-xs text-center font-semibold text-lg
                
                ${feedback.correct ? "border-green-500" : "border-red-500"}
                
                `}
          >
            {feedback.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStage;

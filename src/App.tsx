import React, { useState } from "react";
import GameStage from "./components/GameStage";
import LoadingScreen from "./components/LoadingScreen";
import IntroScene from "./components/IntroScene";
import { stages } from "./data/stages";
import CompletionScene from "./components/CompletionScene";

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [introSeen, setIntroSeen] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  if (!loaded) return <LoadingScreen onLoaded={() => setLoaded(true)} />;
  if (!introSeen) return <IntroScene onStart={() => setIntroSeen(true)} />;

  return (
    <div
      className=" game-holder  min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {!completed ? (
        <GameStage stage={stages[currentStage]} onNext={handleNext} />
      ) : (
        <CompletionScene />
      )}
    </div>
  );
};

export default App;

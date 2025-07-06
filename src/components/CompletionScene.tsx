import React from "react";

const CompletionScene: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white bg-opacity-90 rounded shadow max-w-2xl">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">
        🎉 DNA Replication Complete!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you, Doctor! You've helped us duplicate perfectly!
      </p>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <img
          src="/assets/two-happy-cells.png"
          alt="Happy Cells"
          className="w-[180px] h-auto drop-shadow"
        />
        <img
          src="/assets/student-doctor.png"
          alt="Student Doctor"
          className="w-[140px] h-auto drop-shadow"
        />
      </div>
    </div>
  );
};

export default CompletionScene;

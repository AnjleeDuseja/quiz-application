import React, { useEffect, useState } from "react";

import PrimaryBtn from "../../Components/PrimaryBtn";

function Result({ questionsData, handleRetry }) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const correctAnswers = questionsData.filter(
      (ques) => ques.correctAns === ques.selectedOpt
    );
    setScore(correctAnswers.length);
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <h1>Your Score is: {score}</h1>
      </div>
      <PrimaryBtn name="retry" handleStart={() => handleRetry()} />
    </>
  );
}

export default Result;

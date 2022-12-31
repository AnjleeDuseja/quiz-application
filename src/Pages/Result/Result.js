import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/PrimaryBtn";

function Result({ questionsData }) {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const calculateScore = (questionsData) => {
    let sc = 0;
    questionsData.map((ques) => {
      return ques.correctAns == ques.selectedOpt ? sc + 1 : sc + 0;
    });
  };
  useEffect(() => {
    const scor = calculateScore(questionsData);
    console.log(scor);
    setScore(scor);
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <h1>Your Score is: {score}</h1>
      </div>
      <PrimaryBtn name="retry" handleStart={() => navigate("/")} />
    </>
  );
}

export default Result;

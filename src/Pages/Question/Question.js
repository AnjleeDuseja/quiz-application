import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Result from "../Result/Result";
import QuestionItem from "./QuestionItem";

function Question({ questionsData }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const handleAns = (val, i) => {
    questionsData[i] = { ...questionsData[i], userAns: val };
    if (index < questionsData.length - 1) {
      setIndex(index + 1);
    }
    if (index === questionsData.length - 1) {
      // navigate("/result");
      console.log("here");
    }
  };
  return (
    <div>
      {index === questionsData.length - 1 ? (
        <Result />
      ) : (
        <>
          <Header name="Quiz App" />
          {questionsData[index] && (
            <QuestionItem
              questionD={questionsData[index]}
              index={index + 1}
              handleAns={handleAns}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Question;

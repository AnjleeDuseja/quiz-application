import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import QuestionItem from "./QuestionItem";

function Question({ questionsData, handleAns, index }) {
  if (index === questionsData.length) {
    return <Navigate to="/Result"></Navigate>;
  }
  if (index === -1) {
    return <Navigate to="/networkerror"></Navigate>;
  }

  return (
    <div>
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
    </div>
  );
}

export default Question;

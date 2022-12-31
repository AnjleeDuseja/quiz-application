import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Result from "../Result/Result";
import QuestionItem from "./QuestionItem";

function Question({ questionsData, handleAns, index }) {
  const navigate = useNavigate();

  return (
    <div>
      {index === questionsData.length - 1 ? (
        <Result questionsData={questionsData} />
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

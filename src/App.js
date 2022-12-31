import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Question from "./Pages/Question/Question";
import Result from "./Pages/Result/Result";
import QuestionsService from "./Utils/QuestionsService";

function App() {
  const questionsService = useMemo(() => new QuestionsService(), []);
  const [questionsData, setQuestionData] = useState([]);
  const [index, setIndex] = useState(0);
  const handleAns = (val, i) => {
    console.log(questionsData);
    questionsData[i] = { ...questionsData[i], selectedOpt: val };
    if (index < questionsData.length - 1) {
      setIndex(index + 1);
    }
  };
  useEffect(() => {
    questionsService
      .getQuestions()
      .then((response) => {
        if (response.status == "200") {
          setQuestionData(questionsService.loadQuestion(response.data.results));
        }
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Question
              questionsData={questionsData}
              handleAns={handleAns}
              index={index}
            />
          }
        />
        <Route
          path="/result"
          element={<Result questionsData={questionsData} score={8} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

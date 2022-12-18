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

  // useEffect(() => {
  //   questionsService
  //     .getQuestions()
  //     .then((response) => {
  //       if (response.status == "200") {
  //         setQuestionData(response.data.results);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error: " + err);
  //     });
  // }, []);
  useEffect(() => {
    setQuestionData([
      {
        question: "what is computer",
        options: ["machine", "toy", "school", "nothing"],
        correctAns: "machine",
        userAns: "",
      },
      {
        question: "what is excel",
        options: ["machine", "toy", "school", "software"],
        correctAns: "software",
        userAns: "",
      },
      {
        question: "what is keyboard",
        options: ["machine", "hardware", "school", "nothing"],
        correctAns: "hardware",
        userAns: "",
      },
    ]);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={<Question questionsData={questionsData} />}
        />
        <Route path="/result" element={<Result data={questionsData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

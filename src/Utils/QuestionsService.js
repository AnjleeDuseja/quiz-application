import axios from "axios";

const baseURL =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
export default class QuestionsService {
  getQuestions = () => {
    let data = axios.get(`${baseURL}`);

    return data;
  };
  loadQuestion = (data) => {
    let question = data.question;
    let correctAns = data.correct_answer;
    let incorrectAns = data.incorrect_answers;
    let options = incorrectAns;
    options.splice(
      Math.floor(Math.random() * (incorrectAns.length + 1)),
      0,
      correctAns
    );
    return { question: question, correctAns: correctAns, options: options };
  };
}

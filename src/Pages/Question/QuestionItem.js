import React from "react";
import { Form } from "react-bootstrap";

function QuestionItem({ questionD, index, handleAns }) {
  const { question, options } = questionD;

  return (
    <div className=" d-flex justify-content-center m-3">
      <div className="question-card">
        <div className="question">
          {index}. {question}
        </div>

        <div className="d-flex row justify-content-center m-4 px-4">
          {options.map((val) => (
            <div
              className="m-2 px-3"
              style={{ boxShadow: "2px 2px 4px rgb(136, 132, 132)" }}
              key={val}
            >
              <Form.Check
                name="grp1"
                value={val}
                label={val}
                type="radio"
                onChange={() => handleAns(val, index - 1)}
                style={{
                  width: "70%",
                  height: "50px",
                  paddingTop: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;

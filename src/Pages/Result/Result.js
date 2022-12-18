import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/PrimaryBtn";

function Result() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center m-4">
        <h1>Your Score is: </h1>
      </div>
      <PrimaryBtn name="retry" handleStart={() => navigate("/")} />
    </>
  );
}

export default Result;

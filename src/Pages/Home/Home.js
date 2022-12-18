import React from "react";
import Header from "../../Components/Header";
import homeImg from "../../asset/banner.png";
import PrimaryBtn from "../../Components/PrimaryBtn";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header name="Quiz App" />
      <div className="d-flex justify-content-center">
        <img src={homeImg} alt="bannerImg" width="400px" />
      </div>
      <PrimaryBtn name="Let's Start" handleStart={() => navigate("/quiz")} />
    </div>
  );
}

export default Home;

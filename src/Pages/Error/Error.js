import React from "react";
import { Link } from "react-router-dom";
import ErrImg from "../../asset/ErrorImage.png";

function Error() {
  return (
    <div className="text-center row d-flex justify-content-center m-3">
      <div>
        <img src={ErrImg} alt="errorImg" width="700px" height="500px" />
        {window.location.pathname === "/networkerror" ? (
          <p className="error-txt">
            Check your Internet connection and <Link to="/">try again</Link>
          </p>
        ) : (
          <p className="error-txt">
            Sorry, The address doesn't exist.. <Link to="/">back to Home</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Error;

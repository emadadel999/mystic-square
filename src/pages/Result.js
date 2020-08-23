import React from "react";
import { Link } from "react-router-dom";

import "./Result.css";

const Result = (props) => {
  return (
    <div className="result-container">
      <h1>Congratulation you won</h1>
      <h2>Wanna try again ?</h2>
      <div className="resultBtns-container">
        <Link className="resultBtn" type="button" to={`/game/${3}`}>
          3 x 3
        </Link>
        <Link className="resultBtn" type="button" to={`/game/${4}`}>
          4 x 4
        </Link>
      </div>
    </div>
  );
};

export default Result;

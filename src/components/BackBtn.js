import React from "react";
import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = ({ resetMoveCounter, children }) => {
  return (
    <Link id="backBtn" type="button" to="/" onClick={resetMoveCounter}>
      {children}
    </Link>
  );
};

export default BackBtn;

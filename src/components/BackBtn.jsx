import React from "react";
import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = ({ resetMoveCounter, children }) => {
  return (
    <Link id='backBtn' class='game-btn back-btn' type='button' to='/' onClick={resetMoveCounter}>
      {children}
    </Link>
  );
};

export default BackBtn;

import React from "react";
import "./ResetBtn.css";

const ResetBtn = ({ onPress, children }) => {
  return (
    <button id="resetBtn" onClick={onPress}>
      {children}
    </button>
  );
};

export default ResetBtn;

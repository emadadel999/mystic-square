import React from "react";
import styled from "styled-components";
import "./ResetBtn.scss";

const ResetBtn = ({ onPress, children }) => {
  return (
    <button className='game-btn reset-btn' id='resetBtn' onClick={onPress}>
      {children}
    </button>
  );
};

export default ResetBtn;

import React from "react";
import styled from "styled-components";

const ResetBtnStyled = styled.button`
  width: 45%;
  border-radius: 5px;
  border-color: transparent;
  text-align: center;
  cursor: pointer;
  color: rgb(142, 174, 233);
  background-color: #081d45;
  :active {
    text-decoration: none;
  }
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    color: rgb(142, 174, 233);
    background-color: #05132e;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;

const ResetBtn = ({ onPress, children }) => {
  return (
    <ResetBtnStyled id="resetBtn" onClick={onPress}>
      {children}
    </ResetBtnStyled>
  );
};

export default ResetBtn;

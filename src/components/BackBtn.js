import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackBtnStyled = styled(Link)`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-color: transparent;
  text-align: center;
  color: rgb(142, 174, 233);
  background-color: rgb(110, 4, 4);
  :hover {
    text-decoration: none;
    background-color: rgb(59, 2, 2);
    color: rgb(142, 174, 233);
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
`;

const BackBtn = ({ resetMoveCounter, children }) => {
  return (
    <BackBtnStyled id="backBtn" type="button" to="/" onClick={resetMoveCounter}>
      {children}
    </BackBtnStyled>
  );
};

export default BackBtn;

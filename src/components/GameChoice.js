import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSquare = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.type}, 1fr);
  grid-template-rows: repeat(${(props) => props.type}, 1fr);
  border-color: transparent;
  border-radius: 5px;
  padding: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
    box-shadow: 0 0 0;
  }
`;

const SmallSquare = styled.div`
  width: 3vmin;
  height: 3vmin;
  margin: 0.5vw;
  background-color: white;
  :hover {
    background-color: #081d45;
  }
`;

const GameChoice = ({ gameType }) => {
  const length = gameType * gameType - 1;
  return (
    <Link type="button" to={`/game/${gameType}`}>
      <MainSquare type={gameType}>
        {[...Array(length)].map((x, i) => (
          <SmallSquare key={i} type={gameType}></SmallSquare>
        ))}
      </MainSquare>
    </Link>
  );
};

export default GameChoice;

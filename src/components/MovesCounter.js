import React from "react";
import styled from "styled-components";

const MoveCounterStyled = styled.div`
  width: 100%;
  border: dashed;
  border-color: #081d45;
  padding: 10px;
  text-align: center;
  p {
    color: #081d45;
    font-family: monospace;
    margin: 0;
  }
`;

const MovesCounter = ({ moveCounter }) => {
  return (
    <MoveCounterStyled className="numMoves">
      <p>Number of moves: {moveCounter}</p>
    </MoveCounterStyled>
  );
};

export default MovesCounter;

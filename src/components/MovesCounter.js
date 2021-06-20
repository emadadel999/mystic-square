import React from "react";
import styled from "styled-components";
import StopWatch from "./StopWatch/StopWatch";

const MoveCounterStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
  text-align: center;
  p {
    color: #081d45;
    font-family: monospace;
    margin: 0;
  }
`;

const MovesNum = styled.div`
  display: flex;
  flex-direction: column;
`;

const Timer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovesCounter = ({ moveCounter, start }) => {
  return (
    <MoveCounterStyled>
      <MovesNum>
        <p>Moves</p> <p>{moveCounter}</p>
      </MovesNum>
      <Timer>
        <p>Time</p>
        <StopWatch start={start} />
      </Timer>
    </MoveCounterStyled>
  );
};

export default MovesCounter;

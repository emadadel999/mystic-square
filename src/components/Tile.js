import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: thin;
  border-style: solid;
  border-color: black;
  background-color: #f2f2f2;
  color: #081d45;
  cursor: pointer;
  font-size: 2vw;

  @media (max-width: 991px) {
    font-size: 5vw;
  }
  @media (max-width: 500px) {
    font-size: 10vw;
  }
`;

const Tile = ({ num, gameSize, swapHandler }) => {
  return num === 0 ? (
    <div></div>
  ) : (
    <StyledTile
      disabled={false}
      onClick={() => swapHandler(num)}
      gameSize={gameSize}
    >
      {num}
    </StyledTile>
  );
};

export default Tile;

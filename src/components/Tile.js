import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: ridge;
  border-color: rgb(171, 189, 223);
  background-color: rgb(142, 174, 233);
  color: #081d45;
  cursor: pointer;
  @media (max-width: 991px) {
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

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import BackBtn from "../components/BackBtn";
import MovesCounter from "../components/MovesCounter";
import ResetBtn from "../components/ResetBtn";

import Tile from "../components/Tile";

const GameContainer = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 991px) {
    min-width: 93vw;
    grid-template-rows: 1fr 9fr 1fr;
  }
`;
const GameStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.gameSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.gameSize}, 1fr);
  background-color: rgb(171, 189, 223);
`;
const GameBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/* Global Variables */
const solution_four = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const solution_three = [1, 2, 3, 4, 5, 6, 7, 8, 0];
let moveCounter = 0;

/* Helper Functions */
const getRandomUniqueArr = (arrSize) => {
  const numbers = new Set();
  while (numbers.size < arrSize)
    numbers.add(Math.floor(Math.random() * arrSize));
  return new Array(...numbers);
};
const isEndOfRow = (index, rowSize) => {
  return (index + 1) % rowSize === 0 ? true : false;
};
const getSwappedArr = (number, prevConfig, size) => {
  const zeroIndex = prevConfig.indexOf(0);
  const swapNumIndex = prevConfig.indexOf(number);

  const distance = Math.abs(swapNumIndex - zeroIndex);
  const possibleEndOfRow = swapNumIndex < zeroIndex ? swapNumIndex : zeroIndex;

  if (
    distance === size ||
    (distance === 1 && !isEndOfRow(possibleEndOfRow, size))
  ) {
    moveCounter++;
    const numToSwap = prevConfig[swapNumIndex];
    prevConfig[zeroIndex] = numToSwap;
    prevConfig[swapNumIndex] = 0;
    return prevConfig;
  }

  return prevConfig;
};

/* Main Component */
const Game = () => {
  let history = useHistory();
  const { type } = useParams();
  const gameSize = parseInt(type);
  const initialConfiguration = getRandomUniqueArr(gameSize * gameSize);
  const [initConfig, setInitConfig] = useState(initialConfiguration);
  const solutionArray = gameSize === 4 ? solution_four : solution_three;

  const swapHandler = (num) => {
    const swappedArr = getSwappedArr(num, [...initConfig], gameSize);
    setInitConfig(swappedArr);
    if (JSON.stringify(solutionArray) === JSON.stringify(swappedArr))
      Swal.fire({
        title: "Congratulations",
        text: "You solved the puzzle, I wish it was fun.",
        icon: "success",
        confirmButtonText: "Return Home",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
      }).then((res) => {
        if (res.value) history.push("/");
      });
  };

  const resetHandler = (size) => {
    setInitConfig(getRandomUniqueArr(size * size));
    moveCounter = 0;
  };

  return (
    <GameContainer>
      <MovesCounter moveCounter={moveCounter} />
      <GameStyled gameSize={gameSize}>
        {initConfig.map((num) => (
          <Tile key={num} num={num} swapHandler={swapHandler}></Tile>
        ))}
      </GameStyled>
      <GameBtnsContainer>
        <ResetBtn onPress={() => resetHandler(gameSize)}>Reset</ResetBtn>
        <BackBtn
          resetMoveCounter={() => {
            moveCounter = 0;
          }}
        >
          Back
        </BackBtn>
      </GameBtnsContainer>
    </GameContainer>
  );
};

export default Game;

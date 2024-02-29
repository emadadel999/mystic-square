import React, { useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import BackBtn from "../components/BackBtn";
import ResetBtn from "../components/ResetBtn";

import StopWatch from "../components/StopWatch/StopWatch";
import "./Game.css";

/* Global Variables */
const solution_four = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const solution_three = [1, 2, 3, 4, 5, 6, 7, 8, 0];

/* Helper Functions */
const getRandomUniqueArr = (arrSize) => {
  const numbers = new Set();
  while (numbers.size < arrSize) numbers.add(Math.floor(Math.random() * arrSize));
  return new Array(...numbers);
};
const isEndOfRow = (index, rowSize) => {
  return (index + 1) % rowSize === 0 ? true : false;
};
const getSwappedArr = (number, prevConfig, size, setTimer, setCounter, moveCounter, tile) => {
  const zeroIndex = prevConfig.indexOf(0);
  const swapNumIndex = prevConfig.indexOf(number);

  const distance = Math.abs(swapNumIndex - zeroIndex);
  const possibleEndOfRow = swapNumIndex < zeroIndex ? swapNumIndex : zeroIndex;

  if (distance === size || (distance === 1 && !isEndOfRow(possibleEndOfRow, size))) {
    if (moveCounter === 0) setTimer(true);
    setCounter((count) => count + 1);
    const numToSwap = prevConfig[swapNumIndex];
    prevConfig[zeroIndex] = numToSwap;
    prevConfig[swapNumIndex] = 0;
    return prevConfig;
  }
  return prevConfig;
};
const solvedCorrectly = (history) => {
  Swal.fire({
    title: "Congratulations",
    text: "You solved the puzzle, I wish it was fun.",
    icon: "success",
    showClass: "solvedCorrectly",
    confirmButtonText: "Return Home",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
  }).then((res) => {
    if (res.value) history.push("/");
  });
};

/* Main Component */
const Game = () => {
  const { type } = useParams();
  const gameSize = parseInt(type);
  const initialConfiguration = getRandomUniqueArr(gameSize * gameSize);
  const history = useHistory();
  const [moveCounter, setCounter] = useState(0);
  const [startTimer, setTimer] = useState(false);
  const [initConfig, setInitConfig] = useState(initialConfiguration);
  const solutionArray = gameSize === 4 ? solution_four : solution_three;
  const tile = useRef(null);
  // fires on each square click and swaps conditionally
  const swapHandler = (num) => {
    const swappedArr = getSwappedArr(num, [...initConfig], gameSize, setTimer, setCounter, moveCounter, tile);
    setInitConfig(swappedArr);
    // if (JSON.stringify(solutionArray) === JSON.stringify(swappedArr)) solvedCorrectly(history);
    if (true) solvedCorrectly(history);
  };

  // resets the moves counter and stop watch
  const resetHandler = (size) => {
    setInitConfig(getRandomUniqueArr(size * size));
    setCounter(0);
    setTimer((prev) => !prev);
  };

  return (
    <div className='game-view-container'>
      <div className='move-counter'>
        <div className='moves-num'>
          <p>Moves</p> <p>{moveCounter}</p>
        </div>
        <div className='timer'>
          <p>Time</p>
          <StopWatch start={startTimer} />
        </div>
      </div>
      <div className='game-container'>
        <div className={`game --${gameSize}`}>
          {initConfig.map((num, index) =>
            num !== 0 ? (
              <div ref={tile} key={index} className='game-tile' disabled={false} onClick={() => swapHandler(num)} gameSize={gameSize}>
                {num}
              </div>
            ) : (
              <div key={index}></div>
            )
          )}
        </div>
      </div>
      <div className='game-btns-container'>
        <ResetBtn onPress={() => resetHandler(gameSize)}>Reset</ResetBtn>
        <BackBtn resetMoveCounter={() => resetHandler(gameSize)}>Exit</BackBtn>
      </div>
    </div>
  );
};

export default Game;

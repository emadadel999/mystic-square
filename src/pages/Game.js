import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import Tile from "../components/Tile";
import "./Game.css";

/* Global Variables */
const solution_four = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const solution_three = [1, 2, 3, 4, 5, 6, 7, 8, 0];
const class_four = "fourbyfour";
const class_three = "threebythree";

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

  if (distance === size || (distance === 1 && !isEndOfRow(possibleEndOfRow, size))) {
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
  const classType = gameSize === 4 ? class_four : class_three;
  const solutionArray = gameSize === 4 ? solution_four : solution_three;

  const swapHandler = (num) => {
    const swappedArr = getSwappedArr(num, [...initConfig], gameSize);
    setInitConfig(swappedArr);
    if (JSON.stringify(solutionArray) === JSON.stringify(swappedArr))
      // Need to be implemented !
      // --> notify the user that he has won with a sweet alert
      history.push("/");
  };

  const resetHandler = size => setInitConfig(getRandomUniqueArr(size * size));

  return (
    <>
      <div className={`game ${classType}`}>
        {initConfig.map((num) => {
          return num === 0 ? (
            <Tile key={num} className="zeroTile" disabled={true}></Tile>
          ) : (
            <Tile
              key={num}
              className="tile"
              disabled={false}
              onPress={() => swapHandler(num)}
            >
              {num}
            </Tile>
          );
        })}
      </div>
      <div className="gameBtns-container">
        <button id="resetBtn" onClick={() => resetHandler(gameSize)}>
          Reset
        </button>
        <Link id="backBtn" type="button" to="/">
          Back
        </Link>
      </div>
    </>
  );
};

export default Game;

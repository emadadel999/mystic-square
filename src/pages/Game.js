import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import Tile from "../components/Tile";
import "./Game.css";

const getRandomUniqueArr = (arrSize) => {
  const numbers = new Set();
  while (numbers.size < arrSize)
    numbers.add(Math.floor(Math.random() * arrSize));
  return new Array(...numbers);
};

const Game = () => {
  let history = useHistory();
  const { type } = useParams();
  const gameSize = parseInt(type);
  const initialConfiguration = getRandomUniqueArr(gameSize * gameSize);
  const [initConfig, setInitConfig] = useState(initialConfiguration);

  const classType = gameSize === 4 ? "fourbyfour" : "threebythree";
  const solutionArray =
    gameSize === 4
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
      : [1, 2, 3, 4, 5, 6, 7, 8, 0];

  const swapHandler = (number, prevConfig, size) => {
    const zeroIndex = prevConfig.indexOf(0);
    const swapNumIndex = prevConfig.indexOf(number);
    const distance = Math.abs(swapNumIndex - zeroIndex);

    if (distance === size || distance === 1) {
      const numToSwap = prevConfig[swapNumIndex];
      prevConfig[zeroIndex] = numToSwap;
      prevConfig[swapNumIndex] = 0;

      setInitConfig(prevConfig);
    }

    if (JSON.stringify(solutionArray) === JSON.stringify(prevConfig)) {
      history.push('/result');
    }
  };

  const resetHandler = (size) => {
    const newConfig = getRandomUniqueArr(size * size);
    setInitConfig(newConfig);
  };

  return (
    <React.Fragment>
      <div className={`game ${classType}`}>
        {initConfig.map((n) => {
          return n === 0 ? (
            <Tile key={n} className="zeroTile" disabled={true}></Tile>
          ) : (
            <Tile
              key={n}
              className="tile"
              disabled={false}
              onPress={() => swapHandler(n, [...initConfig], gameSize)}
            >
              {n}
            </Tile>
          );
        })}
      </div>
      <div className="gameBtns-container">
        <button
          className="gameBtn"
          id="resetBtn"
          type="button"
          onClick={() => resetHandler(gameSize)}
        >
          Reset
        </button>
        <Link className="gameBtn" id="giveUpBtn" type="button" to="/welcome">
          Give up
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Game;

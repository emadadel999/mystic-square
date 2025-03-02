"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StopWatch from "../../src/components/stop-watch";
import ExitIcon from "../../src/components/icons/exit";
import ResetIcon from "../../src/components/icons/reset";

export default function Game({ type: gameType }: { type: number }) {
  const initSquares = getRandomSquares(gameType * gameType);
  const [squares, setSquares] = useState(initSquares);
  const [moveCounter, setCounter] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const router = useRouter();

  // fires on each square click and swaps conditionally
  function squareClicked(num) {
    const swappedSquares = swap(num, squares, gameType, moveCounter);

    setSquares(swappedSquares);

    if (isSolved(gameType, swappedSquares)) {
      Swal.fire({
        title: "Congratulations",
        text: "You solved the puzzle, I wish it was fun.",
        icon: "success",
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        },
        confirmButtonText: "Return Home",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
      }).then((res) => {
        if (res.value) router.push("/");
      });
    }
  }

  function swap(
    swapNum: number,
    prevConfig: number[],
    size: number,
    moveCounter: number
  ) {
    const zeroIndex = prevConfig.indexOf(0);
    const swapNumIndex = prevConfig.indexOf(swapNum);

    const distance = Math.abs(swapNumIndex - zeroIndex);
    const possibleEndOfRow = Math.min(swapNumIndex, zeroIndex);

    if (
      distance === size ||
      (distance === 1 && !isEndOfRow(possibleEndOfRow, size))
    ) {
      if (moveCounter === 0) setTimerStarted(true);
      setCounter((count) => count + 1);

      //swap
      prevConfig[zeroIndex] = swapNum;
      prevConfig[swapNumIndex] = 0;

      return prevConfig;
    } else return prevConfig;
  }

  function reset(size: number) {
    setSquares(getRandomSquares(size * size));
    setCounter(0);
    setTimerStarted((prev) => !prev);
  }

  return (
    <div className="game-view-container noselect">
      <div className="move-counter">
        <div className="moves-num">
          <p>Moves</p> <data value={moveCounter}>{moveCounter}</data>
        </div>
        <div className="timer">
          <p>Time</p>
          <StopWatch start={timerStarted} />
        </div>
      </div>
      <div className="game-container">
        <div className="face front">
          <div className={`game --${gameType}`}>
            {squares.map((num, index) =>
              num !== 0 ? (
                <div
                  key={index}
                  className="game-tile"
                  onClick={() => squareClicked(num)}
                >
                  {num}
                </div>
              ) : (
                <div className="game-tile --empty" key={index}></div>
              )
            )}
          </div>
        </div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <div className="game-btns-container">
        <button className="game-btn reset-btn" onClick={() => reset(gameType)}>
          <ResetIcon />
        </button>
        <Link className="game-btn back-btn" type="button" href="/">
          <ExitIcon />
        </Link>
      </div>
    </div>
  );
}

/* Helper Functions */
function isEndOfRow(index, rowSize) {
  return (index + 1) % rowSize === 0;
}

function getRandomSquares(arrSize: number): number[] {
  const numbers = new Set<number>();

  while (numbers.size < arrSize)
    numbers.add(Math.floor(Math.random() * arrSize));

  return new Array<number>(...numbers);
}

function isSolved(gameType: number, trial: number[]) {
  const solution_four = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  const solution_three = [1, 2, 3, 4, 5, 6, 7, 8, 0];

  const solution = gameType === 4 ? solution_four : solution_three;
  return JSON.stringify(solution) === JSON.stringify(trial);
}

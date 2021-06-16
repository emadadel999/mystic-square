import React from "react";
import "./MovesCounter.css";

const MovesCounter = ({ moveCounter }) => {
  return (
    <div className="numMoves">
      <p>Number of moves: {moveCounter}</p>
    </div>
  );
};

export default MovesCounter;

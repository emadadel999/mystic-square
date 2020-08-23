import React from "react";

import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Mystic Square</h1>
      <h2>Choose game type</h2>
      <div className="choice-container">
        <Link className="choice" type='button' to={`/game/${3}`}>3 x 3</Link>
        <Link className="choice" type='button' to={`/game/${4}`}>4 x 4</Link>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";

import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <p className='welcome-text'>Welcome to Mystic Square</p>
      <p className="welcome-subtext">Choose game type</p>
      <div className="choice-container">
        <Link className="choiceBtn" type='button' to={`/game/${3}`}>3 x 3</Link>
        <Link className="choiceBtn" type='button' to={`/game/${4}`}>4 x 4</Link>
      </div>
    </div>
  );
};

export default Welcome;

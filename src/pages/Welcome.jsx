import React, { useState } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Welcome.css";
import ChevronDown from "../components/Icons/ChevronDown";
import { Link } from "react-router-dom";
import ChoiceIcon from "../components/Icons/ChoiceIcon";

const Welcome = () => {
  const { width } = useWindowDimensions();
  const [isActive, setActive] = useState(false);
  const toggleInfo = () => setActive((prevActive) => !prevActive);
  const getWrapperStyle = () => (isActive ? { height: "300px" } : { height: "0px" });
  return (
    <>
      <h1 className='title-text'>𝕄𝕪𝕤𝕥𝕚𝕔 𝕊𝕢𝕦𝕒𝕣𝕖</h1>
      <div className='details-container'>
        <p className={isActive ? "details-text active" : "details-text"}>
          The 15-puzzle (also called Gem Puzzle, Boss Puzzle, Game of Fifteen, Mystic Square and many others) is a sliding puzzle that consists of a frame of numbered square tiles in random order with
          one tile missing. The puzzle also exists in other sizes, particularly the smaller 8-puzzle. If the size is 3×3 tiles, the puzzle is called the 8-puzzle or 9-puzzle, and if 4×4 tiles, the
          puzzle is called the 15-puzzle or 16-puzzle named, respectively, for the number of tiles and the number of spaces. The object of the puzzle is to place the tiles in order by making sliding
          moves that use the empty space.
          <br />
          <b>To solve the puzzle</b>, the numbers must be rearranged into order.
        </p>
        <div className='details-toggler' onClick={toggleInfo}>
          <p className='details-toggler-title'>What's it about</p>
          <div className={isActive ? "details-toggler-icon expanded" : "details-toggler-icon"}>
            <ChevronDown />
          </div>
        </div>
      </div>
      <h4 className='type-text'>Pick a level</h4>
      {/* transition effect for buttons -- to be implemented */}
      <div className='choice-container'>
        <Link type='button' to='/game/3'>
          <div className='choice-squares-container --3'>
            {[...Array(8)].map((x, i) => (
              <i className='choice-square' key={i} />
            ))}
          </div>
        </Link>
        <p className='orText'>
          <ChoiceIcon />
        </p>
        <Link type='button' to='/game/4'>
          <div className='choice-squares-container --4'>
            {[...Array(15)].map((x, i) => (
              <i className='choice-square' key={i} />
            ))}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Welcome;

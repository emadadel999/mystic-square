import React, { useState } from "react";
import { Link } from "react-router-dom";

import SampleIcon from "../components/SampleIcon";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Welcome.css";

/* Helper Functions */
const InfoText = ({style}) => (
  <p className="details-text" style={style}>
    The 15-puzzle (also called Gem Puzzle, Boss Puzzle, Game of Fifteen,
    Mystic Square and many others) is a sliding puzzle that consists of a
    frame of numbered square tiles in random order with one tile missing. The
    puzzle also exists in other sizes, particularly the smaller 8-puzzle. If
    the size is 3×3 tiles, the puzzle is called the 8-puzzle or 9-puzzle, and
    if 4×4 tiles, the puzzle is called the 15-puzzle or 16-puzzle named,
    respectively, for the number of tiles and the number of spaces. The object
    of the puzzle is to place the tiles in order by making sliding moves that
    use the empty space.
    <br />
    <b>To solve the puzzle</b>, the numbers must be rearranged into order.
  </p>
);

/* Main Component */
const Welcome = () => {
  const { width } = useWindowDimensions();
  const [isActive, setActive] = useState(false);
  const toggleInfo = () => setActive((prevActive) => !prevActive);
  const getWrapperStyle = () => isActive ? { height: "300px" } : { height: "0px" };
  
  return (
    <div className="container">
      <h1 className="title-text">𝕄𝕪𝕤𝕥𝕚𝕔 𝕊𝕢𝕦𝕒𝕣𝕖</h1>
      <div className="details-container">
        {width > 992 ? <InfoText/> : (
          <>
            <div className="details-toggler" onClick={toggleInfo}>
              <p className="toggler-title">More info</p>
              <p className="toggler-sign">{isActive ? "-" : "+"}</p>
            </div>
            <div className="detailsText-container" style={getWrapperStyle()}>
              <InfoText/>
            </div>
          </>
        )}
      </div>
      <h4 className="type-text">ꪻꪗρꫀ</h4>
      <div className="choice-container">
        <Link type="button" to={`/game/${3}`}>
          <SampleIcon
            type={3}
            typeClass="sampleMainRect3"
            rectClass="sampleSmallRect"
          />
        </Link>
        <p className="orText">𝓸𝓻</p>
        <Link type="button" to={`/game/${4}`}>
          <SampleIcon
            type={4}
            typeClass="sampleMainRect4"
            rectClass="sampleSmallRect"
          />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

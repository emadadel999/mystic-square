import React, { useState } from "react";
import styled from "styled-components";

const DetailsTextContainer = styled.div`
  transition: height ease 1s;
  max-height: 300px;
  overflow: auto;
  padding: 10px 20px;
`;
const DetailsText = styled.p`
  font-size: 0.75em;
`;
const DetailsToggler = styled.div`
  background-color: rgb(117, 157, 230);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TogglerTitle = styled.p`
  color: #081d45;
  font-size: 0.8em;
  font-family: monospace;
  text-align: center;
  margin: 0 10px 0 10px;
`;
const TogglerSign = styled.p`
  color: #081d45;
  font-size: 1em;
  text-align: center;
  margin: 0 10px 0 10px;
`;

const InfoText = ({ style }) => (
  <DetailsText style={style}>
    The 15-puzzle (also called Gem Puzzle, Boss Puzzle, Game of Fifteen, Mystic
    Square and many others) is a sliding puzzle that consists of a frame of
    numbered square tiles in random order with one tile missing. The puzzle also
    exists in other sizes, particularly the smaller 8-puzzle. If the size is 3×3
    tiles, the puzzle is called the 8-puzzle or 9-puzzle, and if 4×4 tiles, the
    puzzle is called the 15-puzzle or 16-puzzle named, respectively, for the
    number of tiles and the number of spaces. The object of the puzzle is to
    place the tiles in order by making sliding moves that use the empty space.
    <br />
    <b>To solve the puzzle</b>, the numbers must be rearranged into order.
  </DetailsText>
);

const DescriptionBox = ({ width }) => {
  const [isActive, setActive] = useState(false);
  const toggleInfo = () => setActive((prevActive) => !prevActive);
  const getWrapperStyle = () =>
    isActive ? { height: "300px" } : { height: "0px" };
  return width > 992 ? (
    <InfoText />
  ) : (
    <>
      <DetailsToggler onClick={toggleInfo}>
        <TogglerTitle>More info</TogglerTitle>
        <TogglerSign>{isActive ? "-" : "+"}</TogglerSign>
      </DetailsToggler>
      <DetailsTextContainer style={getWrapperStyle()}>
        <InfoText />
      </DetailsTextContainer>
    </>
  );
};

export default DescriptionBox;

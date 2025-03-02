"use client"

import React, { useState } from "react";
import ChevronDown from "../src/components/icons/chevron-down";

export default function Desc() {
  const [isActive, setIsActive] = useState(false);
  function toggleInfo() {setIsActive((prevActive) => !prevActive)};
  return (
    <section className="details-container">
        <p className={isActive ? "details-text active" : "details-text"}>
            The 15-puzzle (also called Gem Puzzle, Boss Puzzle, Game of Fifteen,
            Mystic Square and many others) is a sliding puzzle that consists of a
            frame of numbered square tiles in random order with one tile missing.
            The puzzle also exists in other sizes, particularly the smaller
            8-puzzle. If the size is 3×3 tiles, the puzzle is called the 8-puzzle
            or 9-puzzle, and if 4×4 tiles, the puzzle is called the 15-puzzle or
            16-puzzle named, respectively, for the number of tiles and the number
            of spaces. The object of the puzzle is to place the tiles in order by
            making sliding moves that use the empty space.
            <br />
            <b>To solve the puzzle</b>, the numbers must be rearranged into order from top.
        </p>
        <div className="details-toggler" onClick={toggleInfo}>
            <p className="details-toggler-title">GAME RULES</p>
            <div
            className={
                isActive
                ? "details-toggler-icon expanded"
                : "details-toggler-icon"
            }
            >
            <ChevronDown />
            </div>
        </div>
    </section>
  );
}
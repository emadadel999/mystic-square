import React from "react";
import DescriptionBox from "../components/DescriptionBox";
import GameChoice from "../components/GameChoice";

import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Welcome.css";

const Welcome = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="container">
      <h1 className="title-text">𝕄𝕪𝕤𝕥𝕚𝕔 𝕊𝕢𝕦𝕒𝕣𝕖</h1>
      <div className="details-container">
        <DescriptionBox width={width} />
      </div>
      <h4 className="type-text">ꪻꪗρꫀ</h4>
      {/* transition effect for buttons -- to be implemented */}
      <div className="choice-container">
        <GameChoice gameType={3} />
        <p className="orText">𝓸𝓻</p>
        <GameChoice gameType={4} />
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";

import "./SampleIcon.css";

const SampleIcon = ({ type, typeClass, rectClass }) => {
  const length = type * type - 1;
  return (
    <div className={`${typeClass} mainRect`}>
      {[...Array(length)].map((x, i) => <div key={i} className={`${rectClass} smallRect`}></div> )}
    </div>
  );
};

export default SampleIcon;

import React from "react";
import { SvgProp } from "./icon-type";

export default function reset(props: SvgProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.svgWidth || "32"}
      height={props.svgHeight || "32"}
      viewBox="0 0 32 32"
    >
      <path
        fill={props.fill || "currentColor"}
        d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
      />
    </svg>
  );
}

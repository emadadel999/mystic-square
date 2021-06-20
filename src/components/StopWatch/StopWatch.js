import React from "react";
import TimerStopWatch from "./TimerStopWatch";

const StopWatch = ({ start }) => {
  const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
  return (
    <TimerStopWatch isOn={start} watchType="stopwatch" fromTime={fromTime} />
  );
};

export default StopWatch;

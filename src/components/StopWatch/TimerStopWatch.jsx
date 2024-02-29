import React, { useEffect, useState } from "react";

let time;

const getValidDisplayTime = (hours, minutes, seconds) => {
  let tmp = "";
  tmp = tmp + (hours / 100).toFixed(2).slice(2);
  tmp = tmp + ":";
  tmp = tmp + (minutes / 100).toFixed(2).slice(2);
  tmp = tmp + ":";
  tmp = tmp + (seconds / 100).toFixed(2).slice(2);
  return tmp;
};
const startTimer = (defaultTime, setText) => {
  let countDownDate = new Date(Date.now());
  countDownDate.setSeconds(countDownDate.getSeconds() + defaultTime.getSeconds() + 1);
  countDownDate.setMinutes(countDownDate.getMinutes() + defaultTime.getMinutes());
  countDownDate.setHours(countDownDate.getHours() + defaultTime.getHours());
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(x);
    }
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //hint(seconds);
    setText(getValidDisplayTime(hours, minutes, seconds));
  }, 1000);
};
const startStopWatch = (fromTime, defaultTime, setText, setIdInterval) => {
  if (!time) {
    if (fromTime) {
      time = new Date(fromTime);
    } else {
      time = new Date(2000, 0, 0, 0, 0, 0, 0);
    }
  }
  let start = Date.now();
  const id = setInterval(() => {
    const delta = Date.now() - start;
    time.setMinutes(defaultTime.getMinutes());
    time.setHours(defaultTime.getHours());
    time.setSeconds(Math.floor(delta / 1000) + defaultTime.getMinutes());
    setText(getValidDisplayTime(time.getHours(), time.getMinutes(), time.getSeconds()));
  }, 1000);
  setIdInterval(id);
};

const TimerStopWatch = ({ fromTime, isOn, watchType }) => {
  let defaultTime;

  if (fromTime) {
    defaultTime = new Date(fromTime);
  } else {
    defaultTime = new Date(Date.now());
  }

  const [text, setText] = useState(getValidDisplayTime(defaultTime.getHours(), defaultTime.getMinutes(), defaultTime.getSeconds()));
  const [idInterval, setIdInterval] = useState(0);

  // as stop watch
  useEffect(() => {
    if (isOn && watchType === "stopwatch") startStopWatch(fromTime, defaultTime, setText, setIdInterval);
    else if (!isOn) {
      clearInterval(idInterval);
      setText(getValidDisplayTime(defaultTime.getHours(), defaultTime.getMinutes(), defaultTime.getSeconds()));
    }
    return () => clearInterval(idInterval);
  }, [isOn]);

  // as timer
  useEffect(() => {
    if (isOn && watchType === "timer") startTimer(defaultTime, setText);
    return () => clearInterval(idInterval);
  }, [isOn]);

  return <div>{text}</div>;
};

export default TimerStopWatch;

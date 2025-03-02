"use client";
import React, { useEffect, useState } from "react";

export default function stopWatch({ start }) {
  const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);

  const [text, setText] = useState(
    getValidDisplayTime(
      fromTime.getHours(),
      fromTime.getMinutes(),
      fromTime.getSeconds()
    )
  );
  const [idInterval, setIdInterval] = useState(0);

  // as stop watch
  useEffect(() => {
    if (start) startStopWatch(fromTime, fromTime, setText, setIdInterval);
    else if (!start) {
      clearInterval(idInterval);
      setText(
        getValidDisplayTime(
          fromTime.getHours(),
          fromTime.getMinutes(),
          fromTime.getSeconds()
        )
      );
    }
    return () => clearInterval(idInterval);
  }, [start]);

  return <time dateTime={text}>{text}</time>;
}

let time;

function getValidDisplayTime(hours, minutes, seconds) {
  let tmp = "";
  tmp = tmp + (hours / 100).toFixed(2).slice(2);
  tmp = tmp + ":";
  tmp = tmp + (minutes / 100).toFixed(2).slice(2);
  tmp = tmp + ":";
  tmp = tmp + (seconds / 100).toFixed(2).slice(2);
  return tmp;
}
function startStopWatch(fromTime, defaultTime, setText, setIdInterval) {
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
    setText(
      getValidDisplayTime(time.getHours(), time.getMinutes(), time.getSeconds())
    );
  }, 1000);
  setIdInterval(id);
}

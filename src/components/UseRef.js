import React, { useState, useEffect, useRef } from "react";

export default function UseRef() {
  const [counter, setCounter] = useState();
  const countDown = useRef();
  const isStarted = useRef(false);
  const inputElement = useRef();
  console.log("isStarted.current: " + isStarted.current);
  console.log("counter: " + counter);
  const handleStart = (isStarted) => {
    inputElement.current.value = "";
    if (!isStarted.current && counter > 0) {
      countDown.current = setInterval(() => {
        console.log("start");
        isStarted.current = true;
        setCounter((prev) => prev - 1);
      }, 1000);
    }
  };

  const handleStop = (isStarted) => {
    if (isStarted.current) {
      console.log("stop");
      isStarted.current = false;
      clearInterval(countDown.current);
    }
  };

  const handleSetCounter = (e) => {
    handleStop(isStarted);
    setCounter(Number(e.target.value));
  };

  useEffect(() => {
    if (counter <= 0) {
      handleStop(isStarted);
    }
  }, [counter]);

  return (
    <div>
      <h1>count down: {Number.isInteger(Number(counter)) ? counter : 0}</h1>
      <span>Nhập số giây: </span>
      <input ref={inputElement} type="text" onChange={handleSetCounter} />
      <button onClick={() => handleStart(isStarted)}>Start</button>
      <button onClick={() => handleStop(isStarted)}>Stop</button>
    </div>
  );
}

import React, { useState, useCallback } from "react";
import ReactMemo from "./ReactMemo";

export default function UseCallBack() {
  const [counter, setCounter] = useState(0);

  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div>
      <ReactMemo onCounter={handleCounter} />
      <h1>counter: {counter}</h1>
    </div>
  );
} 

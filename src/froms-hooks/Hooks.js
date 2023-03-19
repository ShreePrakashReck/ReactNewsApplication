import React, { useState, useRef, useEffect } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  let normalCounter = 0;
  const refCounter = useRef(0);
  useEffect(() => {
    console.log("counter : ", counter);
    console.log("Normalcounter : ", normalCounter);
    console.log("refcounter : ", refCounter.current);
    return () => {
      console.log("Unmounting state occurs");
    };
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    refCounter.current = refCounter.current + 1;
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Hooks;

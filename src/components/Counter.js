import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  // let StateF = useState(0);
  // let count = StateF[0];
  // let setCount = StateF[1];
  function updatecount() {
    setCount(count + 1);
    console.log("the value of count is : ", count);
  }
  return (
    <div>
      <p>The Value is : {count}</p>
      <button onClick={updatecount}>Increment</button>
    </div>
  );
}

export default Counter;

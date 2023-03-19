import React, { useState, useEffect } from "react";

function UseEffectHooks() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState(0);
  function unMountthisEffect() {
    console.log("Unmounting the states");
  }
  useEffect(() => {
    console.log(name, "Updated Name");
    return unMountthisEffect;
  }, [name]);
  useEffect(() => {
    console.log(count, "Updated Counter");
  }, [count]);
  useEffect(() => {
    console.log("re-rendering");
  });
  useEffect(() => {
    console.log("rendering");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCounter(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHooks;

import { useState } from "react";
import React from "react";

function Fruits() {
  let [fruit, setfruits] = useState("Apple");
  let [inputtext, setInputtext] = useState("");
  const updatefruits = () => {
    setfruits(inputtext);
  };
  function updateInputtext(event) {
    const curInputtext = event.target.value;
    setInputtext(curInputtext);
  }
  return (
    <>
      <p>friuts name is : {fruit}</p>
      <input type="text" onChange={updateInputtext} />
      <button onClick={() => updatefruits()}>submit</button>
    </>
    //<button onClick={() => setfruits("Papaya")}>Papaya</button>
    //<button onClick={() => setfruits("Apple")}>Apple</button>
    //<button onClick={() => setfruits("Mango")}>Mango</button>
  );
}

export default Fruits;

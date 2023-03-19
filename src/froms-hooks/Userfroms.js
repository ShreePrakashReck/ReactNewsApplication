import React, { useRef, useState } from "react";

function Userfroms() {
  const [name, setName] = useState("");
  const [fruit, setfruit] = useState("");
  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit button is clicked");
    const name = nameInputRef.current.value;
    const fname = fruitSelectRef.current.value;
    //alert(name);
    alert(name + " " + fname);
  }
  function handleChange(e) {
    setfruit(e.target.value);
  }
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="nameInput" ref={nameInputRef} />
      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="apple">Apple</option>
        <option value="mango">Mango</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
export default Userfroms;

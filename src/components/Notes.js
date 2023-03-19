import React, { useState } from "react";
import App from "../App";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");
  function upDateCurrNote(event) {
    setCurNote(event.target.value);
  }
  function addNote(event) {
    const setNotesArray = [...notes, curNote];
    setNotes(setNotesArray);
  }
  return (
    <>
      <input onChange={upDateCurrNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul>
        {notes.map((note) => {
          return (
            <li key="index">
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Notes;

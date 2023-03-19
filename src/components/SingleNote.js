import React from "react";

function SingleNote(props) {
  const noteStyle = {
    padding: "20px",
    borderRadius: "10px",
    border: "solid 2px green",
    margin: "10px",
  };
  return (
    <div style={noteStyle} className="SingleNote">
      <p className="noteText">{props.note}</p>
    </div>
  );
}

export default SingleNote;

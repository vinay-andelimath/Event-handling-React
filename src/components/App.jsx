import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  //hold the values
  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");

  //const [isMouseOut,setMouseOut]=useState();

  function handleClick() {
    setHeadingText(name);
  }
  function handleMouseOver() {
    setMouseOver("black");
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    setName(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello friend,{headingText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        // onChange={handleChange}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

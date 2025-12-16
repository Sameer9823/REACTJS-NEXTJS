import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  // const increment = (numval) => {
  //   setCount(count + 1);
  //   setCount((prevCount) => prevCount + numval + 1);
  //   setCount((prevCount) => prevCount + numval);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };
  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: "0 5px" }}>
          Increment
        </button>
        <button
          onClick={() => setCount((prevCount) => Math.max(0, prevCount - 1))}
          style={{ margin: "0 5px" }}
        >
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={{ margin: "0 5px" }}>
          Reset
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
            borderRadius: "8px",
            fontSize: "16px",
            textAlign: "center",
            backgroundColor: "#282c34",
            color: "white",
            outline: "none",
          }}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          type="text"
        />
        <button
          style={{ margin: "0 5px" }}
          onClick={() => {
            setCount(Number(inputValue));
            setInputValue(0);
          }}
        >
          Set to {inputValue}
        </button>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    return setCounter(counter + 1);
  }

  function decrementCounter() {
    return setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <br />
      <h1>Counter from Button Component</h1>
      <h2>{counter}</h2>
      <Button onClick={incrementCounter} label={"Increment"} />
      <Button onClick={decrementCounter} label={"Decrement"} />
    </div>
  );
}

export default App;

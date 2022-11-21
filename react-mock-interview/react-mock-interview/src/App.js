import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";

//https://randomuser.me/api
function App() {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function incrementCounter() {
    return setCounter(counter + 1);
  }

  function decrementCounter() {
    return setCounter(counter - 1);
  }

  const fetchRandomData = async () => {
    setIsLoading(true);
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data.results[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <div className="App">
      <div>
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
      <div>
        <button
          onClick={() => {
            fetchRandomData();
          }}
        >
          Fetch Random Data
        </button>
      </div>
      <div>
        {isLoading || !person ? (
          <div>loading...</div>
        ) : (
          <div>
            <br />
            <div>
              {person.name.title} {person.name.first} {person.name.last}
            </div>
            <img
              style={{ borderRadius: "50%" }}
              src={person.picture.large}
              alt={""}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

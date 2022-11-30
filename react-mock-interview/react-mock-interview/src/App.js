import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";
import RandomUserAPI from "./components/RandomUserAPI/RandomUserAPI";

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
    console.log(person)
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <div className="App">
      <div>
        {counter}
        <Button
          title={"Increment"}
          onClick={incrementCounter}
          label={"Increment"}
        />
        {counter}
        <Button
          title={"Decrement"}
          onClick={decrementCounter}
          label={"Decrement"}
        />
      </div>
      <div>
        <Button
          isLoading={isLoading}
          title={"Fetch Person"}
          person={person}
          onClick={fetchRandomData}
          label={"Fetch Person"}
        />
      </div>
      <div>
        <RandomUserAPI />
      </div>
    </div>
  );
}

export default App;

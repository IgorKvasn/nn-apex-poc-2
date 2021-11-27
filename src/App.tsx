import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  function increment() {
    console.log("increment");
    setValue(value + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={() => increment()} type="button">
          Click me
        </button>
        {value}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

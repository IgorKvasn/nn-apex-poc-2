import React, { useState } from "react";
// import logo from "";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  function increment(source: string) {
    console.log("increment", source);
    setValue(value + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://rawcdn.githack.com/IgorKvasn/nn-apex-poc-2/9006858cc5ac4f9ab2275e017940a1379dacafbe/build/static/media/logo.6ce24c58.svg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={() => increment("button")} type="button">
          Click me
        </button>

        <div
          onClick={() => increment("div")}
          style={{
            width: 100,
            aspectRatio: "1/1",
            backgroundColor: "orange",
            cursor: "pointer",
          }}
        >
          Click me (DIV)
        </div>
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

import { useState, useMemo } from "react";
import "./App.css";

console.log("Radhe Radhe");
function App() {
  const [password, setPassword] = useState("_Ypk^*RrwZvgKM");
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [capital, setCapital] = useState(false);
  const [symbol, setSymbol] = useState(false);

  function generatePass() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (capital) str += "ABCDEFGHIJKLMNPOQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (symbol) str += "!@#$%&*_-?/~^";

    for (let i = 0; i < range; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }

  useMemo(() => generatePass(), [range, number, capital, symbol]);

  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <h1 className="text-center">Password Generator</h1>

      <div className="container">
        <div id="input-container" className="flex items-center">
          <input
            type="text"
            value={password}
            id="display"
            className="text-5xl px-2 rounded w-40"
            readOnly
          />
          <button
            onClick={() => {
              generatePass();
            }}
          >
            click
          </button>
        </div>
        <div className="flex items-center justify-center text-xl gap-x-2">
          <input
            type="range"
            id="range"
            min={8}
            max={20}
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
          <label htmlFor="range"> Range {range}</label>
        </div>

        <div className="flex justify-center items-center text-xl gap-x-2">
          <input
            type="checkbox"
            name="capital"
            id="capital"
            onClick={(e) => {
              setCapital(e.target.checked);
            }}
          />
          <label htmlFor="capital">Capital Letters</label>
        </div>
        <div className="flex justify-center items-center text-xl gap-x-2">
          <input
            type="checkbox"
            name="number"
            id="number"
            onClick={(e) => {
              setNumber(e.target.checked);
            }}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex justify-center items-center text-xl gap-x-2">
          <input
            type="checkbox"
            name="symbol"
            id="symbol"
            onClick={(e) => {
              setSymbol(e.target.checked);
            }}
          />
          <label htmlFor="symbol">Symbol</label>
        </div>
      </div>
    </div>
  );
}

export default App;

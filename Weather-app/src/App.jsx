import { useState } from "react";
import "./App.css";
import Card from "./Components/Card_1";

function App() {
  const [btnText, setBtnText] = useState("Light Mode");
  const [btnBg, setBtnBg] = useState("#fff");
  let theme = false;
  function themeValidation() {
    if (theme) {
      // document.getElementsByClassName("theme")[0].innerHTML = "Light Mode";
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "#292929";
      document.getElementsByClassName("theme")[0].style.backgroundColor =
        "#fff";
      setBtnBg("#fff");
      document.getElementsByClassName("theme")[0].style.color = "black";
      theme = false;
    } else {
      // document.getElementsByClassName("theme")[0].innerHTML = "Dark Mode";
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = "#fff";
      document.getElementsByClassName("theme")[0].style.backgroundColor =
        "#000";
      setBtnBg("#000");
      document.getElementsByClassName("theme")[0].style.color = "white";
      theme = true;
    }
  }
  return (
    <>
      <button
        className="theme"
        onClick={(e) => {
          themeValidation();
          // e.target.innerHTML = btnText;
          // e.target.style.backgroundColor = btnBg
          console.log(e.target.innerHTML);
        }}
      >
        {btnText}
      </button>
      <Card />
    </>
  );
}

export default App;

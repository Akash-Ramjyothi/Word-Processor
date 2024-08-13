import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const inputs = document.querySelectorAll("input");

inputs.forEach((el) => {
  el.addEventListener("blur", (e) => {
    if (e.target.value) {
      e.target.classList.add("dirty");
    } else {
      e.target.classList.remove("dirty");
    }
  });
});

export function processWord(input) {
  const charCount = {};
  for (let char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const sortedChars = Object.keys(charCount).sort(
    (a, b) => charCount[b] - charCount[a]
  );

  let result = "";
  for (let char of sortedChars) {
    result += char.repeat(charCount[char]);
  }

  return result;
}

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setOutput(processWord(input));
  };

  console.log("Input: " + input);

  return (
    <div className="App">
      <div className="parent-container">
        <h1 className="title">Word Processor</h1>
        <label className="custom-field three">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder=""
          />
          <span class="placeholder">Enter word to be processed</span>
          <span class="border"></span>
        </label>
        <br />
        <button className="button button--animated" onClick={handleSubmit}>
          <span class="button__text">Submit</span>
          <span class="button__icon">→</span>
        </button>
        <br />
        <label className="processed-word">Processed Word: </label>
        {output !== "" && <div className="outputContainer">{output}</div>}
      </div>
    </div>
  );
}

export default App;

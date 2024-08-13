import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import TextLabel from "./components/TextLabel/TextLabel";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import ProcessButton from "./components/ProcessButton/ProcessButton";
import InputWordField from "./components/InputWordField/InputWordField";

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
        <Title text="Word Processor" />
        <InputWordField value={input} onChange={handleChange} />
        <br />
        <ProcessButton onClick={handleSubmit} />
        <br />
        <TextLabel>Processed Word:</TextLabel>
        {output !== "" && <OutputContainer processedWord={output} />}
      </div>
    </div>
  );
}

export default App;

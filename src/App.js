import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import TextLabel from "./components/TextLabel/TextLabel";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import ProcessButton from "./components/ProcessButton/ProcessButton";
import InputWordField from "./components/InputWordField/InputWordField";
import { processWord } from "./utils/utils";

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

import { useState, useEffect } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import TextLabel from "./components/TextLabel/TextLabel";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import ProcessButton from "./components/ProcessButton/ProcessButton";
import InputWordField from "./components/InputWordField/InputWordField";

import { processWord } from "./utils/utils";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  // Log input changes (cleaner than console in render)
  useEffect(() => {
    if (input) {
      console.log("Input:", input);
    }
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleBlur = () => {
    setIsDirty(input.trim() !== "");
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    const result = processWord(input.trim());
    setOutput(result);
  };

  return (
    <div className="App">
      <div className="parent-container">
        <Title text="Word Processor" />

        <InputWordField
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
          className={isDirty ? "dirty" : ""}
        />

        <br />

        <ProcessButton onClick={handleSubmit} />

        <br />

        <TextLabel>Processed Word:</TextLabel>

        {output && (
          <OutputContainer processedWord={output} />
        )}
      </div>
    </div>
  );
}

export default App;

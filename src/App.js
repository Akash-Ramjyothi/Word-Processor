import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

export function processWord(input){
  const charCount = {};
  for(let char of input){
    charCount[char] = (charCount[char] || 0)+1;
  }

  const sortedChars = Object.keys(charCount).sort((a,b)=> charCount[b]-charCount[a]); 

  let result='';
  for(let char of sortedChars){
    result+=char.repeat(charCount[char]);
  }

  return result;
}

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    setOutput(processWord(newValue));
  };

  console.log("Input: "+input);

  return (
    <div className="App">
      <h1>Word Processor</h1>
      <input type="text"
      value = {input}
      onChange={handleChange}
      placeholder='Enter processing word'
      ></input>
      <br />
      <label>Processed Word: {output}</label>
    </div>
  );
}

export default App;

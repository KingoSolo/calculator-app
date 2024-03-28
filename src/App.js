import React,{useState} from 'react'
import Screen from './Screen';
import ButtonBox from './Buttonbox';
import './App.css';

function App() {

  const [input,setInput] = useState('')
  return (
    <div className="calculator-wrapper">
    <Screen value ={input} />
    <ButtonBox input={input} setInput={setInput}  />
  </div>
  );
}

export default App;

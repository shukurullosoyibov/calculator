import React from "react";
import { useState } from "react";


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.'];
  const updateCalc = value =>{
    if (
      ops.includes(value) && calc ==='' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc+value);
    if(  !ops.includes(value))
      {
        setResult(eval(calc + value).toString());
      }
  }
  const createDigits = () => {
    const digits = [];
    
    for ( let i = 1; i < 10; i++){
        digits.push(
          <button onClick={()=> updateCalc(i.toString())} key={i} >{i}</button>
        )
     }
     return digits;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const delLast = () => {
    
    if(calc == ''){
        return;
    }
    
    const value = calc.slice(0, -1);
    setCalc(value);

  }
  const clearr = () => {
    
    if(calc == ''){
        return;
    }
    const value = '';
    setCalc(value);

  }
  const timee = () =>{
    document.querySelector('.bubble').setAttribute('style', 'display: block;')
  }

  if(calc == 25){
    timee();
    setTimeout(()=>{document.querySelector('.bubble').setAttribute('style', 'display: none;')}, 2000);
    
  }
  return (
    <div className="App">
        <div className="Calculator">
       
          <div className="display">
          <div class="bubble">Robiyaxon</div>
          
            {result ? <span>({result})</span> : ''}&nbsp; { calc || "0"}
          </div>
          <div className="operators">
            <button onClick={()=> updateCalc('/')}>/</button>
            <button onClick={()=> updateCalc('*')}>*</button>
            <button onClick={()=> updateCalc('+')}>+</button>
            <button onClick={()=> updateCalc('-')}>-</button>
            <button onClick={delLast} >DEL</button>
          </div>
          <div className="digits">
             { createDigits() } 
            <button onClick={()=> updateCalc('0')} >0</button>
            <button onClick={()=> updateCalc('.')} >.</button>
            <button onClick={calculate}
            onDoubleClick={clearr}>=</button>

          </div>
        </div>

    </div>
  );
}

export default App;

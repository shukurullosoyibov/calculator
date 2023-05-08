import React, { useState } from 'react';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={inputValue} />
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>/</button>
      </div>
    </div>
  );
}

export default Calculator;

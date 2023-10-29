import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };
 

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo freeCodeCamp' />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='line'>
          <Button controlClick={addInput}>1</Button>
          <Button controlClick={addInput}>2</Button>
          <Button controlClick={addInput}>3</Button>
          <Button controlClick={addInput}>+</Button>
        </div>
        <div className='line'>
          <Button controlClick={addInput}>4</Button>
          <Button controlClick={addInput}>5</Button>
          <Button controlClick={addInput}>6</Button>
          <Button controlClick={addInput}>-</Button>
        </div>
        <div className='line'>
          <Button controlClick={addInput}>7</Button>
          <Button controlClick={addInput}>8</Button>
          <Button controlClick={addInput}>9</Button>
          <Button controlClick={addInput}>*</Button>
        </div>
        <div className='line'>
          <Button controlClick={}>=</Button>
          <Button controlClick={addInput}>0</Button>
          <Button controlClick={addInput}>.</Button>
          <Button controlClick={addInput}>/</Button>
        </div>
        <div className='line'>
          <ButtonClear controlClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

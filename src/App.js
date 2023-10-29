import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo freeCodeCamp' />
      </div>
      <div className='calculator-container'>
        <div className='line'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='line'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='line'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='line'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='line'></div>
      </div>

    </div>
  );
}

export default App;

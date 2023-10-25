import './App.css';
import freeCodeCampLogo from '.images/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
       <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo freeCodeCamp' />
      </div>
    </div>
  );
}

export default App;

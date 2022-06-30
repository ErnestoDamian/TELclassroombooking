import './assets/css/App.css';


// Componentes
import Barra from './components/Barra';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Barra />
      <div className='center'>
        <Router />
      </div>
    </div>
  );
}

export default App;
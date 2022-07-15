import '../assets/css/App.css';


// Componentes
import NavBar from './NavBar';
import Router from '../Router'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='center'>
        <Router />
      </div>
    </div>
  );
}

export default App;
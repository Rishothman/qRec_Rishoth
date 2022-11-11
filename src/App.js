import theimage from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <header className="App-header">
        <img src={theimage} className="App-logo" alt="logo" />
        <p>
         Welcome to qRec
        </p>

      </header>
      </div>
    </div>
  );
}

export default App;

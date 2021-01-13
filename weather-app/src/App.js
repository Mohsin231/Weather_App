import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// > http://api.openweathermap.org/data/2.5/forecast?q=brooklyn,ny,us&appid=c0e729c8b49ab07ba3d7d006687d5c89 (average weather for the day)
// > http://api.openweathermap.org/data/2.5/forecast?q=brooklyn,ny,us&appid=c0e729c8b49ab07ba3d7d006687d5c89 (detailed weather report)
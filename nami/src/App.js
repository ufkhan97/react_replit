import logo from './braid-paper-logo.png';
import './App.css';
//import './fileretrieval.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>braid.science</h1>
      <button onClick={sayHello}>do NOT click this</button>
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

function sayHello() {
  alert('You clicked me!');
}

export default App;

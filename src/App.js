import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        Testing Page
        </p>
        <a
          className="App-link"
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit us at 
        </a>
      </header>
    </div>
  );
}

export default App;

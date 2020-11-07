import './App.css';

function App() {
  const logo = '/images/logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>manta Kawaii</b>
        </p>
        <a
          className="App-link"
          href="https://www.forte2020.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forte
        </a>
      </header>
    </div>
  );
}

export default App;

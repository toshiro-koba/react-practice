import './App.css';
import Link from './components/link.js'

const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:","");
  if (pass != null) window.location.href = "https://www.forte2020.net/" + pass;
}


// function App() {
const App = () => {
  const logo = '/images/logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>manta Kawaii</b>
        </p>
        <Link text="Forte" onClick={()=>checkIn()}/>
      </header>
    </div>
  );
}

export default App;

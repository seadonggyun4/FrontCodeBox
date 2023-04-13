import logo from './logo.svg';
import './App.css';
import A from './components/A';
import AA from './components/AA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <A /> */}
        <AA />
      </header>
    </div>
  );
}

export default App;

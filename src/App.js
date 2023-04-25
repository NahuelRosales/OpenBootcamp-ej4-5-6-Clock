import './App.css';
import Clock from './hooks/clock';
import ClockFC from './hooks/clockFC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Clock Class Component</h2>
        <Clock/>
        <h2>Clock Functional Component</h2>
        <ClockFC/>
      </header>
    </div>
  );
}

export default App;

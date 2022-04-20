import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The best StopWatch ever</h1>
        <p>Why? Because it is simple!</p>
      </header>
      <StopWatch />
    </div>
  );
}

export default App;

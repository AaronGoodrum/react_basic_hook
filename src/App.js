import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.title}
      </header>
    </div>
  );
}

export default App;

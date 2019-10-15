import React from 'react';
import './App.css';
import Card from './Component/Card'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.title}
      </header>
      <Card />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Card from "./Component/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.title}</header>
        <Card />
      </div>
    );
  }
}

export default App;

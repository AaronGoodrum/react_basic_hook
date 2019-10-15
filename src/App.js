import React from "react";
import "./App.css";
import CardList from "./Component/CardList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.title}</header>
        <CardList />
      </div>
    );
  }
}

export default App;

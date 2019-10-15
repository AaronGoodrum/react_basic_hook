import React from "react";
import "./App.css";
import CardList from "./Component/CardList";
import Form from "./Component/Form"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.title}</header>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;

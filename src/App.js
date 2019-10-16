import React from "react";
import "./App.css";
import CardList from "./Component/CardList";
import Form from "./Component/Form"

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
]

class App extends React.Component {
  state = {
    profiles: testData
  }

  addNewProfile = (profileData) => {
    console.log('APP', profileData, this.state.profiles)

    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
    console.log('APP-update', this.state.profiles)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.title}</header>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;

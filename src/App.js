import React from "react";
import "./App.css";
import CardList from "./Component/CardList";
import FormInput from "./Component/Form"

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ]

class App extends React.Component {
  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  handleDelete = (profile) => {
    const newProfiles = this.state.profiles.filter(item => item.id !== profile.id)
    this.setState({profiles: newProfiles})
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.title}</header>
        <FormInput onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;

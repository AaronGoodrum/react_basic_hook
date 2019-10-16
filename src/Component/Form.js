import React from "react";
const axios = require('axios')

class Form extends React.Component {
  state = {userName:''}

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
    const resp = await 
      axios.get(`https://api.github.com/users/${this.state.userName}`)
      this.props.onSubmit(resp.data)
    }
    catch (error){
        console.log(error)
      }
    }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text" placeholder="Github search" 
        onChange={
          event => this.setState({
            userName: event.target.value
          })
        } 
        required>
      </input>
      <button>Add Card</button>
      </form >
    );
  }
}

export default Form;

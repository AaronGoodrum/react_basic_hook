import React from "react";

class Form extends React.Component {
  state = {userName:''}

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      this.state.userName
    )
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

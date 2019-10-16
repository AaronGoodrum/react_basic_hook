import React from "react";
import {Button, Form, Input, Container, Row, Col} from 'reactstrap';
const axios = require('axios')

class FormInput extends React.Component {
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
      <Form onSubmit={this.handleSubmit}>
      <Container>
      <Row>
      <Col>
      <Input
        type="text" placeholder="Github search" 
        onChange={
          event => this.setState({
            userName: event.target.value
          })
        } 
        required>
      </Input>
      </Col>
      <Col>
      <Button color="success" block size="md">Submit Card</Button>
      </Col>
      </Row>
      </Container>
      </Form >
    );
  }
}

export default FormInput;

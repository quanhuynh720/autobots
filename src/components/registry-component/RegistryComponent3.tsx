import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';


export default class Registry extends React.Component {
     state = {
     userId: 1,
     firstname: "",
     lastname: "",
     username: "",
     email: "",
     password: "",
     bio: "",
     url: ""
   }

  inputFirstname = (event:any) => {
    this.setState({ firstname: event.target.value });
  }

  inputLastname = (event:any) => {
    this.setState({ lastname: event.target.value });
  }

  inputUsername = (event:any) => {
    this.setState({ username: event.target.value });
  }

  inputEmail = (event:any) => {
    this.setState({ email: event.target.value });
  }

  inputPassword = (event:any) => {
    this.setState({ password: event.target.value });
  }

  inputBio = (event:any) => {
    this.setState({ bio: event.target.value });
  }

  inputUrl = (event:any) => {
    this.setState({ url: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    axios.post(`http://localhost:8080/Snappy/addUser.app`, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      bio: this.state.bio,
      url: this.state.url
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label sm={2}>First Name:</Label>
          <Col sm={6} >
          <Input type="text" name="firstname" onChange={this.inputFirstname} />
          </Col> 
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Last Name:</Label>
          <Col sm={6} >
          <Input type="text" name="lastname" onChange={this.inputLastname} />
          </Col> 
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>User Name:</Label>
          <Col sm={6} >
          <Input type="text" name="username" onChange={this.inputUsername} />
          </Col> 
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Email:</Label>
          <Col sm={6} >
          <Input type="text" name="email" onChange={this.inputEmail} />
          </Col> 
        </FormGroup>

        
        <FormGroup row>
          <Label sm={2}>Password:</Label>
          <Col sm={6} >
          <Input type="text" name="password" onChange={this.inputPassword}  />
          </Col> 
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Bio:</Label>
          <Col sm={6} >
          <Input type="text" name="bio" onChange={this.inputBio}  />
          </Col> 
        </FormGroup>

            <FormGroup row>
            <Label sm={2}>Profile Pic:</Label>
            <Col sm={6} >
            <Input type="file" name="url" onChange={this.inputUrl} />
            </Col>
            </FormGroup>

            <FormGroup check row>
        <Col sm={{ size: 10, offset: 0}}>
          <Button type="submit">Add</Button>
          </Col>
      </FormGroup>
        </Form>
      </div>
    )
  }
}

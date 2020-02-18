import React from 'react';
import axios from 'axios';

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
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstname" onChange={this.inputFirstname} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" onChange={this.inputLastname} />
          </label>
          <label>
            Username:
            <input type="text" name="username" onChange={this.inputUsername} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.inputEmail} />
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={this.inputPassword} />
          </label>
          <label>
            Bio:
            <input type="text" name="bio" onChange={this.inputBio} />
          </label>
          <label>
            Profile Pic:
            <input type="text" name="url" onChange={this.inputUrl} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

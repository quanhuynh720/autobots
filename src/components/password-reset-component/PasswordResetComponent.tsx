import React from 'react';
import axios from 'axios';


export class PasswordReset extends React.Component {
  state = {
    email: ''
  }

  handleChange = (event:any) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    axios.post(`http://localhost:8080/Snappy/${this.state.email}/resetPassword.app`)
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
            Email:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default PasswordReset

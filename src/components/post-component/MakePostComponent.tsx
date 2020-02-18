import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    body: '',
  }

  handleChange = (event:any) => {
    this.setState({ body: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    const post = {
      body: this.state.body
    };

    axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
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
            Write Post:
            <input type="text" name="newPost" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

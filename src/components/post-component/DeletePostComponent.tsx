import React from 'react';
import axios from 'axios';


export default class DeletePost extends React.Component {
  state = {
    postId: ''
  }

  handleChange = (event:any) => {
    this.setState({ postId: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    axios.delete(`http://localhost:8080/Snappy/${this.state.postId}/deletePost.app`)
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
            Post ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

import React from 'react';
import axios from 'axios';
//import URL from '../../utilities/axiosConfig';


export default class DeletePost extends React.Component {
  state = {
    id: '',
  }

  handleChange = (event:any) => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
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

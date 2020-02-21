import React from 'react';
import axios from 'axios';
import {history} from '../../utilities/history';

    export interface IConnectUser {
      user?: any
    }

    export interface IPostState {
      post_text: string,
      url: string 
    }

  export class MakePost extends React.Component<IConnectUser, IPostState> {
    constructor(props:any) {
        super(props);
        this.state = {
          post_text: '',
          url: ''
        };
    }

  inputText = (event:any) => {
    this.setState({ 
      ...this.state,
      post_text: event.target.value });
  }

  inputPic = (event:any) => {
    this.setState({ 
      ...this.state,
      url: event.target.value });
  } 

  handleSubmit = (event:any) => {
    event.preventDefault();


    axios.post(`http://localhost:8080/Snappy/addPost.app`, { 
        post_text: this.state.post_text,
        url: this.state.url,
        userId: this.props.user
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      history.push('/postList');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Write Post:
            <input type="text" name="newPost" onChange={this.inputText} />
          </label>
          <label>
            Insert Picture:
            <input type="text" name="newPost" onChange={this.inputPic} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default MakePost
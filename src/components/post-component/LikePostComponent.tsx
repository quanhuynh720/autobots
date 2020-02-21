import React from 'react';
import axios from 'axios';
import {history} from '../../utilities/history';

// interface ILikeProps {
//   likes: any,
//   incrementClicks: (n:number) => void

//}

  export class LikePost extends React.Component {
     state = {
         likes: 0
         }


  increaseLikes = (event:any) => {
      this.setState({ 
        likes: +1 });
    //this.props.incrementClicks(1)

  }


  handleSubmit = (event:any) => {
    event.preventDefault();


    axios.post(`http://localhost:8080/Snappy/updatePost.app`, { 
        likes: this.state.likes
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
          <p>Number of Likes: {this.state.likes}</p>
          <button type="submit" onClick={this.increaseLikes}>Like Me Senpai</button>
        </form>
      </div>
    )
  }
}

export default LikePost
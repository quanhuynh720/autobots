import React from 'react'
import axios from 'axios'

import DeletePost from './DeletePostComponent';
import MakePost from './MakePostComponent';
import LikePost from './LikePostComponent';

//  interface IConnectUser {
//    user: any
//  }

// interface IPostState {
//   post_text: string,
//   url: string 
// }


export class PostList extends React.Component {
  state = {
    posts: []
    }

  componentDidMount(){
    axios.get('http://localhost:8080/Snappy/postList.app')
    .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        });
      })
    }

  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map((post:any) => {
        return (
          <div className="post card" key={post.postId}>
            <div className="card-content">

            <span className="card-title">{}</span>
               <span className="card-title">{post.postId}</span>
              <p>{post.post_text}</p>
              <p>{post.likes}</p>
              <LikePost/>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Feed</h4>
          <DeletePost/>
          <MakePost/>
          {postList}
        </div>
      </div>
    )
  }
}

export default PostList


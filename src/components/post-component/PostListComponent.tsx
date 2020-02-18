import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../utilities/axiosConfig'

import DeletePost from './DeletePostComponent';
import MakePost from './MakePostComponent';

class Post extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('http://localhost:8080/Snappy')
    //URL.get('/posts')
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
          <div className="post card" key={post.post_id}>
            <div className="card-content">
               {/* <span className="card-title">{post.title}</span> */}
              <p>{post.post_text}</p>

              
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
          <MakePost/>
          <DeletePost/>
          {postList}
        </div>
      </div>
    )
  }
}

export default Post
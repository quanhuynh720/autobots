import React from 'react'
import axios from 'axios'

export default class FriendsList extends React.Component {
  state = {
    users: []
    }

  componentDidMount(){
    axios.get('http://localhost:8080/Snappy/userList.app')
    .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
    }

  render() {
    const { users } = this.state
    const friendsList = users.length ? (
      users.map((user:any) => {
        return (
          <div className="post card" key={user.userId}>
            <div className="card-content">
               <span className="card-title">{[user.firstname, user.lastname]}</span>
              <p>{user.bio}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">You have no friend</div>
    );
    return (
      <div>
        <div className="container">
          <h4 className="center">Friends List</h4>
          {friendsList}
        </div>
      </div>
    )

  }
}

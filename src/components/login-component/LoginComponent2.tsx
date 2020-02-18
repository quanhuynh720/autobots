import React from 'react';
import { Form, Input } from 'reactstrap';
import axios from 'axios';

// export const Login:React.FC<any> = (props:any) => {
//     const [username, setuname] = useState("");
//     const [password, setpass] = useState("");
export default class Login extends React.Component {
    state = {
    username: "",
    password: "",
  }

  inputUsername = (event:any) => {
      this.setState({username: event.target.value});
  }

  inputPassword = (event:any) => {
    this.setState({password: event.target.value});
}

handleSubmit = (event:any) => {
    event.preventDefault();

axios.post('http://localhost:8080/Snappy/auth.app', {
            username: this.state.username,
            password: this.state.password
        }).then(res =>{
            console.log(res.data+"hey");
            sessionStorage.setItem("user", JSON.stringify(res.data));
        }).catch(console.log);
 }

    render() {
    return (
        <Form onSubmit={this.handleSubmit}>
            <Input type="text" placeholder="username" onChange={this.inputUsername}/>
            <Input type="password" placeholder="password" onChange={this.inputPassword}/>
            <Input type="submit" value="submit"/>
        </Form>
    )
}
}

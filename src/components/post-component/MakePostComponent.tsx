import React from 'react';
import axios from 'axios';
import {history} from '../../utilities/history';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';


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
        <Form onSubmit={this.handleSubmit}>

        <FormGroup row>
          <Label sm={2}>Write Post:</Label>
          <Col sm={6} >
          <Input type="text" name="newPost" onChange={this.inputText} />
          </Col> 
        </FormGroup>


        <FormGroup row>
          <Label sm={2}>Insert Picture:</Label>
          <Col sm={6} >
          <Input type="text" name="newPost" onChange={this.inputPic} />
          </Col> 
        </FormGroup>

          
          
        <FormGroup check row>
        <Col sm={{ size: 10, offset: 0}}>
          <Button type="submit">Add</Button>
          </Col>
      </FormGroup>
        </Form>
      </div>
    )
  }
}

export default MakePost
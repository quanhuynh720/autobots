import React, { SyntheticEvent } from 'react';
import { Form, Label, Col, Input, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { history } from '../../utilities/history';

export interface ILoginState {
    userId: number,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    bio: string,
    url: string
    
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}


export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 1,
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            bio: '',
            url: ''
        }
        //by putting event binding and data binding together, we achieve something called two way data binding
        //this is where the user can update state and if state is updated the user sees the change
    }
    
    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })

    }

    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }


    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        this.props.updateCurrentUser(this.state.username,this.state.password)
        history.push('/postList');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={6}>
                            <Input required
                                type="text"
                                name="Username"
                                id="exampleUsername"
                                placeholder=""
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={6}>
                            <Input required
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder=""
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button color="danger">Login</Button>
                </Form>
                <p>{this.props.loginMessage}</p>
                <Link to='/passwordReset'>Forgot Password?</Link>
            </div>
        )
    }
}
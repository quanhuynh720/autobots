import React from 'react';
{/* import './Registry.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect, NavLink} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {addUser} from "../../utilities/api";
import { render } from '@testing-library/react';

export class RegistryComponent extends React.Component{
//export const Registry:React.FC<any> = (props:any) => {
	// const [firstname, setFirstname] = useState("");
	// const [lastname, setLastname] = useState("");
	// const [username, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [bio, setBio] = useState("");
	// const [url, setUrl] = useState("");


	

	render() {
   		return(
    	<div>
        
    <div className="container">
	<nav>
	<ul className="LinkElements">
                     <li>< NavLink className="mainLink" to={{
                         pathname: '/main'
                     }}>Home</ NavLink></li>
                     <li><NavLink className="mainLink" to={{
                        pathname: '/Login'
                     }}>Login</NavLink></li>
    </ul>
	</nav>

    <div className="icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/JoJo%27s_Bizarre_Adventure_-_Diamond_Is_Unbreakable_logo_-_updated.png" />
    </div>

	<h1 className="text-center">Register</h1>
	<form className="registration-form" onSubmit={()=>addUser({

		userId: 0,
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
		bio: "",
		url: ""

	}).then(r=>console.log(r.data))}>
		<label className="col-one-half">
			<span className="label-text">First Name</span>
			<input type="text" name="firstName" onChange={val=>this.setState({...this.state, firstname: val.target.value})}/>
		</label>
		<label className="col-one-half">
			<span className="label-text">Last Name</span>
			<input type="text" name="lastName" onChange={val=>this.setState({...this.state, lastname: val.target.value})}/>
		</label>
		<label className="col-one-half">
			<span className="label-text">Username</span>
			<input type="text" name="username" onChange={val=>this.setState({...this.state, username: val.target.value})}/>
		</label>
		<label>
			<span className="label-text">Email</span>
			<input type="text" name="email" onChange={val=>this.setState({...this.state, email: val.target.value})}/>
		</label>
		<label className="password">
			<span className="label-text">Password</span>
			<button className="toggle-visibility" title="toggle password visibility">
				<span className="glyphicon glyphicon-eye-close"></span>
			</button>
			<input type="password" name="password" onChange={val=>this.setState({...this.state, password: val.target.value})}/>
		</label>
		<label className="col-one-half">
			<span className="label-text">Bio</span>
			<input type="text" name="bio" onChange={val=>this.setState({...this.state, bio: val.target.value})}/>
		</label>
		<label className="col-one-half">
			<span className="label-text">Profile Picture</span>
			<input type="text" name="url" onChange={val=>this.setState({...this.state, url: val.target.value})}/>
		</label>
		<label className="checkbox">
			<input type="checkbox" name="forgotpassword"/>
			<span>Forgot Password?</span>
		</label>

		<div className="text-center">
			<button type="submit" className="submit" name="register" value="submit user">Let's Get Snappy!</button>
			 <audio src="./jojo.mp3"></audio> 
		</div>


		</form>
    	</div>

    </div>

	);
}
}


export default RegistryComponent; */}




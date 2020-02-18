import axios from 'axios';
import { Link } from 'react-router-dom';
import {NavbarComponent} from '../../components/navbar-component/NavbarComponent';

export const apiLogin = async (username: string, password: string) => {
     let credentials = {
         username,
         password
     }
   
    try {
        // const response = await fetch('http://3.81.82.21:2020/login', {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(credentials),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        const response = await axios.post('http://localhost:8080/Snappy/auth.app', {
            username: username, 
            password: password
        
        })

        if (response.status === 200) {
            const body = await response.data
            console.log(response)
            sessionStorage.setItem("user", body);
            return {
                NavbarComponent,
                loginMessage: 'successful login'
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}
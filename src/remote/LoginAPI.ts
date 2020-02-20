import axios from 'axios';
import { Link } from 'react-router-dom';

export const apiLogin = async (username: string, password: string) => {
   
   
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
            username, 
            password
        
        })

        if (response.status === 200) {
            const body = await response.data
            console.log(body)
            sessionStorage.setItem("user", body);
            return {
                body,
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
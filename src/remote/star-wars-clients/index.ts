import axios from 'axios';


export const swClient = axios.create({
    baseURL: 'https://swapi.co/api/',
})
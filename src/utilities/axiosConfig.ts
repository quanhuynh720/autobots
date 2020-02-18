import axios from "axios";

export const URL = axios.create({
   baseURL: 'http://localhost:8080/Snappy/'
   //baseURL: 'https://jsonplaceholder.typicode.com/posts/'
});
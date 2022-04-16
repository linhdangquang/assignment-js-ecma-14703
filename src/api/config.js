import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/linhdangquang/assignment-js-ecma-14703/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

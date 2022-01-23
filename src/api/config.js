import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://61e9165a2f23920017b0bab2.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

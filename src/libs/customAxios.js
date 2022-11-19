import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://15.165.83.253:3000/api',
  headers: {
    'Content-type': 'application/json',
  },
});

import axios from 'axios';

export const axiosFetch = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {'X-Custom-Header': 'foobar'}
  });
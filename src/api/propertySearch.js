import axios from 'axios';

const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/',
});

export default instance;

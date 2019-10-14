import axios from 'axios';

const instance = axios.create({
  // .. where we make our configurations
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk',
});

export default instance;

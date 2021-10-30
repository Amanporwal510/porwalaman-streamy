import axios from 'axios';

export default axios.create({
   baseURL: 'https://streamy-apiserver.herokuapp.com/'
})
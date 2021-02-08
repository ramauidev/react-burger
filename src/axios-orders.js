import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-70035.firebaseio.com/'
});

export default instance;
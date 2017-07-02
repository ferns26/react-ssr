/**
 * Created by minsu.han on 2017. 7. 2..
 */
import axios from 'axios';

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data).catch(error => {
    throw error
});
import axios from 'axios';

export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const CREATE_POST = 'CREATE_POST';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=redux032'

export function getPosts() {
    const request = axios.get(`${rootUrl}/posts${API_KEY}`);

    return {
        type: GET_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${rootUrl}/posts${API_KEY}`, values)
    .then(() => {
        setTimeout(callback(), 100); 
    });

    return {
        type: CREATE_POSTS,
        payload: request
    }
}

export function getPost(id) {
    const request = axios.get(`${rootUrl}/posts/${id}${API_KEY}`);

    return {
        type: GET_POST,
        payload: request
    }
}
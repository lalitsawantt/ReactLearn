import axios from 'axios';

export const fetchUsers = () => {
  console.log("Fetching user...");
  return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data).catch((err) => console.log(err));
}

export const fetchPosts = () => {
  console.log("Fetching posts");
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data).catch(err => console.log(err));
}
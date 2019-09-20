import axios from 'axios';

function get(url, data, handle) {
  axios
    .get(`http://localhost:3005/api/v1/${url}`, data)
    .then((response) => { handle(response); })
    .catch(error => console.log(error.response, url));
}

export default {
  get,
};

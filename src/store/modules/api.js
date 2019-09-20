import axios from 'axios';

function get(url, mutations, commit) {
  axios
    .get(`http://localhost:3005/api/v1/${url}`)
    .then((response) => {
      commit(mutations, response.data);
    }).catch(error => console.log(error.response, url));
}

export default {
  get,
};

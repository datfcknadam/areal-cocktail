import axios from 'axios';

export default {
  loadCocktails({ commit }, limit) {
    axios
    // .get(`http://localhost:3005/api/v1/cocktails/?limit=${limit}&page=${page}`)
      .get(`http://localhost:3005/api/v1/cocktails/?limit=${limit}`)
      .then((response) => {
        commit('SET_COCKTAILS', response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error.response));
  },
};

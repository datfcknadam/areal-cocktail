import axios from 'axios';

export default {
  totalCocktails({ commit }) {
    axios
      .get('http://localhost:3005/api/v1/cocktails/')
      .then((response) => {
        commit('SET_TOTAL_COCKTAILS', response.data.length);
      })
      .catch(error => console.log(error.response));
  },
  loadCocktails({ commit }, { limit, page }) {
    axios
      .get(`http://localhost:3005/api/v1/cocktails/?limit=${limit}&page=${page}`)
      .then((response) => {
        commit('SET_COCKTAILS', response.data);
      })
      .catch(error => console.log(error.response));
  },
};

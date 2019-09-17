import axios from 'axios';

export default {
  totalCocktails({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/cocktails/`)
      .then((response) => {
        commit('SET_TOTAL_COCKTAILS', response.data.length);
      })
      .catch(error => console.log(error.response));
  },
  loadCocktails({ state, commit }, { limit, page }) {
    axios
      .get(`${state.serverUrl}/api/v1/cocktails/?limit=${limit}&page=${page}`)
      .then((response) => {
        commit('SET_COCKTAILS', response.data);
      })
      .catch(error => console.log(error.response));
  },
};

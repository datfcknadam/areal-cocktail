import axios from 'axios';

export default {
  totalCocktails({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/total-cocktails`)
      .then((response) => {
        commit('LOAD_TOTAL_COCKTAILS', response.data.total);
        console.log(response.data.total);
      })
      .catch(error => console.log(error.response));
  },
  loadCocktails({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/cocktails/?limit=${state.counter}&page=${state.currentPage}`)
      .then((response) => {
        commit('LOAD_COCKTAILS', response.data);
        console.log(state.currentPage);
      })
      .catch(error => console.log(error.response));
  },
  loadFilters({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/filter`)
      .then((response) => {
        commit('LOAD_FILTERS', response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error.response));
  },
  loadSort({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/sort`)
      .then((response) => {
        commit('LOAD_SORT', response.data);
      })
      .catch(error => console.log(error.response));
  },
};

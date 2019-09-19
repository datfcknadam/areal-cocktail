import axios from 'axios';

export default {
  totalCocktails({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/total-cocktails`)
      .then((response) => {
        commit('LOAD_TOTAL_COCKTAILS', response.data.total);
      })
      .catch(error => console.log(error.response));
  },
  loadCocktails({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/cocktails/?limit=${state.counter}&page=${state.currentPage}&search=${state.search}&taste=${state.filterByTaste}&alco=${state.filterByAlco}&color=${state.filterByColor}&sortKey=${state.sortKey}`)
      .then((response) => {
        commit('LOAD_COCKTAILS', response.data);
      })
      .catch(error => console.log(error.response));
  },
  loadFilters({ state, commit }) {
    axios
      .get(`${state.serverUrl}/api/v1/filter`)
      .then((response) => {
        commit('LOAD_FILTERS', response.data);
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

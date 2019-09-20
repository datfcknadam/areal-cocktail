import api from '../api';

export default {
  totalCocktails({ commit }) {
    api.get('total-cocktails', null, (response) => { commit('LOAD_TOTAL_COCKTAILS', response.data); });
  },
  loadCocktails({ state, commit }) {
    const params = {
      limit: state.counter,
      page: state.currentPage,
      search: state.search,
      taste: state.filterByTaste,
      alco: state.filterByAlco,
      color: state.filterByColor,
      sortKey: state.sortKey,
    };

    api.get('cocktails', { params }, (response) => { commit('LOAD_COCKTAILS', response.data); });
  },
  loadFilters({ commit }) {
    api.get('filter', null, (response) => { commit('LOAD_FILTERS', response.data); });
  },
  loadSort({ commit }) {
    api.get('sort', null, (response) => { commit('LOAD_SORT', response.data); });
  },
};

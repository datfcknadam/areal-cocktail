import api from '../api';

export default {
  totalCocktails({ commit }) {
    api.get('total-cocktails', 'LOAD_TOTAL_COCKTAILS', commit);
  },
  loadCocktails({ state, commit }) {
    api.get(`cocktails?limit=${state.counter}&page=${state.currentPage}&search=${state.search}&taste=${state.filterByTaste}&alco=${state.filterByAlco}&color=${state.filterByColor}&sortKey=${state.sortKey}`, 'LOAD_COCKTAILS', commit);
  },
  loadFilters({ commit }) {
    api.get('filter', 'LOAD_FILTERS', commit);
  },
  loadSort({ commit }) {
    api.get('sort', 'LOAD_SORT', commit);
  },
};

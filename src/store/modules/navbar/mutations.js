export default {
  LOAD_SORT(state, data) {
    state.dropdownSort = data;
  },
  LOAD_FILTERS(state, data) {
    state.dropdownFilter.alco.items = data.alco;
    state.dropdownFilter.color.items = data.color;
    state.dropdownFilter.taste.items = data.taste;
  },
  LOAD_TOTAL_COCKTAILS(state, data) {
    state.totalCocktail = data;
  },
  LOAD_COCKTAILS(state, data) {
    state.cocktail = data;
  },
  SET_SEARCH(state, value) {
    state.search = value.trim().toLowerCase();
  },
  UPDATE_COUNTER(state) {
    state.counter += 6;
  },
  currentPage(state, value) {
    state.currentPage = value;
  },
  SET_FILTER(state, { itemsKey, value }) {
    switch (itemsKey) {
      case 'alco':
        state.filterByAlco = value.value;
        break;
      case 'color':
        state.filterByColor = value.value;
        break;
      case 'taste':
        state.filterByTaste = value.value;
        break;
      default:
        break;
    }
  },
  CLEAR_FILTER(state) {
    state.filterByAlco = '';
    state.filterByColor = '';
    state.filterByTaste = '';
    state.placeholder = 'Текила...';
    state.counter = 6;
  },
  SET_SORT(state, value) {
    state.sortKey = value;
  },
};

export default {
  searchValue(state, value) {
    state.search = value.trim().toLowerCase();
  },
  seeMore(state) {
    state.counter += 6;
  },
  setFilter(state, { itemsKey, value }) {
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
  cancelFilter(state) {
    state.filterByAlco = '';
    state.filterByColor = '';
    state.filterByTaste = '';
    state.placeholder = 'Текила...';
  },
  setSort(state, value) {
    state.sortKey = value;
  },
};

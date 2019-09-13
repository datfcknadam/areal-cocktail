import FillterItem from '../static/assets/json/dropdownItem.json';
import SortItem from '../static/assets/json/dropdownItemSortBy.json';
import jsonCocktail from '../static/assets/json/jsonCocktail.json';

const namespaced = true;
const mutations = {
  setFilter(state, { itemsKey, value }) {
    switch (itemsKey) {
      case 'alco':
        state.alco = value.value;
        break;
      case 'color':
        state.color = value.value;
        break;
      case 'taste':
        state.taste = value.value;
        break;
      default:
        break;
    }
  },
  cancelFilter(state) {
    state.alco = '';
    state.color = '';
    state.taste = '';
  },
  setSort(state, value) {
    state.sortKey = value;
  },
};
const actions = {


};
const getters = {
  sortedList(state) {
    const newSortKey = state.sortKey || 'id';
    return [].concat.state.cocktail.sort((d1, d2) => {
      const firstValue = d1[newSortKey];
      const secondValue = d2[newSortKey];
      if (firstValue === secondValue) {
        return 0;
      }
      return firstValue > secondValue ? 1 : -1;
    });
  },
};


const state = {
  alco: '',
  color: '',
  taste: '',
  sortKey: '',
  cocktail: jsonCocktail.data,
  dropdownsFilter: {
    alco: {
      text: 'Крепкость',
      item: FillterItem.alco,
    },
    color: {
      text: 'Цвет',
      item: FillterItem.color,
    },
    taste: {
      text: 'Вкус',
      item: FillterItem.taste,
    },
  },
  dropdownSort: SortItem.data,
};
export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};

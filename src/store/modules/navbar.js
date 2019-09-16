import FillterItem from '../static/assets/json/dropdownItem.json';
import SortItem from '../static/assets/json/dropdownItemSortBy.json';
import jsonCocktail from '../static/assets/json/jsonCocktail.json';

const getters = {
  sortedList(state) {
    const newSortKey = state.sortKey || 'id';
    return [].concat(state.cocktail).sort((d1, d2) => {
      const firstValue = d1[newSortKey];
      const secondValue = d2[newSortKey];
      if (firstValue === secondValue) {
        return 0;
      }
      return firstValue > secondValue ? 1 : -1;
    });
  },
  cocktailFilter(state, { sortedList }) {
    if (!state.filterByTaste && !state.filterByColor && !state.filterByAlco) return sortedList;
    state.placeholder = `${state.filterByTaste} ${state.filterByColor} ${state.filterByAlco}`;
    return sortedList
      .filter(value => value.taste.indexOf(state.filterByTaste) !== -1)
      .filter(value => value.color.indexOf(state.filterByColor) !== -1)
      .filter(value => value.alcoStr.indexOf(state.filterByAlco) !== -1);
  },
  getCocktail(state, { sortedList, cocktailFilter }) {
    let cocktail = sortedList;
    if (cocktailFilter) {
      cocktail = cocktailFilter;
    }
    if (state.search) {
      cocktail = cocktail.filter(value => value.name.toLowerCase().indexOf(state.search) !== -1);
    }
    return cocktail.slice(0, state.counter);
  },
};
const namespaced = true;
const mutations = {
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
const actions = {


};
const state = {
  filterByAlco: '',
  filterByColor: '',
  filterByTaste: '',
  sortKey: '',
  foundCocktail: true,
  isDisabled: false,
  counter: 6,
  search: null,
  placeholder: 'Текила...',
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

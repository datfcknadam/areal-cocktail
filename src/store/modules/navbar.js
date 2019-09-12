import FillterItem from '../static/assets/json/dropdownItem.json';
import SortItem from '../static/assets/json/dropdownItemSortBy.json';

const state = {
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

const actions = {
  changeFilter({ commit }, item, value) {
    commit('setFilter', { value });
  },
};
const mutations = {

};

export default {
  state,
  actions,
  mutations,
};

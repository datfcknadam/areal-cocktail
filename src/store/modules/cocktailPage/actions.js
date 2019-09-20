import api from '../api';

export default {
  loadData({ commit }, value) {
    api.get(`id?id=${value}`, 'SET_DATA', commit);
  },
};

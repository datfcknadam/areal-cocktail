import api from '../api';

export default {
  loadData({ commit }, id) {
    api.get('id', { id }, (response) => { commit('SET_DATA', response.data); });
  },
};

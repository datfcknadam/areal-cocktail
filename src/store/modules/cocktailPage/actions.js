import api from '../api';

export default {
  loadData({ commit }, pageId) {
    const params = {
      id: pageId,
    };

    api.get('id', { params }, (response) => { commit('SET_DATA', response.data); });
  },
};

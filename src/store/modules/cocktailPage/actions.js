import axios from 'axios';

export default {
  loadData({ state, commit }, value) {
    axios
      .get(`${state.serverUrl}/api/v1/id?id=${value}`)
      .then((response) => {
        commit('SET_DATA', response.data);
      }).catch(error => console.log(error.response));
  },
};

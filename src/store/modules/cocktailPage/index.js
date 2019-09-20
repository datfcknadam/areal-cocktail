import mutations from './mutations';
import state from './state';
import actions from './actions';
import api from '../api';

const namespaced = true;

export default {
  api,
  namespaced,
  state,
  mutations,
  actions,
};

import mutations from './mutations';
import state from './state';
import actions from './actions';

const namespaced = true;

export default {
  namespaced,
  state,
  mutations,
  actions,
};

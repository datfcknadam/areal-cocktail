import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import navbar from './modules/navbar/index';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    navbar,
  },
  plugins: [createPersistedState()],
});

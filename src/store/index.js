import Vue from 'vue';
import Vuex from 'vuex';
import navbar from './modules/navbar';
import cocktail from './modules/cocktail';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navbar,
    cocktail,
  },
});

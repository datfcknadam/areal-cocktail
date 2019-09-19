import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store/index';
import Content from './pages/Content.vue';
import CocktailPage from './pages/CocktailPage.vue';

const routes = [
  { path: '/content', component: Content },
  { path: '/cocktail/:id', name: 'cocktail', component: CocktailPage },
];
const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.create = function vm() {
  return new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
  });
};
Vue.create();

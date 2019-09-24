<template>
  <div id="#app">
    <go-top></go-top>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';
import Navbar from './components/Navbar/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    GoTop,
  },
};
</script>

<style>
body {
  margin: 0px;
}
</style>

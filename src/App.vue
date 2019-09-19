<template>
<div id="#app">
  <Navbar/>
  <router-view></router-view>
</div>
</template>
<script>

import Navbar from './components/Navbar/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
<style>
body{
  margin: 0px;
}

</style>

<template>
  <div>
    <div class="router-link">
        <router-link to="/">
          Вернуться к списку коктейлей
        </router-link>
    </div>
    <div class="cocktail-page">
      <div class="name">{{name}}</div>
      <div class="img">
        <img :src="this.serverUrl + src">
      </div>
      <div class="params">
        <div class="alco">
          <b>Крепость:</b> {{volume}}
        </div>
        <div class="price">
          <b>Стоимость:</b> {{price}}
        </div>
        <div class="ingredient">
          <p><b>Состав:</b> {{ingredient}}</p>
        </div>
        <div class="more-info">
          <p><b>Описание:</b> {{moreInfo}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('cocktailPage',
    ['name',
      'src',
      'volume',
      'price',
      'ingredient',
      'moreInfo',
      'serverUrl']),
  mounted() {
    this.$store.dispatch('cocktailPage/loadData', this.$route.params.id);
  },
};
</script>

<style scoped>
.router-link {
  font-size: calc(1vw + 1vh);
  color: #007bff;
  padding-left: 5vw;
  padding-top: 1vh;
}
.cocktail-page {
  display: grid;
  grid-template-rows: 1fr;
  font-family: 'Trebuchet MS';
  word-wrap: break-word;
  padding-left: 15vw;
  padding-right: 15vw;
  font-size: calc(0.5vw + 0.5vh);
}
.cocktail-page > div {
    padding: calc(1vh + 2vw);
}
.name {
  font-size: calc(2vw + 2vh);
  font-weight: 600;
  text-align: center;
}
.img {
  text-align: center;
}
img {
  height: calc(35vh + 10vw);
  padding-bottom: 10px;
  padding-top: 10px;
}
.params {
  font-size: calc(1vw + 1vh);
}
.price::after {
  content: "руб."
}
.volume::after {
  content: "ml";
}
.alco::after {
  content: "%";
}
</style>

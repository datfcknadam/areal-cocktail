<template>
  <div>
    <router-link :title="`Нажмите, чтобы перейти на странцу ${item.name}`"
    :to="{name: 'cocktail',
      params: { id: item.id }}">
      <div class="name">
        <p>{{item.name}} </p>
      </div>
      <div class="volume">
        {{item.vol}}
      </div>
      <img :src="this.serverUrl + item.src">
      <div class="alco">
        <b>Крепкость:</b> {{item.alco}}
      </div>
      <div class="price">
        {{item.price}}
      </div>
      <div class="ingredient">
        <p><b>Состав:</b> {{item.ingredient}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'CocktailCard',
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapState('navbar', ['serverUrl']),
  },
};
</script>
<style scoped>
.name {
  font-size: calc(1vw + 1vh);
  font-weight: 600;
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
img {
  height: 20vh;
  padding-bottom: 10px;
  padding-top: 10px;
}
a{
  color: #000000;
}
a:hover{
  text-decoration: none;
  color: #007bff;
}
</style>

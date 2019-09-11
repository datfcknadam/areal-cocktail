<template>
  <div>
    <div class="name">
      <p>{{item.name}} </p>
    </div>
    <div class="volume">
      {{item.vol}}
    </div>
    <img :src="item.src">
    <div class="alco">
      <b>Крепкость:</b> {{item.alco}}
    </div>
    <div class="price">
      {{item.price}}
    </div>
    <div class="ingredient">
      <p><b>Состав:</b> {{item.ingredient}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CocktailCard',
  props: {
    item: {
      type: Object,
    },
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
</style>

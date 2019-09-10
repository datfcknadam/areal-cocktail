<template>
  <div class="cocktail-list">
    <div @change="importValue" v-for="a in cocktailIn"
      :key="a.id"
      class="cocktail">
      <div class="name">
        <p>{{a.name}} </p>
      </div>
      <div class="volume">
        {{a.vol}}
      </div>
      <img :src="a.src">
      <div class="alco">
        <b>Крепость:</b> {{a.alco}}
      </div>
      <div class="price">
        {{a.price}}
      </div>
      <div class="ingredient">
        <p><b>Состав:</b> {{a.ingredient}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CoctailList',
  props: {
    cocktailIn: {
      type: Array,
    },
  },
  methods: {
    importValue() {
      this.$emit('cocktail', this.cocktail);
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

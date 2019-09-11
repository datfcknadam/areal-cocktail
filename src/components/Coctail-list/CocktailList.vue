<template>
  <div class="cocktail-list">
    <div v-for="a in cocktailIn"
      :key="a.id"
      class="cocktail"
      @change="importValue"
      >
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
.cocktail-list > div{
    padding: calc(1vh + 2vw);
    text-align: center;
    box-shadow: 0 0 1px 0 white inset, 0 0 1px 0 white;
    border: 2px solid #d9d9d9;
}
.cocktail-list{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(calc(16vw + 6vh), 2fr));
    font-family: 'Trebuchet MS';
    word-wrap: break-word;
    margin-top: 10vh;
}
</style>

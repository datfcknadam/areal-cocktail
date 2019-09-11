<template>
  <div class="cocktail-list">
    <cocktail-card v-for="a in cocktailIn"
      :key="a.id"
      class="cocktail"
      @change="importValue"
      :item="a"/>
    </div>
</template>
<script>
import CocktailCard from './CocktailCard.vue';

export default {
  name: 'CocktailList',
  components: {
    CocktailCard,
  },
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

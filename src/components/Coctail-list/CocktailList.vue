<template>
  <div class="cocktail-list">
    <!--Все таки вынести в отдельный компонент CocktailCard и переименовать Coctail-list папку и название компонента-->
    <cocktail-card
      v-for="a in cocktailIn"
      :item="a"
      @change="importValue"
      />
  </div>
</template>
<script>

export default {
  name: 'CocktailList',
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

<template>
  <div class="btn-center">
    <a v-if="this.cocktail.length > counter" :class="{disabled: isDisabled}" class="btn-see-more"
      @click="counter += 6"
    >Показать еще</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 6,
    };
  },
};
</script>

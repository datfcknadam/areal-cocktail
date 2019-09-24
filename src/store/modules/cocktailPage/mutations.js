export default {
  SET_DATA(state, value) {
    state.name = value.name;
    state.image = value.image;
    state.volume = value.vol;
    state.price = value.price;
    state.ingredient = value.ingredient;
    state.moreInfo = value.moreInfo;
  },
};

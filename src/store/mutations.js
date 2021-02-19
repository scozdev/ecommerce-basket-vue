import * as constants from './constants';

export default {
  [constants.SET_ALL_PRODUCTS](state, products) {
    state.products = products;
  },
  [constants.ADD_ITEM_TO_CART](state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id);
    console.log(productInCart);
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 });
    } else {
      productInCart.qty++;
    }
  },
  [constants.EMPTY_CART](state) {
    state.cart = [];
  },
  [constants.REMOVE_ITEM_FROM_CART](state, id) {
    state.cart = state.cart.filter((item) => item.id !== id);
  },
};

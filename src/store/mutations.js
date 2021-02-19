import * as constants from './constants';

export default {
  [constants.GET_ALL_PRODUCTS](state, products) {
    state.products = products;
  },
  [constants.ADD_ITEM_TO_CART](state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id);
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 });
    } else {
      productInCart.qty++;
    }
  },
  [constants.EMPTY_CART](state) {
    state.cart = [];
  },
  [constants.SUBMIT_ORDER](state, item) {
    console.log(item);
    state.placeOrderStatus = item.message;
    state.cart = [];
    setTimeout(() => {
      state.placeOrderStatus = null;
    }, 5000);
  },
  [constants.REMOVE_ITEM_FROM_CART](state, id) {
    state.cart = state.cart.filter((item) => item.id !== id);
  },
};

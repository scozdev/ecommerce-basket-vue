import axios from 'axios';
import * as constants from './constants';

const http = axios.create({
  baseURL: 'https://nonchalant-fang.glitch.me',
});

export default {
  fetchAllProducts({ commit }) {
    return http.get('/listing').then((res) => {
      console.log(res.data);
      commit(constants.SET_ALL_PRODUCTS, res.data);
    });
  },
  addItemToCart({ commit }, item) {
    console.log(99999);
    commit(constants.ADD_ITEM_TO_CART, item);
  },
  removeItemFromCart({ commit }, id) {
    commit(constants.REMOVE_ITEM_FROM_CART, id);
  },
  emptyCart({ commit }) {
    commit(constants.EMPTY_CART);
  },
};

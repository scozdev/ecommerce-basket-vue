import axios from 'axios';
import * as constants from './constants';

const http = axios.create({
  baseURL: 'https://nonchalant-fang.glitch.me',
});

export default {
  fetchAllProducts({ commit }) {
    return http.get('/listing').then((res) => {
      commit(constants.GET_ALL_PRODUCTS, res.data);
    });
  },
  addItemToCart({ commit }, item) {
    commit(constants.ADD_ITEM_TO_CART, item);
  },
  submitOrder({ commit }, item) {
    return http
      .post('/order', item)
      .then((res) => {
        commit(constants.SUBMIT_ORDER, res.data);
      })
      .catch(() => {
        commit(constants.SUBMIT_ORDER, { message: 'Stokta yok' });
      });
  },
  removeItemFromCart({ commit }, id) {
    commit(constants.REMOVE_ITEM_FROM_CART, id);
  },
  emptyCart({ commit }) {
    commit(constants.EMPTY_CART);
  },
};

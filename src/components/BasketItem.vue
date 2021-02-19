<template>
  <div class="basketItem">
    <section class="left">
      <img :src="cart.image" :alt="cart.name" />
      <div class="count">
        <button @click="removeItem(cart.id)">-</button>
        <input type="number" :value="cart.qty" />
        <button @click="addItem(cart)">+</button>
      </div>
    </section>

    <div class="right">
      <div>
        <p>{{ cart.name }}</p>
        <strong>{{ cart.price }}</strong>
      </div>
      <button @click="removeItem(cart.id)">REMOVE</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BasketItem",
  components: {},
  props: ["cartData"],
  data() {
    return {
      cart: this.cartData,
    };
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addItemToCart"]),
    removeItem(id) {
      this.removeItemFromCart(id);
    },
    addItem(cart) {
      this.addItemToCart(cart);
    },
  },
  computed: {},
};
</script>

<style scoped>
.basketItem {
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 10px;
}
.basketItem:not(:last-child) {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
img {
  width: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left > * {
  padding: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 5px;
}
.right > div > * {
  margin-bottom: 25px;
}

.right > button {
  width: 100%;
  margin-top: 30px;
  border: 0;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
}
.right strong {
  font-weight: 700;
}
.count {
  display: flex;
}
.count > *:not(:last-child) {
  margin-right: 5px;
}
.count input {
  text-align: center;
  width: 40px;
}
.count button {
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.count button:focus {
  outline: 0;
}
</style>

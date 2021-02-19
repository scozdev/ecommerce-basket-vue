<template>
  <div class="basket">
    <header class="basket-header">MY CART ({{ cart.length }})</header>

    <BasketItem v-for="item in cart" :key="item.id" :cart-data="item" />

    <div class="basket-buttons">
      <Button
        val="CONTUNUE SHOPPING"
        @click="continueShopping()"
        size="full"
        color="secondary"
      />
      <Button val="PLACE ORDER" @click="placeOrder(cart)" size="full" />
    </div>

    <div class="place-order" v-if="placeOrderStatus">
      {{ placeOrderStatus }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BasketItem from "@/components/BasketItem.vue";
import Button from "@/components/Button.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "BasketPage",
  components: {
    BasketItem,
    Button,
  },
  computed: {
    ...mapState(["cart", "placeOrderStatus"]),
  },
  methods: {
    ...mapActions(["emptyCart", "submitOrder"]),
    removeCart() {
      this.emptyCart();
    },
    continueShopping() {
      this.$router.push(`/`);
    },
    placeOrder(cart) {
      this.removeCart();
      this.submitOrder(cart);
    },
  },
};
</script>

<style scoped>
.basket-header {
  padding: 10px;
}
.basket {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.basket-buttons {
  display: flex;
  align-items: center;
}
.basket-buttons > * {
  margin: 5px;
}
.place-order {
  height: 100px;
  font-weight: 700;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

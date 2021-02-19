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
      <Button val="PLACE ORDER" @click="removeCart()" size="full" />
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
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["emptyCart"]),
    removeCart() {
      this.emptyCart();
    },
    continueShopping() {
      this.$router.push(`/`);
    }
  },
};
</script>

<style scoped>
.basket-header{
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
</style>

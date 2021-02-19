<template>
  <div class="basket">
    <BasketItem v-for="item in cart" :key="item.id" :cart-data="item" />

    <Button val="PLACE ORDER" @click="removeCart()" />
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
  },
};
</script>

<style scoped>
.basket {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="basketItem">
    <section class="left">
      <img :src="cart.image" :alt="cart.name" />
      <div class="count">
        <button>-</button>
        <input type="number" />
        <button>4</button>
      </div>
    </section>

    <div class="right">
      <div>
        <p>{{ cart.name }}</p>
        <strong>{{ cart.price }}</strong>
      </div>
      <button @click="removeItemFromCart(cart.id)">REMOVE</button>
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
    ...mapActions(["removeItemFromCart"]),
  },
};
</script>

<style scoped>
.basketItem {
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 100%;
}

.left {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.left > * {
  padding: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.count {
  display: flex;
}
.count input {
  width: 40px;
}
</style>

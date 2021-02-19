<template>
  <div class="product">
    <img :src="productData.image" :alt="productData.name" />

    <span class="description">{{ productData.name }}</span>

    <div class="button-container">
      <span class="price">{{ productData.price }}</span>
      <Button @click="addCart(productData)" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

import { mapActions } from "vuex";

export default {
  name: "Product",
  components: {
    Button,
  },
  props: ["productData"],

  methods: {
    ...mapActions(["addItemToCart"]),
    addCart(product) {
      this.addItemToCart(product);
      this.$router.push(`/basket`);
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
}
.product > *:not(:last-child) {
  margin-bottom: 15px;
}
.description,
.price {
  color: rgba(0, 0, 0, 0.5);
}
img {
  width: 80%;
}

.button-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
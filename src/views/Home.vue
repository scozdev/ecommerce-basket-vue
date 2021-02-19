<template>
  <div class="home">
    <div class="product-container">
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Product,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
 
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 500px) {
  .product-container {
    grid-template-columns: 1fr;
  }
}
</style>

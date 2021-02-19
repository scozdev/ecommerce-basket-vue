<template>
  <div class="home">
    <div class="product-container">
      <Product v-for="item in products" :key="item.id" :product-data="item" />
      <div v-if="isLoading">Yükleniyor</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
    getAllProducts() {
      this.isLoading = true;
      this.fetchAllProducts().then(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
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

<template>
  <div class="home">
    <div class="product-container">
      <Product v-for="item in products" :key="item.id" :product-data="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    
    this.$store.dispatch("fetchAllProducts");
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
    fetchAllProducts() {
      this.isLoading = true;
      this.fetchAllProducts().then(() => {
        this.isLoading = false;
      });
    },
    pageChanged() {
      this.fetchAllProducts();
      console.log(this.products);
      // this.$router.push(`/ilanlar/sayfa/${this.query.page}`);
    },
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

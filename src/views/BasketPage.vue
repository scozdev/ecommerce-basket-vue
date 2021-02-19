<template>
  <div class="basket">
    <BasketItem />
    <BasketItem />
    <BasketItem />
  </div>
</template>

<script>
// @ is an alias to /src
import BasketItem from "@/components/BasketItem.vue";

export default {
  name: "BasketPage",
  components: {
    BasketItem
  },
};
</script>

<style scoped>
.basket {
  display: flex;
  flex-direction: column;
}
.product-container {
  
}
</style>

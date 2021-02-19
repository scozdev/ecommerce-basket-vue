<template>
  <div class="product">
    <img
      src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077677/125077677_0_MC/47007810.jpg"
      alt=""
    />

    <span class="description">Ürün adi</span>

    <div class="button-container">
      <span class="price">730</span>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Product",
  components: {
    Button,
  },
  props: {},
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
.description,.price{
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
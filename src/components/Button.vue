<template>
  <button type="submit">{{ val }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    val: {
      type:String,
      default: "ADD PRODUCT"
    },
  },
};
</script>

<style scoped>
button {
  background: #fb641b;
  color: #fff;
  border: 0;
  outline: 0;
  padding: 10px;
  border-radius: 2px;
  font-weight: 600;
  cursor: pointer;
}
</style>
<template>
  <button type="submit" :class="[size, color]">{{ val }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    val: {
      type: String,
      default: "ADD PRODUCT",
    },
    size: {
      type: String,
      default: "normal",
      validator: function (value) {
        return ["normal", "full"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
button {
  color: var(--c-white);
  border: 0;
  outline: 0;
  padding: 10px;
  border-radius: 2px;
  font-weight: 600;
  box-shadow: 1px 1px 8px 1px #888888;
  cursor: pointer;
}
/* width */
.normal {
  width: 150px;
}
.full {
  width: 100%;
}
/* color */
.primary {
  background: var(--c-orange);
}
.secondary {
  background: var(--c-white);
  color: var(--c-black);
}
</style>
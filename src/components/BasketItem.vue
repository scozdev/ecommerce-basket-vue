<template>
  <div class="basketItem">
    <section class="left">
      <img
        src="https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077677/125077677_0_MC/47007810.jpg"
        alt=""
      />
      <div class="count">
        <button>-</button>
        <input type="number" />
        <button>4</button>
      </div>
    </section>

    <div class="right">
      <div>
        <p>slalsdajsd</p>
        <strong>234</strong>
      </div>
      <button>REMOVE</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BasketItem",
  components: {},
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
.count{
    display: flex;
}
.count input {
    width: 40px;
}
</style>

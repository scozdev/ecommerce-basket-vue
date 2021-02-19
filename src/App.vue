<template>
  <div class="nav">
    <Header />
  </div>

  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
.nav {
}
.container {
  max-width: 600px;
  width: 500px;
}
</style>

<script>
import Header from "@/components/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
<script setup>
import Header from "./components/Header.vue";

</script>

<script>
export default {
  data() {
    return {
      showAdd: false,
    };
  },
};
</script>

<template>
  <Header />
  <h1 class="title">Statisztikák</h1>
  <main>
   
  </main>
</template>

<style scoped>
.title {
  position: relative;
  top: -4rem;
  left: 0.8rem;
  text-transform: uppercase;
  font-weight: 200;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.809);
  letter-spacing: 1px;
}
main {
  padding: 1rem;
}
</style>

<script setup>
import ColectionList from "./components/ColectionList.vue";
import Header from "./components/Header.vue";
import AddCupon from "./components/AddCupon.vue";
import AddSale from "./components/AddSale.vue";
</script>

<script>
export default {
  data() {
    return {
      showCupon: false,
      showSale: false,
    };
  },
};
</script>

<template>
  <Header />
  <h1 class="title">Akciók / Kuponok</h1>
  <main>
    <section class="new-wrapper">
      <div @click="showCupon = !showCupon"><h3>Új Kupon</h3></div>
      <div @click="showSale = !showSale"><h3>Új Akció</h3></div>
    </section>

    <AddCupon v-if="showCupon" />
    <AddSale v-if="showSale" />
    <ColectionList />
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
.new-wrapper {
  position: relative;
  top: -4rem;
  display: flex;
  justify-content: right;
}
.new-wrapper div {
  background-color: lightsalmon;
  padding: 1rem;
  width: fit-content;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
.new-wrapper div h3 {
  color: white;
  font-weight: 200;
  user-select: none;
  cursor: pointer;
}
</style>

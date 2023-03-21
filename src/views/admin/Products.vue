<script setup>
import AddProduct from "./components/AddProduct.vue";
import ProductList from "./components/ProductList.vue";
import AddProductBoravia from "./components/AddProductBoravia.vue";
import AddProductStone from "./components/AddProductStone.vue";
import Header from "./components/Header.vue";
</script>

<script>
export default {
  data() {
    return {
      showAdd: false,
      showAddB: false,
      showAddK: false,
    };
  },
};
</script>

<template>
  <Header />
  <h1 class="title">Termékek</h1>
  <main>
    <section class="new-wrapper">
      <div @click="showAdd = !showAdd"><h3>Új termék</h3></div>
      <div @click="showAddB = !showAddB"><h3>Új Boravia</h3></div>
      <div @click="showAddK = !showAddK"><h3>Új kavics</h3></div>
    </section>

    <AddProduct v-if="showAdd" />
    <AddProductBoravia v-if="showAddB" />
    <AddProductStone v-if="showAddK" />
    <ProductList />
  </main>
</template>

<style>
* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

section {
  margin-bottom: 5rem;
}
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

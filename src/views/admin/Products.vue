<script setup>
import AddProduct from "./components/AddProduct.vue";
import ProductList from "./components/ProductList.vue";
import Header from "./components/Header.vue";
import AddCupon from "./components/AddCupon.vue";
import AddSale from "./components/AddSale.vue";
import AddColection from "./components/AddColection.vue";
import { RouterLink } from "vue-router";
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
  <h1 class="title">Termékek</h1>
  <main>
    <section class="new-wrapper">
      <div @click="showAdd = !showAdd"><h3>Új termék</h3></div>
    </section>

    <AddProduct v-if="showAdd" />
    <ProductList />
  </main>
</template>

<style scoped>
.title{
    position: relative;
    top: -4rem;
    left: 0.8rem;
    text-transform: uppercase;
    font-weight: 200;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.809);
    letter-spacing: 1px;
}
main{
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

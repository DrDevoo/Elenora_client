<script setup>
import Header from "./components/Header.vue";
import AddCupon from "./components/AddCupon.vue";
import AddSaleProd from "./components/AddSaleProduct.vue";
import AddSaleColle from "./components/AddSaleCollection.vue";
import SalesList from "./components/SalesList.vue";
</script>

<script>
export default {
  data() {
    return {
      showCupon: false,
      showSale: false,
      showSaleProd: false,
      showSaleColle: false,
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
    <div class="sales-options" v-if="this.showSale">
      <div @click="showSaleProd = !showSaleProd"><h3>Termékre</h3></div>
      <div @click="showSaleColle = !showSaleColle"><h3>Kollekcióra</h3></div>
    </div>

    <AddCupon v-if="showCupon" />
    <AddSaleProd v-if="showSaleProd" />
    <AddSaleColle v-if="showSaleColle" />

    <SalesList />
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
.sales-options{
  width: 100%;
  position: relative;
  top: -8rem;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
}
.sales-options div{
  background-color: lightsalmon;
  padding: 1rem;
  width: 140px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.sales-options div h3 {
  color: white;
  font-weight: 200;
  user-select: none;
  cursor: pointer;
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

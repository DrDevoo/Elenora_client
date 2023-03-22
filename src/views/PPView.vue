<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router';
</script>


<style scoped>
h1{
 text-align: center;
 font-weight: 300;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
p{
  width: 95%;
}
iframe{
  width: 100%;
  height: 100vh;
}
</style>

<template>
  <Header />
  <main>
    <h1>Adatkezelési tájékoztató</h1>
    <iframe src="./at.pdf" frameborder="0"></iframe>
  </main>
  <Footer />
</template>

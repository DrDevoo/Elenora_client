<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
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
    <h1>Általános Szerződési Feltételek</h1>
    <iframe src="./aszf.pdf" frameborder="0" ></iframe>

    <h1>Elállási nyilatkozatminta</h1>
    <h6>
      (csak a szerződéstől való elállási/felmondási szándék esetén töltse ki és
      juttassa vissza)
    </h6>
  </main>
  <Footer />
</template>

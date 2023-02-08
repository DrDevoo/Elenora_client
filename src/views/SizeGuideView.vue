<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style>
h1 {
  text-align: center;
  font-weight: 300;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  width: 95%;
  text-align: justify;
}
</style>

<template>
  <Header />
  <main>
    <h1>Karkötő méret segédlet</h1>
    <b>1. Lépés</b>
    <p>
      Egy merőszalag segítségével megmérheted az ideális karkötő méretét. Tekerd
      körűl a csuklód legszélesebb pontján. ha nem áll rendelkezésre mérő
      szallag megoldhatod egy papír csíkkal is aamit tollal bejelölve egy
      vonalzó seggítségével lemérhetsz.
    </p>

    <b>2. Lépés</b>
    <p>
      Válaszd ki a méretedet. <br />
      XS 14 cm <br />
      S 15-16 cm <br />
      M 17-18 cm <br />
      XL 20cm <br />
      XXL 21cm <br />
    </p>
  </main>
  <Footer />
</template>

<template>
  <footer>
    <div class="left">
      <img class="logo" src="../assets/images/logo/logo.svg" alt="ELENORA" />
      <h6>©2023 - 2024 ELENORA</h6>
    </div>
    <div class="right">
      <h4>Linkek</h4>
      <RouterLink to="/shop"><p>Karkötők</p></RouterLink>
      <RouterLink to="/shop/boravia"><p>Kiegészítők</p></RouterLink>
      <RouterLink to="/asvany-katalogus"><p>Ásvány katalógus</p></RouterLink>
      <RouterLink to="/rolunk"><p>Rólunk</p></RouterLink>
    </div>
    <div class="right">
      <h4>Segítség</h4>
      <RouterLink to="/aszf"><p>ÁSZF</p></RouterLink>
      <RouterLink to="/adatkezelesi-tajekoztato"><p>Adatvédelmi nyilatkozat</p></RouterLink>
      <RouterLink to="/sutik"><p>Cookie használat</p></RouterLink>
      <RouterLink to="/gyik"><p>GY.I.K</p></RouterLink>
      <RouterLink to="/karkoto-meret"><p>Méret segédlet</p></RouterLink>
    </div>
    <div class="right">
      <h4>Itt találsz minket</h4>
      <p class="contact">informacio@elenora.hu</p>
      <p class="contact">+36 20 562 2510</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  margin-top: 5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.232);
}
footer .left {
  width: 40%;
  padding: 2rem;
}
footer .right {
  width: 20%;
}
footer .right a {
  text-decoration: none;
  color: rgb(61, 61, 61);
  overflow-y: hidden;
}
footer .right a p {
  line-height: 20px;
  overflow-y: hidden;
}
footer .right .contact {
  line-height: 10px;
  color: gray;
}
.logo {
  height: 1.5rem;
}

@media only screen and (max-width: 1000px) {
  footer {
    display: block;
  }
  footer .left {
    width: 100%;
    padding: 2rem;
  }
  footer .right {
    padding: 2rem;
    width: 100%;
  }
}
</style>

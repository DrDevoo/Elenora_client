<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
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
}
a {
  text-decoration: none;
  color: lightsalmon;
}
section {
  align-items: center;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
input {
  border-radius: 5px;
  padding-left: 10px;
  width: 90%;
  height: 40px;
  border: none;
  background-color: rgba(128, 128, 128, 0.218);
}
textarea{
  border-radius: 5px;
  padding-left: 10px;
  width: 90%;
  height: 80px;
  border: none;
  background-color: rgba(128, 128, 128, 0.218);
}
.btn{
  border-radius: 5px;
  padding-left: 10px;
  width: 50%;
  height: 40px;
  border: none;
  font-size: 15pt;
  background-color: lightsalmon;
  transition: all 1s;
}
.btn:hover{
  box-shadow: 0px 0px 10px black;
}

input::placeholder,textarea::placeholder {
  color: black;
}
</style>

<template>
  <Header />
  <main>
    <section>
      <h1>Segítünk!</h1>
      <p>
        Rendelésekkel, termékekkel, visszaküldéssel kapcsolatos kérdéseid
        e-mailben tudjuk fogadni az alábbi elérhetőségen:
        <a href="mail:info@elenora.hu">info@elenora.hu</a>
      </p>
      <p>
        Mielőtt írsz nekünk, kérlek olvasd el a
        <RouterLink to="/gyik"><b>Fizetés és Szállítás,</b></RouterLink> valamint a
        <RouterLink to="/gyik"><b>Gyakran Ismételt Kérdések</b></RouterLink> (GY.I.K.) oldalt, ahol összegyűjtve
        találod a leggyakoribb kérdéseket és válaszokat.
      </p>
    </section>
    <section>
      <b>Írj nekünk itt!</b>
      <input type="text" placeholder="Vezetéknév" />
      <input type="text" placeholder="Keresztnév" />
      <input type="text" placeholder="E-mail" />
      <textarea cols="30" rows="15" placeholder="Miben segíthetünk?" />
      <input class="btn" type="submit" value="Küldés">
    </section>
  </main>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  mounted() {
    const a = import.meta.env.API_U_RL
    console.log( a );
  },
};
</script>

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

.top {
  display: flex;
  position: relative;
  top: -4rem;
}

.s-left {
  width: 50%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.s-left a {
  text-decoration: none;
  color: rgb(28, 28, 28);
}

.s-left a h6 {
  border-radius: 10px;
  border: 1px solid rgb(116, 116, 116);
  padding: 10px;
  width: fit-content;
  font-size: large;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.s-left h1 {
  font-size: 5vw;
}

.s-right {
  width: 50%;
  height: 103vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.465);
}

.s-right img {
  width: 100%;
  height: 100%;
}

.kategoriak {
  display: flex;
  justify-content: space-evenly;
}
.kategoriak .box {
  width: 22%;
  aspect-ratio: 1/1;
  border-radius: 4px;
}

.kategoriak .box img {
  width: 100%;
  transition: all 0.5s ease;
}

.kategoriak .box h1 {
  position: relative;
  bottom: 24rem;
  text-align: center;
}
.kategoriak .box a {
  position: relative;
  bottom: 10rem;
  text-align: center;
}
.kategoriak .box img:hover {
  filter: blur(3px);
}

.kategoriak .box a {
  text-decoration: none;
  color: white;
}
.kategoriak .box h1 {
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 25pt;
}

.item-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.item {
  width: 18%;
}
.item img {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  transition: transform 0.2s;
}
.item img:hover {
  transform: scale(1.1);
}
.item h2 {
  line-height: 1px;
  font-weight: 300;
}

.item p {
  line-height: 1px;
  font-weight: 200;
}

.kiemelt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.kiemelt-header a {
  text-decoration: none;
  color: rgb(28, 28, 28);
}
.kiemelt-header a h5 {
  border-radius: 10px;
  border: 1px solid rgb(116, 116, 116);
  padding: 5px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.miketnyujtunk .list {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.miketnyujtunk h2 {
  text-align: center;
  font-weight: 300;
}
.miketnyujtunk .nyujtani-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.miketnyujtunk .nyujtani-title ion-icon {
  background-color: rgba(128, 128, 128, 0.514);
  padding: 5px;
  border-radius: 100%;
  color: white;
  font-size: 17pt;
  margin-right: 0.5rem;
  aspect-ratio: 1/1;
}
.miketnyujtunk .nyujtani-title h3 {
  line-height: 18px;
  font-weight: 400;
}
.item-ny {
  width: 20%;
}
.miketnyujtunk p {
  font-weight: 300;
}

.instagram-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.instagram a {
  text-decoration: none;
  color: gray;
}

.linear {
  height: 100px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255)
  );
  position: relative;
  z-index: 9;
  top: -6.1rem;
}

.top_mobile {
  height: 100vh;
  width: 100%;
  position: relative;
  top: -3rem;
  display: none;
}

.top_mobile img {
  width: 100%;
  height: 500px;
}

.top_mobile h1 {
  text-align: center;
  position: relative;
  bottom: 10rem;
  z-index: 10;
}
.top_mobile a {
  text-decoration: none;
  color: rgb(28, 28, 28);
  position: relative;
  z-index: 9;
  top: -10.5rem;
  display: flex;
  justify-content: center;
}
.top_mobile a h6 {
  border-radius: 10px;
  border: 1px solid rgb(116, 116, 116);
  padding: 10px;
  width: fit-content;
  font-size: large;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.slideshow-container {
  width: 100%;
  height: 50vh;
  position: relative;
  margin: auto;
}

.fade {
  animation: fade 3s;
}

@keyframes fade {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
}

.slideshow-container-mobile {
  width: 100%;
  height: 60vh;
}

.fade-m {
  animation: fadem 3s;
  width: 100%;
  height: 100px;
}
.fade-m img {
  width: 100%;
  height: 100px;
}

@keyframes fadem {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 1000px) {
  .miketnyujtunk .list {
    flex-wrap: wrap;
  }
  .item-ny {
    width: 40%;
  }
  .kategoriak {
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    top: 0;
  }
  .kategoriak .box {
    border-radius: 5px;
    width: 90%;
    height: fit-content;
    aspect-ratio: 1/1;
  }
  .kategoriak .box div {
    width: 100%;
    height: 100%;
    height: fit-content;
    position: relative;
    top: 10rem;
  }
  .kategoriak .box img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  .item-list {
    flex-wrap: wrap;
  }
  .item {
    width: 40%;
  }
  .top {
    display: none;
  }
  .top_mobile {
    display: block;
  }
  section {
    position: relative;
    top: -8rem;
  }
}

.services {
  top: -27px;
  width: 100%;
  height: 100px;
  background-color: rgba(240, 128, 128, 0.146);
}
</style>

<template>
  <Header />
  <main>
    <Slider />
    <section class="kategoriak">
      <h1>Kollekciók</h1>
      <div class="box">
        <img src="../assets/images/webp/IMG_1721.webp" alt="" />
        <div>
          <h1>Férfi karkötők</h1>
        </div>
      </div>
      <div class="box">
        <img src="../assets/images/webp/IMG_1721.webp" alt="" />
        <div>
          <h1>Női karkötők</h1>
        </div>
      </div>
      <div class="box">
        <img src="../assets/images/webp/IMG_1746.webp" alt="" />
        <div>
          <h1>Páros karkötők</h1>
        </div>
      </div>
      <div class="box">
        <img src="../assets/images/webp/IMG_1721.webp" alt="" />
        <div>
          <h1>Akciós karkötők</h1>
        </div>
      </div>
    </section>
    <section class="kiemeltek">
      <div class="kiemelt-header">
        <h3>Ezeket ajanluk</h3>
        <a href=""><h5>Megnezem</h5></a>
      </div>
      <div class="item-list">
        <div class="item">
          <img src="../assets/images/webp/IMG_1746.webp" alt="" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/IMG_1746.webp" alt="" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/IMG_1746.webp" alt="" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/IMG_1746.webp" alt="" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/IMG_1746.webp" alt="" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
      </div>
    </section>
    <section class="miketnyujtunk">
      <h2>Miket tudunk nyujtani</h2>
      <div class="list">
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="heart-outline"></ion-icon>
            <h3>Kézzel készített minőségi karkötők</h3>
          </div>
          <div>
            <p>
              Minden karkötőt nagy odafigyeléssel kézzel készítünk. Csak
              minőségi, valódi ásványokkal dolgozunk.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="earth-outline"></ion-icon>
            <h3>Ingyenes szállítás 10 000 Ft felett</h3>
          </div>
          <div>
            <p>
              A 10 000 Ft feletti rendelésekre ingyenes szállítást vállalunk. A
              készleten lévő karkötőket 1-3 munkanap alatt szállítjuk.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="refresh-outline"></ion-icon>
            <h3>30 napos visszafizetési garancia</h3>
          </div>
          <div>
            <p>
              Ha nem jó a méret, vagy nem tetszik a karkötő, akkor kérdés nélkül
              visszaküldheted nekünk és visszautaljuk a pénzt.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="cash-outline"></ion-icon>
            <h3>Biztonságos bankkártyás fizetés</h3>
          </div>
          <div>
            <p>
              A bankkártyás fizetés a Barion rendszerén keresztül történik, így
              mi nem kezelünk bankkártya adatokat.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="instagram">
      <div class="instagram-header">
        <h3>Instagram</h3>
        <a href=""><h5>@elenora</h5></a>
      </div>
      <div class="instagram-list"></div>
    </section>
  </main>
  <Footer />
</template>

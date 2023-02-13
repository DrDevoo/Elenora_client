<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import { RouterLink } from "vue-router";
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

.kategoriak {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kategoriak h1{
  font-weight: 300;
}
.kategoriak .boxes {
  display: flex;
  justify-content: space-evenly;
}
.kategoriak .boxes .box {
  width: 22%;
  aspect-ratio: 1/1;
  height: fit-content;
  border-radius: 4px;
  position: relative;
  text-align: center;

}
.kategoriak .boxes .box img {
  width: 100%;
  transition: all 0.5s ease;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(41, 41, 41, 0.606);
}
.kategoriak .boxes .box h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 25pt;
}
.kategoriak .boxes .box a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.kategoriak .box img:hover {
  filter: blur(3px);
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


.kiemeltek {
  background-color: rgba(252, 128, 101, 0.879);
  box-shadow: 0px 0px 30px rgb(252, 129, 101);
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

@media only screen and (max-width: 1000px) {
  .kategoriak .boxes{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .kategoriak .boxes .box{
    width: 40%;
  }

  .miketnyujtunk .list {
    flex-wrap: wrap;
  }
  .item-ny {
    width: 40%;
  }
  
  .item-list {
    flex-wrap: wrap;
  }
  .item {
    width: 40%;
  }

}


</style>

<template>
  <Header />
  <main>
    <Slider />
    <section class="kategoriak">
      <h1>Kollekciók</h1>
      <div class="boxes">
        <div class="box">
          <img src="../assets/images/webp/5.webp" alt="" />
          <h1>Férfi karkötők</h1>
        </div>
        <div class="box">
          <img src="../assets/images/webp/4.webp" alt="" />
          <h1>Női karkötők</h1>
        </div>
        <div class="box">
          <img src="../assets/images/webp/1.webp" alt="" />
          <h1>Páros karkötők</h1>
        </div>
        <div class="box">
          <img src="../assets/images/webp/6.webp" alt="" />
          <h1>Akciós karkötők</h1>
        </div>
      </div>
    </section>
    <section class="kiemeltek">
      <div class="kiemelt-header">
        <h3>Ezeket is nézd meg!</h3>
        <a href=""><h5>Megnézem</h5></a>
      </div>
      <div class="item-list">
        <div class="item">
          <img src="../assets/images/webp/1.webp" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/1.webp" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/1.webp" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
        <div class="item">
          <img src="../assets/images/webp/1.webp" />
          <h2>kristalycsoda</h2>
          <p>2222 FT</p>
        </div>
      </div>
    </section>
    <section class="miketnyujtunk">
      <h2>Miket tudunk nyújtani</h2>
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

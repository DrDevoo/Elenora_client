<script setup>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      showMenu: false,
      showCart: false,
      showSearch: false,
      showWish: false,
      header_title: "null",
      cart: [],
      response: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      linkurl: "/shop/picked?id=",

      sitestatus: "online",
      loading: false,
      cartcount: 0,

      prods: [],
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getall")
      .then((response) => (this.prods = response.data.products));
  },
  methods: {
    pushto(location) {
      if (location == "man") {
        this.$router.push({ path: "/shop/men" });
      } else if (location == "women") {
        this.$router.push({ path: "/shop/women" });
      } else if (location == "couple") {
        this.$router.push({ path: "/shop/couple" });
      } else if (location == "sales") {
        this.$router.push({ path: "/shop/sales" });
      }
    },
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

.kategoriak {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kategoriak h1 {
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
  cursor: pointer;
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
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.81);
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
.kiemeltek {
  height: fit-content;
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
.item-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
}
.item {
  width: 20%;
  text-decoration: none;
  color: black;
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
  line-height: 20px;
  font-weight: 300;
}
.item p {
  line-height: 1px;
  font-weight: 200;
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
  .kategoriak .boxes {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .kategoriak .boxes .box {
    width: 40%;
  }
  .kategoriak .boxes .box h1 {
    font-weight: 400;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.535));
    font-size: 20pt;
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
      <h1>Kollekci??k</h1>
      <div class="boxes">
        <div @click="pushto('man')" class="box">
          <img src="../assets/images/new/man.webp" alt="" />
          <h1>F??rfi kark??t??k</h1>
        </div>
        <div @click="pushto('women')" class="box">
          <img src="../assets/images/new/women.webp" alt="" />
          <h1>N??i kark??t??k</h1>
        </div>
        <div @click="pushto('couple')" class="box">
          <img src="../assets/images/new/couple.webp" alt="" />
          <h1>P??ros kark??t??k</h1>
        </div>
        <div @click="pushto('sales')" class="box">
          <img src="../assets/images/new/sales.webp" alt="" />
          <h1>Akci??s kark??t??k</h1>
        </div>
      </div>
    </section>
    <section class="kiemeltek">
      <div class="kiemelt-header">
        <h3>Ezeket is n??zd meg!</h3>
        <RouterLink to="/shop"><h5>Megn??zem</h5></RouterLink>
      </div>
      <div class="item-list">
        <RouterLink
          v-for="(value, index) in prods"
          class="item"
          :key="value._id"
          :to="linkurl + value._id"
        >
          <div v-if="index < 4" class="a">
            <img :src="imgurl + value.image" />
            <h2>{{ value.prodname }}</h2>
            <p>{{ value.price }} Ft</p>
          </div>
        </RouterLink>
      </div>
    </section>
    <section class="miketnyujtunk">
      <h2>Miket tudunk ny??jtani</h2>
      <div class="list">
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="heart-outline"></ion-icon>
            <h3>K??zzel k??sz??tett min??s??gi kark??t??k</h3>
          </div>
          <div>
            <p>
              Minden kark??t??t nagy odafigyel??ssel k??zzel k??sz??t??nk. Csak
              min??s??gi, val??di ??sv??nyokkal dolgozunk.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="earth-outline"></ion-icon>
            <h3>Ingyenes sz??ll??t??s 15 000 Ft felett</h3>
          </div>
          <div>
            <p>
              A 15 000 Ft feletti rendel??sekre ingyenes sz??ll??t??st v??llalunk. A
              k??szleten l??v?? kark??t??ket 1-3 munkanap alatt sz??ll??tjuk.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="refresh-outline"></ion-icon>
            <h3>15 napos visszafizet??si garancia</h3>
          </div>
          <div>
            <p>
              Ha nem j?? a m??ret, vagy nem tetszik a kark??t??, akkor k??rd??s n??lk??l
              visszak??ldheted nek??nk ??s visszautaljuk a p??nzt.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="cash-outline"></ion-icon>
            <h3>Biztons??gos bankk??rty??s fizet??s</h3>
          </div>
          <div>
            <p>
              A bankk??rty??s fizet??s a Stripe rendszer??n kereszt??l t??rt??nik, ??gy
              mi nem kezel??nk bankk??rtya adatokat.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

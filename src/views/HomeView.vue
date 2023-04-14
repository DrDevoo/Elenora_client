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
      news: [],
      saled: [],

      url: "/prodimgs/",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getajanlott")
      .then((response) => (this.prods = response.data));
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getsaled")
      .then((response) => (this.saled = response.data));
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getnews")
      .then((response) => (this.news = response.data));
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

<style scoped>
.kategoriak {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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

  .home_list .lis_cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3px;
  padding-left: 0px;
  padding-right: 0px;
}
}

.osztott {
  display: flex;
  padding: 1rem;
}
.osztott .box {
  width: 100%;
}
.osztott .osz_bal img {
  width: 98%;
  height: 100%;
  border-radius: 10px;
  aspect-ratio: 16/9;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.417);
}
.osztott .osz_jobb a {
  color: black;
  text-decoration: none;
}
.home_list {
}
.home_list .list_head h1 {
  text-align: center;
  font-weight: 100;
}
.home_list .lis_cont {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.home_list .lis_cont {
  text-align: center;
}
.home_list .list_foot a {
  text-align: center;
  color: gray;
  text-decoration: none;
  position: relative;
  top: -1rem;
}
section {
  margin-bottom: 2rem;
}
</style>

<template>
  <Header />
  <main>
    <Slider />

    <section class="osztott scroll">
      <div class="osz_bal box">
        <img src="../assets/images/custom.webp" />
      </div>
      <div class="osz_jobb box">
        <h2>Egyedi karkötő tervezés</h2>
        <p>
          Az egyedi karkötő tervezőnkben csak a képzeleted szab határt milyen
          ékszert készítesz magadnak vagy szeretteidnek!
        </p>
        <RouterLink to="/egyedikarkoto"><h3>Tervezés ❯</h3></RouterLink>
      </div>
    </section>
    <!--
    <section class="home_list">
      <div class="list_head">
        <h1>Kollekciók</h1>
      </div>
      <div class="lis_cont">
        <RouterLink
          v-for="(value, index) in prods"
          :key="value._id"
          :to="linkurl + value._id"
          class="item"
        >
          <div class="list_box">
            <img :src="imgurl + value.image" alt="" />
            <h4>{{ value.prodname }}</h4>
          </div>
        </RouterLink>
      </div>
      <div class="list_foot">
        <RouterLink to="/"><p>Továbbiak ❯</p></RouterLink>
      </div>
    </section>
    <section class="osztott">
      <div class="osz_jobb box">
        <h2>Az ásványról</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          rerum!
        </p>
        <RouterLink to="/"><h5>Bővebben ❯</h5></RouterLink>
      </div>
      <div class="osz_bal box">
        <img src="../assets/images/new/women.webp" />
      </div>
    </section>
-->
    <section class="home_list">
      <div class="list_head">
        <h1>Akciók</h1>
      </div>
      <div class="lis_cont">
        <RouterLink
          v-for="(value, index) in saled"
          :key="value._id"
          :to="linkurl + value._id"
          class="item"
        >
          <div class="list_box">
            <img :src="'/newimgs/' + value.image + '.webp'" />
            <h4>{{ value.prodname }}</h4>
          </div>
        </RouterLink>
      </div>
      <div class="list_foot">
        <RouterLink to="/shop/sales"><p>Továbbiak ❯</p></RouterLink>
      </div>
    </section>

    <section class="home_list">
      <div class="list_head">
        <h1>Újdonságok</h1>
      </div>
      <div class="lis_cont">
        <RouterLink
          v-for="(value, index) in news"
          :key="value._id"
          :to="linkurl + value._id"
          class="item"
        >
          <div class="list_box">
            <img :src="'/newimgs/' + value.image + '.webp'" />
            <h4>{{ value.prodname }}</h4>
          </div>
        </RouterLink>
      </div>
      <div class="list_foot">
        <RouterLink to="/shop/aproko"><p>Továbbiak ❯</p></RouterLink>
      </div>
    </section>

    <section class="kategoriak">
      <h1>Kategóriák</h1>
      <div class="boxes">
        <div @click="pushto('man')" class="box">
          <img src="../assets/images/new/man.webp" alt="" />
          <h1>Férfi karkötők</h1>
        </div>
        <div @click="pushto('women')" class="box">
          <img src="../assets/images/new/women.webp" alt="" />
          <h1>Női karkötők</h1>
        </div>
        <div @click="pushto('couple')" class="box">
          <img src="../assets/images/new/couple.webp" alt="" />
          <h1>Páros karkötők</h1>
        </div>
        <div @click="pushto('sales')" class="box">
          <img src="../assets/images/new/sales.webp" alt="" />
          <h1>Akciós karkötők</h1>
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
            <h3>Ingyenes szállítás 15 000 Ft felett</h3>
          </div>
          <div>
            <p>
              A 15 000 Ft feletti rendelésekre ingyenes szállítást vállalunk. A
              készleten lévő karkötőket 1-3 munkanap alatt szállítjuk.
            </p>
          </div>
        </div>
        <div class="item-ny">
          <div class="nyujtani-title">
            <ion-icon name="refresh-outline"></ion-icon>
            <h3>15 napos visszafizetési garancia</h3>
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
              A bankkártyás fizetés a Stripe rendszerén keresztül történik, így
              mi nem kezelünk bankkártya adatokat.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

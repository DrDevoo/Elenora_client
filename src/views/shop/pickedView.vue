<script setup>
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      showB1: true,
      showB2: false,
      showB3: false,
      response: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
    };
  },
  mounted() {
    axios
      .get(
        import.meta.env.VITE_API_URL +
          "/products/getbyid/" +
          this.$route.query.id
      )
      .then((response) => (this.response = response.data));
  },
};
</script>

<template>
  <main>
    <Header />
    <section class="top-s">
      <setion class="images-s">
        <div>
          <img
            class="pickedimg"
            :src="imgurl + response.image"
            alt="Termék képe"
          />
        </div>
      </setion>
      <setion class="texts-s">
        <div class="texts-b">
          <h1>{{ response.prodname }}</h1>
          <h3>{{ response.categ }} - {{ response.price }} Ft</h3>
          <p>{{ response.description }}</p>
        </div>
        <div class="input-b">
          <div class="selects-b">
            <div class="size-b box">
              <p>Méret</p>
              <select>
                <option value="0">Select car:</option>
                <option value="1">Audi</option>
              </select>
            </div>
            <div class="mennyiseg-b box">
              <p>Mennyiség</p>
            </div>
          </div>
          <div class="add-b">
            <a href=""><p>Kosárba teszem</p></a>
          </div>
        </div>
      </setion>
    </section>
    <section class="bottom-s">
      <section class="description-s">
        <div class="desc-b">
          <div @click="showB1 = !showB1" class="title-b">
            <h4>Leírás</h4>
            <ion-icon v-if="!showB1" name="chevron-up-outline"></ion-icon>
            <ion-icon
              v-if="showB1"
              class="downarrow"
              name="chevron-down-outline"
            ></ion-icon>
          </div>
          <div v-if="showB1" class="text-b">
            <p>
              {{ response.description }}
            </p>
          </div>
        </div>
        <div class="desc-b">
          <div @click="showB2 = !showB2" class="title-b">
            <h4>Ásványok</h4>
            <ion-icon v-if="!showB2" name="chevron-up-outline"></ion-icon>
            <ion-icon
              v-if="showB2"
              class="downarrow"
              name="chevron-down-outline"
            ></ion-icon>
          </div>
          <div v-if="showB2" class="text-b">
            <p>Jaspis stb</p>
          </div>
        </div>
        <div class="desc-b">
          <div @click="showB3 = !showB3" class="title-b">
            <h4>Egyedi karkötő</h4>
            <ion-icon v-if="!showB3" name="chevron-up-outline"></ion-icon>
            <ion-icon
              v-if="showB3"
              class="downarrow"
              name="chevron-down-outline"
            ></ion-icon>
          </div>
          <div v-if="showB3" class="text-b">
            <p>Egyedi karkotot az instan tudsz rebdelni</p>
          </div>
        </div>
      </section>
      <section class="favorites-s"></section>
    </section>
    <Footer />
  </main>
</template>

<style scoped>
* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  display: block;
}

.top-s {
  height: 100vh;
  width: 100%;
  position: relative;
}

.images-s {
  width: 50%;
}

.images-s div img {
  width: 93%;
  position: relative;
  left: 5%;
  top: 2rem;
  aspect-ratio: 1/1;
  border-radius: 8px;
}

.texts-s {
  width: 50%;
  height: 87%;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.texts-s .texts-b h1 {
  font-size: 25pt;
  line-height: 30px;
}
.texts-s .texts-b h3 {
  font-weight: 300;
}
.texts-s .texts-b p {
  color: gray;
}

.input-b {
  width: 75%;
}

.add-b a {
  text-decoration: none;
}

.add-b a p {
  color: white;
  background-color: rgb(26, 26, 26);
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 16pt;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
}

.selects-b {
  display: flex;
  gap: 0.5rem;
}

.selects-b .box {
  width: 50%;
  height: 70px;
  border-radius: 5px;
}

.selects-b .size-b select {
  width: 100%;
}

.selects-b .box p {
  line-height: 0;
  color: gray;
  font-size: 10pt;
}

@media only screen and (max-width: 1000px) {
  .top-s {
    top: 0;
    height: fit-content;
    width: 100%;
  }

  .images-s {
    width: 100%;
    height: fit-content;
  }

  .images-s div img {
    width: 93%;
    position: relative;
    left: 3%;
    top: 1rem;
    aspect-ratio: 1/1;
    border-radius: 8px;
    z-index: 5;
  }

  .texts-s {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    padding-top: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .texts-s .texts-b h1 {
    font-size: 25pt;
    line-height: 30px;
  }
  .texts-s .texts-b h3 {
    font-weight: 300;
  }
  .texts-s .texts-b p {
    color: gray;
  }

  .input-b {
    width: 75%;
  }

  .add-b a {
    text-decoration: none;
  }

  .add-b a p {
    color: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 16pt;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 3px;
  }

  .selects-b {
    display: flex;
    gap: 0.5rem;
  }

  .selects-b .box {
    width: 50%;
    height: 70px;
    border-radius: 5px;
  }

  .selects-b .size-b select {
    width: 100%;
  }

  .selects-b .box p {
    line-height: 0;
    color: gray;
    font-size: 10pt;
  }
}
.description-s {
  position: relative;
  top: 2rem;
}
.desc-b {
  position: relative;
  top: 0;
  width: 95%;
  margin: auto;
}
.desc-b .title-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: white;
}
.desc-b .text-b {
  z-index: -1;
  position: relative;
  top: 0rem;
  animation: slidedown 0.7s ease;
  height: fit-content;
}

@keyframes slidedown {
  from {
    top: -3.5rem;
  }
  to {
    top: 0rem;
  }
}

.downarrow {
  animation: scrollarr 0.3s linear;
}
@keyframes scrollarr {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

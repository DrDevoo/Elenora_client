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
      cart: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      quantity: 1,
      size: "M",
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    axios
      .get(
        import.meta.env.VITE_API_URL +
          "/products/getbyid/" +
          this.$route.query.id
      )
      .then((response) => (this.response = response.data));
  },
  methods: {
    addToCart(product, quantity, size) {
      this.cart.push({
        id: product._id,
        name: product.prodname,
        img: product.image,
        size: size,
        price: product.price,
        quantity: quantity,
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
      window.location.reload();
    },
    addq() {
      if (this.quantity < 15) {
        this.quantity += 1;
      }
    },
    minq() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
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
            v-if="response.image"
            class="pickedimg"
            :src="imgurl + response.image"
            alt="Termék képe"
          />
        </div>
      </setion>
      <setion class="texts-s">
        <div class="texts-b">
          <h1 v-if="response.prodname">{{ response.prodname }}</h1>
          <h3 v-if="response.price">{{ response.price }} Ft</h3>
          <p v-if="response.description">
            {{ response.description.split(".")[0] }}
          </p>
        </div>
        <div class="input-b">
          <div class="selects-b">
            <div class="size-b box">
              <p>Méret</p>
              <select v-model="size" class="size_b">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div class="mennyiseg-b box">
              <p>Mennyiség</p>
              <div class="quantity_b">
                <ion-icon name="add-outline" @click="addq()"></ion-icon>
                <input type="number" min="1" max="15" v-model="quantity" />
                <ion-icon name="remove-outline" @click="minq()"></ion-icon>
              </div>
            </div>
          </div>
          <div class="add-b">
            <button @click="addToCart(this.response, this.quantity, this.size)">
              Kosárba teszem<ion-icon name="cart-outline"></ion-icon>
            </button>
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
            <p v-if="response.description">
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
            <p v-for="item in response.pearls" :key="item._id">
              {{ item.name }}
            </p>
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
            <p>Egyedi karkötőt szeretnél? Keress meg minket Instagrammon!</p>
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
main {
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
  padding: 0;
  display: block;
}
.pickedimg {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.412);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.size_b {
  height: 35px;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: rgba(206, 206, 206, 0.497);
}
.quantity_b {
  height: 38px;
  padding: 0.5rem;
  border-radius: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: rgba(206, 206, 206, 0.497);
}
.quantity_b ion-icon {
  font-size: 16pt;
}
.quantity_b input {
  background: transparent;
  border: none;
  text-align: center;
  font-size: 12pt;
}

.top-s {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
}

.images-s {
  width: 50%;
}

.images-s div img {
  max-height: 750px;
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
  max-height: 750px;
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

.add-b button {
  margin-top: 1rem;
  color: white;
  background-color: rgb(26, 26, 26);
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 12pt;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.add-b button ion-icon {
  font-size: 18pt;
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
    flex-direction: column;
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

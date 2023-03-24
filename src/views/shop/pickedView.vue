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
      showPStone: false,
      forbox: false,
      response: [],
      stones: [],
      p_stone_name: "",
      p_stone_price: "",
      p_stone_img: "",
      p_stone_id: "",
      access: [],
      cart: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      quantity: 1,
      size: "M",
      key: 0,
      p_img: null,
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
      .then((response) => (this.response = response.data.product));
    axios
      .get(
        import.meta.env.VITE_API_URL +
          "/products/getbyid/" +
          this.$route.query.id
      )
      .then((response) => (this.access = response.data));
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getall/stone")
      .then((response) => (this.stones = response.data));
  },
  methods: {
    addToCart(product, quantity, size) {
      if (this.forbox) {
        this.cart.push({
          id: product._id,
          name: product.prodname + " (díszdobozos)",
          img: product.image,
          size: size,
          price: product.price + 590,
          quantity: quantity,
          sale: 0,
        });
        if(this.showPStone){
                  this.cart.push({
          id: this.p_stone_id,
          name: this.p_stone_name + " ("+ this.response.prodname +"-hoz)",
          img: this.p_stone_img,
          size: null,
          price: this.p_stone_price,
          quantity: this.quantity,
          sale: 0,
      })
        }

      } else {
        this.cart.push({
          id: product._id,
          name: product.prodname,
          img: product.image,
          size: size,
          price: product.price,
          quantity: quantity,
          sale: 0,
        });
        if(this.showPStone){
        this.cart.push({
          id: this.p_stone_id,
          name: this.p_stone_name + " ("+ this.response.prodname +" mellé)",
          img: this.p_stone_img,
          size: null,
          price: this.p_stone_price,
          quantity: this.quantity,
          sale: 0,
      })
        }

      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.key += 1;

      let cartprices = this.cart.reduce(
                    (sum, item) =>
                      sum +
                      Math.round(item.price - (item.price / 100) * item.sale) *
                        item.quantity,
                    0
                  )
      console.log(cartprices)
      if(cartprices > 10000){
        let found = this.cart.find(elem => elem.name == "Ajandek zsakba macska karkoto")
      console.log(found)
      if(found){
        console.log("van ajandek")
      }else{
        console.log("Nincs ajndek")
    this.cart.push({
            id: 9,
            name: "Ajandek zsakba macska karkoto",
            price: 0,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true
          });
          localStorage.setItem("cart", JSON.stringify(this.cart));
      this.key += 1;
      }
        console.log("JAR az ajandek kakroto")
        
      }else{

        console.log(" NEM JAR az ajandek karkoto")
      }
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
    select(img) {
      console.log(img);
      this.p_img = img;
    },
    selectStone(name,img,price,id){
      this.p_stone_name = name
      this.p_stone_img = img
      this.p_stone_price = price
      this.p_stone_id = id
    },
}
}
</script>

<template>
  <main>
    <Header :key="key" />
    <section class="top-s">
      <setion class="images-s">
        <div>
          <img
            v-if="response.image && p_img == null"
            :src="imgurl + response.image"
            class="pickedimg"
            alt="Termék képe"
          />
          <img
            v-if="!(p_img == null)"
            :src="imgurl + p_img"
            class="pickedimg"
            alt="Termék képe"
          />
        </div>
        <div class="thumblist">
          <img
            @click="select(response.image)"
            v-if="response.image"
            class="thumbimg"
            :src="imgurl + response.image"
            alt="Termék képe"
          />
          <img
            @click="select(response.image2)"
            v-if="
              response.image2 &&
              !(response.image2 == '46bea41c0363d722467defc2f1ecc234')
            "
            class="thumbimg"
            :src="imgurl + response.image2"
            alt="Termék képe"
          />
          <img
            @click="select(response.image3)"
            v-if="
              response.image3 &&
              !(response.image3 == '46bea41c0363d722467defc2f1ecc234')
            "
            class="thumbimg"
            :src="imgurl + response.image3"
            alt="Termék képe"
          />
        </div>
      </setion>
      <setion class="texts-s">
        <div class="texts-b">
          <h1 v-if="response.prodname">{{ response.prodname }}</h1>
          <h3 v-if="response.price">{{ response.price }} Ft</h3>
        </div>
        <div>
          <div class="plus_w">
            <div>
              <input type="checkbox" name="doboz" id="doboz" v-model="forbox" />
              <label for="doboz">Dísz dobozban legyen a termék (+590 Ft)</label>
            </div>
            <div>
              <input type="checkbox" name="ko" id="ko" v-model="showPStone" />
              <label for="ko">Kérek mellé ásvány követ ({{ p_stone_name }} +{{ p_stone_price }} Ft)</label>
            </div>
            <div class="stonelist" v-if="showPStone">
              <div class="stone" v-for="stone in stones">
                <img class="s_img" :src="imgurl + stone.image" @click="selectStone(stone.prodname,stone.image,stone.price,stone._id)" />
              </div>
            </div>
          </div>
        </div>
        <div class="input-b">
          <div class="selects-b">
            <div class="size-b box">
              <p>Méret</p>
              <select v-model="size" class="size_b">
                <option v-if="access.xs == true" value="XS">XS</option>
                <option v-if="access.s == true" value="S">S</option>
                <option v-if="access.m == true" value="M">M</option>
                <option v-if="access.l == true" value="L">L</option>
                <option v-if="access.xl == true" value="XL">XL</option>
                <option v-if="access.xxl == true" value="XXL">XXL</option>
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
            <button
              v-if="access.xs == true"
              @click="addToCart(response, quantity, size)"
            >
              Kosárba teszem<ion-icon name="cart-outline"></ion-icon>
            </button>
            <button v-if="access.xs == false">
              A termék nem elérhető!<ion-icon name="cart-outline"></ion-icon>
            </button>
          </div>
        </div>
      </setion>
    </section>
    <section class="bottom-s">
      <section class="description-s">
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

.stonelist {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.stone {
  display: flex;
  flex-direction: column;
}
.s_img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}
.s_name {
  line-height: 0;
}
.s_price {
  line-height: 0;
}
.plus_w {
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.539);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.plus_w div {
  display: flex;
  align-items: center;
}

.thumbimg {
  border-radius: 10px;
  width: 100px;
  height: 100px;
  z-index: 1;
  border: 5px solid white;
}
.thumblist {
  position: relative;
  top: -5.4rem;
  left: 3.7rem;
  gap: 10px;
  display: flex;
}
.pickedimg {
  object-fit: cover;
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
  display: block;
  overflow: auto;
  position: relative;
  display: flex;
}

.images-s {
  width: 50%;
}

.images-s div .pickedimg {
  max-height: 750px;
  width: 93%;
  position: relative;
  left: 5%;
  top: 2rem;
  aspect-ratio: 1/1;
  border-radius: 8px;
}

.texts-s {
  position: relative;
  width: 50%;
  padding: 0.5rem;
  padding-left: 2.5rem;
  padding-bottom: 5rem;
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

  .thumbimg {
    border-radius: 10px;
    width: 100px;
    height: 100px;
    z-index: 10;
    border: 5px solid white;
  }
  .thumblist {
    position: relative;
    top: -6rem;
    left: 1.7rem;
    gap: 10px;
    display: flex;
  }
  .images-s div .pickedimg {
    width: 93%;
    position: relative;
    left: 3%;
    top: 1rem;
    aspect-ratio: 1/1;
    border-radius: 8px;
    z-index: 5;
  }

  .texts-s {
    position: relative;
    top: -6rem;
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
  top: 0rem;
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

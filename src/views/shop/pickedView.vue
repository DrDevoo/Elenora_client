<script setup>
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
import VLazyImage from "v-lazy-image";
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
      imgurl: "/prodimgs/",
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
      let itemprice = 0;
      if (this.response.activesale == "true") {
        itemprice = Math.round(
          product.price - (product.price / 100) * this.response.saleprecent
        );
      } else {
        itemprice = product.price;
      }

      if (this.forbox) {
        var vane = this.cart.find(
          (elem) => elem.name == product.prodname + " (díszdobozos)"
        );
      } else {
        var vane = this.cart.find((elem) => elem.name == product.prodname);
      }

      if (vane) {
        if (this.forbox) {
          var objid = this.cart.findIndex(
            (obj) => obj.name == product.prodname + " (díszdobozos)"
          );
          console.log("Van mar ilyen a kosarba: " + objid);
          this.cart[objid].quantity += quantity;
        } else {
          var objid = this.cart.findIndex(
            (obj) => obj.name == product.prodname
          );
          console.log("Van mar ilyen a kosarba: " + objid);
          this.cart[objid].quantity += quantity;
        }
      } else {
        console.log("Nincs ilyen a kosarba");
        if (this.forbox) {
          this.cart.push({
            id: product._id,
            name: product.prodname + " (díszdobozos)",
            img: product.image,
            size: size,
            price: itemprice + 590,
            quantity: quantity,
            sale: 0,
          });
          if (this.showPStone) {
            this.cart.push({
              id: this.p_stone_id,
              name:
                this.p_stone_name + " (" + this.response.prodname + " mellé)",
              img: this.p_stone_img,
              size: null,
              price: this.p_stone_price,
              quantity: this.quantity,
              sale: 0,
              visitno: true,
            });
          }
        } else {
          this.cart.push({
            id: product._id,
            name: product.prodname,
            img: product.image,
            size: size,
            price: itemprice,
            quantity: quantity,
            sale: 0,
          });
          if (this.showPStone) {
            this.cart.push({
              id: this.p_stone_id,
              name:
                this.p_stone_name + " (" + this.response.prodname + " mellé)",
              img: this.p_stone_img,
              size: null,
              price: this.p_stone_price,
              quantity: this.quantity,
              sale: 0,
              visitno: true,
            });
          }
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
      );
      console.log(cartprices);
      if (cartprices > 10000) {
        let found = this.cart.find(
          (elem) => elem.name == "Ajándék zsákbamacska karkötő"
        );
        console.log(found);
        if (found) {
          console.log("van ajandek");
        } else {
          console.log("Nincs ajndek");
          this.cart.push({
            id: 9,
            name: "Ajándék zsákbamacska karkötő",
            price: 0,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.key += 1;
        }
        console.log("JAR az ajandek kakroto");
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
    selectStone(name, img, price, id) {
      this.p_stone_name = name;
      this.p_stone_img = img;
      this.p_stone_price = price;
      this.p_stone_id = id;
    },
  },
};
</script>

<template>
  <main>
    <Header :key="key" />
    <section class="top-s">
      <setion class="images-s">
        <div>
          <v-lazy-image
            v-if="response.image && p_img == null"
            :src="'/newimgs/' + response.image + '.webp'"
            class="pickedimg"
            alt="Termék képe"
          />
          <v-lazy-image
            v-if="!(p_img == null)"
            :src="'/newimgs/' + p_img + '.webp'"
            class="pickedimg"
            alt="Termék képe"
          />
        </div>
        <div class="thumblist">
          <v-lazy-image
            @click="select(response.image)"
            v-if="response.image"
            class="thumbimg"
            :src="'/newimgs/' + response.image + '.webp'"
            alt="Termék képe"
          />
          <v-lazy-image
            @click="select(response.image2)"
            v-if="
              response.image2 &&
              !(response.image2 == '46bea41c0363d722467defc2f1ecc234')
            "
            class="thumbimg"
            :src="'/newimgs/' + response.image2 + '.webp'"
            alt="Termék képe"
          />
          <v-lazy-image
            @click="select(response.image3)"
            v-if="
              response.image3 &&
              !(response.image3 == '46bea41c0363d722467defc2f1ecc234')
            "
            class="thumbimg"
            :src="'/newimgs/' + response.image3 + '.webp'"
            alt="Termék képe"
          />
        </div>
      </setion>
      <setion class="texts-s">
        <div class="texts-b">
          <h1 v-if="response.prodname">{{ response.prodname }}</h1>
          <h3 v-if="response.price && response.activesale == 'false'">
            {{ response.price }} Ft
          </h3>
          <h3
            class="oldprice"
            v-if="response.price && response.activesale == 'true'"
          >
            {{ response.price }} Ft
          </h3>
          <h3
            class="newprice"
            v-if="response.price && response.activesale == 'true'"
          >
            {{
              Math.round(
                response.price - (response.price / 100) * response.saleprecent
              )
            }}
            Ft
          </h3>
        </div>
        <div>
          <div class="plus_w">
            <div v-if="access.box == true">
              <input type="checkbox" name="doboz" id="doboz" v-model="forbox" />
              <label for="doboz">Dísz dobozban legyen a termék (+590 Ft)</label>
            </div>
            <div v-if="access.box == false">
              <input
                type="checkbox"
                name="doboz"
                id="doboz"
                v-model="forbox"
                disabled
              />
              <label style="color: gray" for="doboz"
                >Díszdobozban legyen a termék (+590 Ft)</label
              >
            </div>
            <div>
              <input type="checkbox" name="ko" id="ko" v-model="showPStone" />
              <label for="ko">Kérek mellé ásvány követ </label>
              <label v-if="p_stone_id && showPStone" for="ko">
                ∙ ({{ p_stone_name }} +{{ p_stone_price }} Ft)</label
              >
            </div>
            <div class="stonelist" v-if="showPStone">
              <div class="stone" v-for="stone in stones">
                <img
                  class="s_img"
                  :class="{ selected: stone.prodname == p_stone_name }"
                  :src="'/newimgs/' + stone.image + '.webp'"
                  @click="
                    selectStone(
                      stone.prodname,
                      stone.image,
                      stone.price,
                      stone._id
                    )
                  "
                />
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
.v-lazy-image {
  filter: blur(5px);
  transition: filter 0.6s;
  will-change: filter;
}
.oldprice {
  text-decoration: line-through;
}
.newprice {
  color: tomato;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.selected {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.554);
  border: 3px solid white;
}
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
img{
  transform: rotate(90deg);
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
@media only screen and (max-width: 550px) {
  .thumbimg {
    box-shadow: 0px 0px 5px gray;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    z-index: 1;
    border: 5px solid white;
  }
  .thumblist {
    position: relative;
    top: 1.2rem;
    left: 1rem;
    gap: 10px;
    display: flex;
  }
  .texts-s {
    position: relative;
    top: -0.5rem;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    padding-top: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

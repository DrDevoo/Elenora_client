<script setup>
import Loader from "./Loader.vue";
import { RouterLink } from "vue-router";
import VLazyImage from "v-lazy-image";
</script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showMenu: false,
      showCart: false,
      showSearch: false,
      showWish: false,
      header_title: "",
      cart: [],
      response: [],
      imgurl: "/prodimgs/",

      loading: false,
      cartcount: 0,
      searchtext: null,
    };
  },
  created() {
    try {
      this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
      this.cartcount = this.cart.length;
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    total() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    checksuprise() {
      let totalprice = this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      if (totalprice < 10000) {
        var objid = this.cart.findIndex(
          (obj) => obj.name == "Ajandek zsakba macska karkoto"
        );
        this.cart.splice(objid, 1);
      }
    },
    removeItem(name) {
      var objid = this.cart.findIndex((obj) => obj.name == name);
      this.cart.splice(objid, 1);

      let totalprice = this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      if (totalprice < 10000) {
        var dobjsid = this.cart.findIndex(
          (obj) => obj.name == "Ajándék zsákbamacska karkötő"
        );
        if (dobjsid) {
          this.cart.splice(dobjsid, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    openCart() {
      this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
      this.showCart = !this.showCart;
    },
    checkout() {
      this.loading = true;
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/start/",
          JSON.stringify(this.cart),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) =>
          this.$router.push({
            path: "/shop/checkout",
            query: { order: response.data._id },
          })
        )
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    addq(name) {
      var objid = this.cart.findIndex((obj) => obj.name == name);
      this.cart[objid].quantity += 1;
      let totalprice = this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (totalprice > 9999) {
        let found = this.cart.find(
          (elem) => elem.name == "Ajándék zsákbamacska karkötő"
        );
        if (!found) {
          this.cart.push({
            id: 9,
            name: "Ajándék zsákbamacska karkötő",
            price: 0,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    minq(name) {
      var objid = this.cart.findIndex((obj) => obj.name == name);
      this.cart[objid].quantity -= 1;
      if (this.cart[objid].quantity == 0) {
        this.cart.splice(objid, 1);
      }
      let totalprice = this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      if (totalprice < 10000) {
        var objsid = this.cart.findIndex(
          (obj) => obj.name == "Ajándék zsákbamacska karkötő"
        );
        this.cart.splice(objsid, 1);
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<template>
  <header>
    <div class="header_wrapper">
      <div>
        <a @click="showMenu = !showMenu"
          ><ion-icon name="menu-outline"></ion-icon
        ></a>
        <a @click="showSearch = !showSearch">
          <ion-icon name="search-outline"></ion-icon>
        </a>
      </div>
      <div style="right: 16px; position: relative">
        <RouterLink to="/"
          ><img class="logo" src="../assets/images/logo/logo.svg" alt="ELENORA"
        /></RouterLink>
      </div>
      <div>
        <a @click="showCart = !showCart"
          ><ion-icon name="bag-outline"></ion-icon
        ></a>
        <div v-if="!(cartcount == 0)" class="cartcount">{{ cartcount }}</div>
      </div>
    </div>
  </header>

  <section v-if="showMenu" class="menu_wrapper" id="menuBtn">
    <a @click="showMenu = !showMenu"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <br />
    <div class="menu-link-list">
      <h3 class="linktitle">Ékszerek</h3>
      <RouterLink to="/shop/women"
        ><h3 class="link">Női karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/men"
        ><h3 class="link">Férfi karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/couple"
        ><h3 class="link">Páros karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/sets"><h3 class="link">Szettek</h3></RouterLink>
      <RouterLink to="/shop/aproko"
        ><h3 class="link">Apró köves karkötők</h3></RouterLink
      >
      <RouterLink class="flexlink" to="/shop/sales"
        ><h3 class="link">Akciós karkötők</h3>
        <h6>Új kedvezmények!</h6></RouterLink
      >
      <RouterLink to="/shop"><h3 class="link">Összes karkötő</h3></RouterLink>
      <RouterLink to="/shop/collections"><h3 class="link">Kollekciók</h3></RouterLink>

      <h3 class="linktitle">Kiegészítők</h3>
      <RouterLink class="flexlink" to="/shop/boravia"
        ><h3 class="link">Fonott karkötők</h3>
        <h6>Készlet erejéig!</h6></RouterLink
      >

      <RouterLink to="/egyedikarkoto"
        ><h3 class="linktitle">Karkötő tervező</h3></RouterLink
      >
      <RouterLink to="/asvany-katalogus"
        ><h3 class="linktitle">Ásvány Lexikon</h3></RouterLink
      >
      <RouterLink to="/kapcsolat"
        ><h3 class="linktitle">Kapcsolat</h3></RouterLink
      >
      <RouterLink to="/gyik"><h3 class="linktitle">Gy.i.k</h3></RouterLink>
    </div>
  </section>

  <section v-if="showCart" class="cart_wrapper" id="cartBtn">
    <a @click="openCart()"
      ><ion-icon class="cart_close" name="close-outline"></ion-icon
    ></a>
    <h1>Kosár ({{ cart.length }})</h1>
    <div class="cart_content">
      <div class="cart_item" v-for="(item, index) in cart" :key="index">
        <div class="cart_item_imgtext">
          <div class="cart_item_img">
            <img v-if="item.img" :src="'/newimgs/' + item.img + '.webp'" />
          </div>
          <div class="cart_item_desc">
            <p class="prodname">{{ item.name }}</p>
            <div v-if="item.custom == true" class="result">
              <div v-for="p in item.pearls">
                <img :src="'https://elenora.hu:444/getimage/' + p + '.webp'" />
              </div>
            </div>
            <p v-if="item.size" class="size">Méret: {{ item.size }}</p>
            <div class="quantity_b" v-if="!item.visitno">
              <ion-icon
                class="i"
                name="add-outline"
                @click="addq(item.name)"
              ></ion-icon>
              <input type="number" min="1" max="15" v-model="item.quantity" />
              <ion-icon
                class="i"
                name="remove-outline"
                @click="minq(item.name)"
              ></ion-icon>
            </div>
          </div>
        </div>
        <div class="cart_item_del">
          <div>
            <ion-icon
              class="cart_close"
              name="close-outline"
              @click="removeItem(item.name)"
            ></ion-icon>
          </div>
          <br />
          <div>
            <h5>
              {{
                Math.round(item.price - (item.price / 100) * item.sale) *
                item.quantity
              }}
              Ft
            </h5>
          </div>
        </div>
      </div>

      <div class="bottom">
        <p class="total">Termékek ára: {{ total }} Ft</p>
        <div
          class="nextbtn"
          @click="checkout"
          v-if="!loading && !(cartcount == 0)"
        >
          <p>Fizetés</p>
        </div>
        <div class="nextbtn nextbtn_off" v-if="!loading && cartcount == 0">
          <p>Fizetés</p>
        </div>
        <div class="nextbtn" v-if="loading"><Loader /></div>
      </div>
    </div>
  </section>

  <section v-if="showWish" class="cart_wrapper" id="cartBtn">
    <a @click="showWish = !showWish"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <h1>Kívánságaim (0)</h1>
  </section>

  <section v-if="showSearch" class="menu_wrapper" id="cartBtn">
    <a @click="showSearch = !showSearch"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <h1>Keresés</h1>
    <div class="search_w">
      <form>
        <input
          class="searchinput"
          type="text"
          v-on:change="search()"
          v-model="searchtext"
          placeholder="Keresés"
        />
      </form>
    </div>
  </section>
</template>

<style>
.result {
  display: flex;
}
.result div {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 4.76%;
}
.result img {
  width: 100%;
}
.v-lazy-image {
  filter: blur(5px);
  transition: filter 0.6s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.cart_content {
  height: 70%;
  overflow-y: scroll;
}
.search_w form {
  width: 100%;
  display: flex;
  justify-content: center;
}
.searchinput {
  width: 90%;
  height: 30px;
  border-radius: 5px;
  border: none;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 5px 5px 24px #dedede, -5px -5px 24px #ffffff;
  padding: 3px;
}
.cartcount {
  position: absolute;
  right: 3px;
  top: 3px;
  background-color: rgba(0, 0, 0, 0.645);
  border-radius: 200px;
  height: 15px;
  width: 15px;
  color: white;
  text-align: center;
  font-size: 9pt;
  line-height: 15px;
}
.flexlink {
  width: 330px;
  height: 30px;
  display: flex;
  align-items: center;
}
.flexlink h6 {
  letter-spacing: 1px;
  color: white;
  width: 170px;
  background-color: lightsalmon;
  padding: 4px;
  text-align: center;
  border-radius: 6px;
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

.quantity_b {
  padding: 0.2rem;
  border-radius: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(206, 206, 206, 0.497);
}
.quantity_b .i {
  font-size: 13pt;
}
.quantity_b input {
  background: transparent;
  border: none;
  text-align: center;
  font-size: 10pt;
  width: fit-content;
}
.cart_item {
  height: 130px;
  padding: 1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  width: 90%;
  align-items: center;
}
.cart_item_imgtext {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.cart_item_img img {
  aspect-ratio: 1/1;
  width: 100px;
  border-radius: 10px;
  transform: rotate(90deg);
}
.cart_item_desc {
  position: relative;
  top: -5px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.cart_item_desc .prodname {
  line-height: 15px;
}
.cart_item_desc .size {
  line-height: 0px;
}
.cart_item_del {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.bottom {
  height: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: white;
  z-index: 15;
  box-shadow: 0px 0px 10px rgba(40, 40, 40, 0.484);
  border-top: 1px solig rgba(128, 128, 128, 0.797);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total {
  font-weight: bold;
}
.nextbtn {
  cursor: pointer;
  background-color: rgb(17, 17, 17);
  width: 150px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.nextbtn:hover {
  font-weight: 10;
}

.nextbtn p {
  color: white;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.nextbtn_off {
  background-color: rgba(37, 37, 37, 0.748);
}
.nextbtn_off p {
  color: rgb(188, 188, 188);
}

.info {
  z-index: 10;
  background-color: rgba(255, 160, 122, 0.895);
  width: 100%;
  height: 25px;
  text-align: center;
}
.info div {
  line-height: 30px;
  color: white;
  animation: roll 7s linear infinite;
  position: relative;
}
@keyframes roll {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

header {
  position: sticky;
  top: 0;
  padding: 0.5rem;
  z-index: 20;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  height: 35px;
}

header ion-icon {
  font-size: 18pt;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  color: rgb(0, 0, 0);
}

.logo {
  height: 1.5rem;
  width: 200px;
}

.menu-link-list {
  left: 0;
  position: relative;
}
.menu_wrapper {
  z-index: 20;
  position: fixed;
  height: 100vh;
  width: 55%;
  background-color: rgba(255, 255, 255, 0.982);
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px rgba(84, 83, 83, 0.549);

  animation-name: animMenu;
  animation-duration: 0.5s;
}
.menu_wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
  width: 100%;
}
.menu_wrapper ion-icon {
  font-size: 2rem;
  position: absolute;
}
.menu_wrapper a {
  text-decoration: none;
  color: black;
}
.menu-link-list a .link {
  position: relative;
  font-weight: 200;
  width: 90%;
  left: 2rem;
  letter-spacing: 2px;
}
.linktitle {
  position: relative;
  font-weight: 200;
  width: 90%;
  left: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
@keyframes animMenu {
  from {
    left: -400px;
  }
  to {
    left: 0;
  }
}

.cart_wrapper {
  z-index: 20;
  position: fixed;
  height: 100%;
  width: 55%;
  background-color: rgba(255, 255, 255, 0.982);
  top: 0;
  right: 0;
  box-shadow: 0px 0px 10px rgba(84, 83, 83, 0.549);

  animation-name: anim;
  animation-duration: 0.5s;
}

.cart_wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
  width: 100%;
}
.cart_close {
  font-size: 2rem;
  position: relative;
}
.cart_wrapper a {
  text-decoration: none;
  color: black;
}
@keyframes anim {
  from {
    right: -400px;
  }
  to {
    right: 0;
  }
}

@media only screen and (max-width: 600px) {
  header {
    padding: 0rem;
  }

  header ion-icon {
    font-size: 16pt;
    margin-left: 0.5rem;
    color: rgb(0, 0, 0);
  }

  .logo {
    height: 1.3rem;
    width: 200px;
  }
  .info {
    z-index: 10;
    background-color: rgba(255, 160, 122, 0.895);
    width: 100%;
    height: 25px;
    text-align: center;
  }
  .info div {
    line-height: 30px;
    color: white;
    animation: roll 8s linear infinite;
    position: relative;
  }

  .cart_wrapper {
    width: 90%;
  }
  .menu_wrapper {
    width: 90%;
  }
  .prodname {
    line-height: 20px;
  }
}
</style>

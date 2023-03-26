<script setup>
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { RouterLink } from "vue-router";

</script>
<script>
export default {
  data: () => {
    return {
      response: [],
      filter: false,
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      linkurl: "/shop/picked?id=",
      count: 0,

      p_product: {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
      },
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getbycateg/set")
      .then((response) => (this.response = response.data));
  },
  methods: {
    addToCart(product) {
      this.cart.push({
        id: product._id,
        name: product.prodname,
        price: product.price,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.rendezes {
  display: flex;
  align-items: center;
}

main {
  display: flex;
}
aside {
  margin-top: 1.5rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  animation: op 0.3s linear;
}
@keyframes op {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
aside .box {
  border: 1px solid gray;
  width: 85%;
  height: fit-content;
  border-radius: 1rem;
}
aside div h3 {
  font-weight: 300;
  position: relative;
  top: -10px;
  left: 10px;
}
section {
  width: 100%;
}

.list-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  left: 2.5%;
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
}
.item-list a {
  text-decoration: none;
  color: black;
  width: 18%;
  height: fit-content;
  box-sizing: border-box;
}
.item {
  padding: 5px;
  width: 100%;
  height: fit-content;
  border-radius: 0.5rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 21px #f2f2f2, -5px -5px 21px #ffffff;
  transition: all 0.3s;
}
.item:hover {
  box-shadow: 5px 5px 21px #f2f2f29d, -5px -5px 21px #ffffff;
}
.item .text {
  padding: 0rem;
  position: relative;
}
.item img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
}
.item img:hover{
  transform: scale(1.0);
  width: 100%;
}
.item h3 {
  font-weight: 300;
  line-height: 20px;
  font-size: 12pt;
}
.item h4 {
  line-height: 0;
  position: relative;
  font-weight: 500;
}
.color-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem;
}
.dot {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color {
  width: 19px;
  height: 19px;
  border-radius: 100%;
}
.blue {
  background-color: lightblue;
}
.white {
  background-color: white;
  border: 1px solid rgba(150, 149, 149, 0.507);
}
.black {
  background-color: black;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}

.salebox {
  position: absolute;
  height: 30px;
  width: 50px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-top: 5px;
}
.salebox h5 {
  line-height: 1px;
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
}
.price {
  display: flex;
  position: relative;
  bottom: 15px;
}
.old-price {
  color: gray;
  text-decoration: line-through;
  margin-right: 1.5rem;
}
.new-price {
  color: tomato;
}
.aside_close {
  position: absolute;
  right: 14px;
  font-size: 19pt;
}
.aside_title {
  font-weight: 100;
  line-height: 0px;
}
@media only screen and (max-width: 1000px) {
  main {
    width: 100%;
  }
  .item {
    width: 100%;
  }
  section {
    width: 100%;
  }
  .item-list {
    justify-content: center;
  }
  .item-list a {
    text-decoration: none;
    color: black;
    width: 46%;
    box-sizing: border-box;
  }
  aside {
    padding: 1rem;
    left: 5%;
    top: 5rem;
    display: flex;
    margin: auto;
    position: fixed;
    z-index: 10;
    background-color: white;
    width: 90%;
    height: 60vh;
    border-radius: 20px;
    box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  }
  aside .box {
    border: 1px solid gray;
    width: 85%;
    height: fit-content;
    border-radius: 1rem;
  }
  aside div h3 {
    font-weight: 300;
    position: relative;
    top: -10px;
    left: 10px;
  }
  .list-header {
    display: flex;
    justify-content: space-between;
    width: 92%;
    margin: auto;
    left: 0%;
  }
}

.s {
  position: relative;
  top: 0rem;
}
.picked-t {
  text-align: center;
  font-weight: 300;
  font-size: 20pt;
}
.prod-count {
  color: gray;
}

.saleprecent {
  position: absolute;
  top: -15px;
  right: 8px;
  width: 35px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  color: white;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.img_w {
  position: relative;
  text-align: center;
}
.prices_b{
  display: flex;
  gap: 1rem;
}
.oldprice{
  text-decoration: line-through;
}
.newprice{
  color: tomato;
}
</style>

<template>
  <Header />
  <main>
    <aside v-if="filter">
      <ion-icon
        @click="filter = !filter"
        class="aside_close"
        name="close-outline"
      ></ion-icon>
      <h1 class="aside_title">Szűrők</h1>
      <div class="box">
        <h3>Ár</h3>
      </div>
      <div class="box">
        <h3>Szín</h3>
        <div class="color-list">
          <div class="dot"><div class="white color"></div></div>
          <div class="dot"><div class="black color"></div></div>
          <div class="dot"><div class="red color"></div></div>
          <div class="dot"><div class="yellow color"></div></div>
          <div class="dot"><div class="green color"></div></div>
          <div class="dot"><div class="blue color"></div></div>
        </div>
      </div>
      <div class="box">
        <h3>Ásvány</h3>
      </div>
    </aside>
    <section class="s">
      <h1 class="picked-t">Szettek</h1>
      <div class="list-header">
        <div>
          <p class="prod-count">{{ response.count }} termék</p>
        </div>
        <div @click="filter = !filter">
          <p class="rendezes">
            Szűrés<ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </p>
        </div>
      </div>
      <div class="item-list">
        <RouterLink
          v-for="item in response.products"
          :key="item._id"
          :to="linkurl + item._id"
        >
        <div class="item">
            <div class="img_w">
              <img :src="imgurl + item.image" />
              <h5 class="saleprecent" v-if="item.activesale === 'true'">
                {{ item.saleprecent }} %
              </h5>
            </div>
            <div class="text">
              <h3>{{ item.prodname }}</h3>
              <div class="prices_b">
                <h4 v-if="item.activesale === 'false'">{{ item.price }} Ft</h4>
                <h4 class="oldprice"  v-if="item.activesale === 'true'">{{ item.price }} Ft</h4>
                <h4 class="newprice" v-if="item.activesale === 'true'">
                  {{ Math.round(item.price - (item.price / 100) * item.saleprecent) }} Ft
                </h4>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
  <Footer />
</template>

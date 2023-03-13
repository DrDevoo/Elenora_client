<script setup>
import axios from "axios";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      ordercount: 0,
      orderprice: 0,
      orderdate: 0,
      orderid: 0,
      add: 0,
      order: [],
      cart: [],
      orderdbid: this.$route.query.id,
      key:0,
    };
  },
  mounted() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.key += 1
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + this.orderdbid)
      .then((response) => (this.order = response.data));
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/finish/" + this.orderdbid)
  },
};
</script>

<template>
  <Header :key="key" />
  <main>
    <section class="s1">
      <h1 class="title">Köszönjük!</h1>
      <div class="flex">
        <p v-if="order.cart" class="count">
          {{ order.cart.reduce((sum, cartitem) => sum + cartitem.quantity, 0) }}
          termék
        </p>
        <p v-if="order.cart && order.shipping == 'delivery-cash'" class="price">
          {{
            order.cart.reduce(
              (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
              2880
            )
          }}
          Ft
        </p>
        <p v-if="order.cart && order.shipping == 'delivery-card'" class="price">
          {{
            order.cart.reduce(
              (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
              1990
            )
          }}
          Ft
        </p>
      </div>
    </section>
    <section class="s2">
      <h2 class="altitle">A rendelésedet sikeresen rögzitettük.</h2>
      <p class="altext">
        Nézd meg az emaileidet a rendelés visszaigazolásáról.
      </p>
    </section>
    <section class="s3">
      <div class="flex">
        <p>Rendelés azonosító:</p>
        <p>{{ order.orderid }}</p>
      </div>
      <div class="flex">
        <p>Rendelés dátuma:</p>
        <p v-if="order.createdtime">{{ order.createdtime.split("T")[0] }}</p>
      </div>
      <br />
      <p>
        Küldtünk neeked egy visszaigazoló emailt erre a címre:
        <b>{{ order.u_email }}</b>
      </p>
    </section>
  </main>
</template>

<style scoped>
main {
  position: relative;
  top: 60px;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.s1 {
  height: 20px;
}
.s2 {
  background-color: lightsalmon;
  box-shadow: 0px 0px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s3 {
  align-items: flex-start;
  padding-left: 1rem;
  height: 40px;
}
.flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.title {
  text-transform: uppercase;
  font-size: 20pt;
  letter-spacing: 2px;
}
.altitle {
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  font-size: 22pt;
  width: 80%;
}
.altext {
  color: white;
}
.price {
  font-weight: 100;
  font-size: 13pt;
}
.count {
  color: gray;
}
</style>

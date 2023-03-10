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

      order: [],
      cart: [],
      orderdbid: this.$route.query.id,
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + this.orderdbid)
      .then((response) => (this.order = response.data));
    axios
      .post(
        import.meta.env.VITE_API_URL + "/orders/finish/" + this.orderdbid,
        JSON.stringify(this.orderdbid),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => this.$router.push({ path: "/" }))
      .catch((error) => {
        console.error("There was an error!", error);
      });
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },
  methods: {
    pay() {
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/pay",
          JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.url);
          window.open(res.data.url, "_self");
        });
    },
  },
};
</script>

<template>
  <Header />
  <main>
    <section class="s1">
      <h1 class="title">Köszönjük!</h1>
      <div class="flex">
        <p class="count">{{ ordercount }} termék</p>
        <p class="price">{{ orderprice }} Ft</p>
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
        <p>Rendelés:</p>
        <p>{{ orderdate }}</p>
      </div>
      <br />
      <p></p>
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

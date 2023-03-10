<script>
import axios from "axios";
import { resolveComponent } from "vue";
export default {
  data() {
    return {
      showCart: false,
      cart: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      orderid: this.$route.query.order,
      loading: false,

      order: [],
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + this.orderid)
      .then((response) => (this.order = response.data));
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
    next() {
      this.loading = true;
      console.log(this.user);
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/finish/" + this.orderid,
          JSON.stringify(this.user),
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
    },
    backto(path) {
      console.log("clicked");
      if (path == "shipping") {
        this.$router.push({
          path: "/shop/checkout/shipping",
          query: { order: this.orderid },
        });
      } else if (path == "customer") {
        this.$router.push({
          path: "/shop/checkout",
          query: { order: this.orderid },
        });
      } else if (path == "paying") {
        this.$router.push({
          path: "/shop/checkout/shipping",
          query: { order: this.orderid },
        });
      } else {
        console.log("err");
      }
    },
    ordercash() {
      this.loading = true;
    },
    orderpay() {
      this.loading = true;
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/pay",
          JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
            orderid: this.orderid,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          window.open(res.data.url, "_self");
        });
    },
  },
};
</script>
<template>
  <main>
    <section class="datas_w">
      <div class="logo_w">
        <RouterLink to="/"
          ><img
            class="logo"
            src="../../assets/images/logo/logo.svg"
            alt="ELENORA"
        /></RouterLink>
      </div>
      <div class="cart_w">
        <div class="header" @click="this.showCart = !this.showCart">
          <div class="text">
            <ion-icon class="cart_icon" name="cart-outline"></ion-icon>
            <p>Tekintsd meg a kosarad tartalmát</p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div class="price">
            <b
              ><p>{{ total }} Ft</p></b
            >
          </div>
        </div>

        <div class="cart" v-if="this.showCart">
          <div class="list">
            <div class="cart_item" v-for="(item, index) in cart" :key="index">
              <div class="cart_item_imgtext">
                <div class="cart_item_img">
                  <img :src="imgurl + item.img" />
                </div>
                <div class="cart_item_desc">
                  <p>{{ item.name }}</p>
                  <p>Méret: {{ item.size }}</p>
                  <p class="quantity">{{ item.quantity }}</p>
                </div>
              </div>
              <div class="cart_item_del">
                <h5>{{ item.price }} Ft</h5>
              </div>
            </div>
          </div>
          <div class="prices">
            <div>
              <p>Termékek</p>
              <b
                ><p>{{ total }} Ft</p></b
              >
            </div>
            <div>
              <p>Szállítás</p>
              <b><p>--</p></b>
            </div>
          </div>
        </div>
      </div>
      <div class="order_status">
        <div class="sec">
          <div class="circle"><p>1</p></div>
          <div class="title"><p>Adatok</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>2</p></div>
          <div class="title"><p>Szállítás - Fizetés</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle active"><p class="active">3</p></div>
          <div class="title"><p>Összegzés</p></div>
        </div>
      </div>
      <div class="osszesites_w">
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Kapcsolattartás</p>
            <p class="c">{{ this.order.u_email }}</p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('customer')">Módosítás</p>
          </div>
        </div>
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Szállítási cím</p>
            <p class="c">
              {{ this.order.u_postnumber }} {{ this.order.u_city }},
              {{ this.order.u_addresse }}, {{ this.order.u_legio }}
            </p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('customer')">Módosítás</p>
          </div>
        </div>
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Szállítási mód</p>
            <p class="c" v-if="this.order.shipping == 'delivery-cash'">
              Házhozszállítás
            </p>
            <p class="c" v-if="this.order.shipping == 'delivery-card'">
              Házhozszállítás
            </p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('shipping')">Módosítás</p>
          </div>
        </div>
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Fizetési mód</p>
            <p class="c" v-if="this.order.shipping == 'delivery-cash'">
              Utánvétes fizetés
            </p>
            <p class="c" v-if="this.order.shipping == 'delivery-card'">
              Online fizetés
            </p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('paying')">Módosítás</p>
          </div>
        </div>
      </div>
      <div>
        <br />
        <button
          @click="ordercash()"
          v-if="!loading && this.order.shipping == 'delivery-cash'"
        >
          Megrendelés
        </button>
        <button
          @click="orderpay()"
          v-if="!loading && this.order.shipping == 'delivery-card'"
        >
          Fizetés és megrendelés
        </button>
        <button v-if="loading">Töltés</button>
      </div>
    </section>
    <br /><br />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.osszesites_w {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oszesites_b {
  width: 90%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.oszesites_b .left {
}
.oszesites_b .right {
}
.ch {
  cursor: pointer;
}
.t {
  color: gray;
}
.prices {
  padding-left: 1rem;
  padding-right: 1rem;
}
.prices div {
  display: flex;
  justify-content: space-between;
}

h3 {
  position: relative;
  left: 5%;
  font-weight: 300;
}
input {
  position: relative;
  left: 5%;
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 7px;
  border: 1px solid rgb(189, 189, 189);
  padding-left: 0.5rem;
}
button {
  position: relative;
  left: 10%;
  width: 80%;
  height: 50px;
  background-color: rgb(47, 47, 47);
  color: white;
  font-size: 14pt;
  border: none;
  border-radius: 7px;
}
.flex {
  display: flex;
}
main {
  display: flex;
  height: 100vh;
}
.logo_w {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  margin: 1rem;
  width: 250px;
}
.datas_w {
  gap: 2rem;
  padding: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.order_status {
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
}
.sec {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.sec .circle {
  color: lightsalmon;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 3px solid lightsalmon;
}
.active {
  background-color: lightsalmon;
  color: white;
}
.sec .title {
  color: lightsalmon;
}
.hr {
  width: 70px;
  height: 2px;
  background-color: lightsalmon;
  position: relative;
  bottom: 1.5rem;
}
.cart_w {
  background-color: rgb(237, 237, 237);
  width: 100%;
  height: fit-content;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.527);
}
.cart_w .header {
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
.cart_w .text {
  align-items: center;
  display: flex;
  color: rgb(59, 59, 59);
}
.cart_w .price {
  align-items: center;
  display: flex;
  color: rgb(40, 40, 40);
}
.cart_icon {
  font-size: 16pt;
}

footer {
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top: 1px solid gray;
  color: black;
}

.quantity {
  padding: 0.2rem;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;
  color: white;
}

.cart_item {
  height: 110px;
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
}
.cart_item_desc {
  max-height: 100px;
  position: relative;
  top: -5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.cart_item_desc p {
  line-height: 0px;
}

.cart_item_del {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox {
  width: fit-content;
}
label {
  position: relative;
  top: 0;
  left: 0;
}
</style>

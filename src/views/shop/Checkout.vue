<script setup>
import Loader from "../../components/Loader.vue";
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      showCart: false,
      cart: [],
      user: [],
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
      orderid: this.$route.query.order,
      loading: false,
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
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
      console.log(this.user)
      this.loading = true;
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/saveuser/" + this.orderid,
          JSON.stringify(this.user),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) =>
          this.$router.push({
            path: "/shop/checkout/shipping",
            query: { order: this.orderid },
          })
        )
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + this.orderid)
      .then((response) => (this.user = response.data));
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
        <div class="header" @click="showCart = !showCart">
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

        <div class="cart" v-if="showCart">
          <div class="list">
            <div class="cart_item" v-for="(item, index) in cart" :key="index">
              <div class="cart_item_imgtext">
                <div class="cart_item_img">
                  <img v-if="!(item.img == null)" :src="imgurl + item.img" />
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
              <p>Összeg</p>
              <b
                ><p>{{ total }} Ft</p></b
              >
            </div>
          </div>
        </div>
      </div>
      <div class="order_status">
        <div class="sec">
          <div class="circle active"><p class="active">1</p></div>
          <div class="title"><p>Adatok</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>2</p></div>
          <div class="title"><p>Szállítás - Fizetés</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>3</p></div>
          <div class="title"><p>Összegzés</p></div>
        </div>
      </div>
      <div>
        <h3>Kapcsolattartási adatok</h3>
        <input type="text" placeholder="E-mail-cím" v-model="user.u_email" />
        <br />

        <h3>Szállítási cím</h3>
        <input type="text" placeholder="Vezetéknév" v-model="user.u_first" />
        <input type="text" placeholder="Utónév" v-model="user.u_name" /> <br />
        <br />
        <input
          type="text"
          placeholder="Ország/régió"
          value="Magyarország"
          readonly="readonly"
        />
        <br />
        <input
          type="text"
          placeholder="Irányítószám"
          v-model="user.u_postnumber"
        />
        <br />
        <input type="text" placeholder="Település" v-model="user.u_city" />
        <br />
        <input type="text" placeholder="Cím" v-model="user.u_addresse" />
        <br />
        <input type="text" placeholder="Telefonszám" v-model="user.u_tel" />
        <div class="flex">
          <input class="checkbox" type="checkbox" name="news" id="news" />
          <label for="news">Szeretnék értesülni az aktuális ajánlatokról</label>
        </div>
        <br />
        <br />
        <button
          @click="next"
          v-if="
            !loading &&
            !(
              user.u_email == '' ||
              user.u_name == '' ||
              user.u_first == '' ||
              user.u_postnumber == '' ||
              user.u_regio == '' ||
              user.u_addresse == '' ||
              user.u_tel == ''
            )
          "
        >
          Szállítási módok
        </button>
        <button
          class="off"
          v-if="
            (!loading && user.u_email == '') ||
            user.u_name == '' ||
            user.u_first == '' ||
            user.u_postnumber == '' ||
            user.u_regio == '' ||
            user.u_addresse == '' ||
            user.u_tel == ''
          "
        >
          Szállítási módok
        </button>
        <button v-if="loading"><Loader /></button>
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
  cursor: pointer;
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
button.off {
  background-color: rgba(37, 37, 37, 0.748);
  color: rgb(188, 188, 188);
}
.flex {
  display: flex;
  align-items: center;
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
  top: -2px;
  left: 30px;
}
</style>

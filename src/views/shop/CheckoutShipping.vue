<script setup>
import Loader from "../../components/Loader.vue";
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      showCart: false,
      imgurl: '/prodimgs/',
      orderid: this.$route.query.order,
      loading: false,

      order: [],

      epty: [],

      loadingcoupon: false,
      cuponcode: "",
      cuponsresponse: [],
      cuponactive: false,
    };
  },
  async mounted() {
    await axios
      .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + this.orderid)
      .then((response) => (this.order = response.data));

    if (!(this.order.usedcupon == "")) {
      await axios
        .get(
          import.meta.env.VITE_API_URL + "/cupons/check/" + this.order.usedcupon
        )
        .then((response) => (this.cuponsresponse = response.data));
      this.cuponcode = this.order.usedcupon;
      this.cuponactive = true;
      this.cart.forEach((item, index) => {
        if (!(item.name == "Szállítási díj")) {
          console.log(item);
          this.cart[index].sale = this.cuponsresponse.cupon_value;
          console.log("fut");
        } else {
          console.log("elutasitva");
        }
      });
    }
  },
  methods: {
    next() {
      this.loading = true;

      let foundshipping = this.order.cart.find(
        (elem) => elem.name == "Szállítási díj"
      );
      if (foundshipping) {
        var objsid = this.order.cart.findIndex(
          (obj) => obj.name == "Szállítási díj"
        );
        this.order.cart.splice(objsid);
      }

      let foundpay = this.order.cart.find((elem) => elem.name == "Utánvét díj");
      if (foundpay) {
        var objsidutan = this.order.cart.findIndex(
          (obj) => obj.name == "Utánvét díj"
        );
        this.order.cart.splice(objsidutan);
      }

      if (this.order.shipping == "delivery-cash") {
        const cartamount = this.order.cart.reduce(
          (sum, item) =>
            sum +
            Math.round(item.price - (item.price / 100) * item.sale) *
              item.quantity,
          0
        );
        if (cartamount > 14999) {
          this.order.cart.push({
            id: 1,
            name: "Szállítási díj",
            price: 0,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
          this.order.cart.push({
            id: 2,
            name: "Utánvét díj",
            price: 790,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
        } else {
          this.order.cart.push({
            id: 1,
            name: "Szállítási díj",
            price: 1290,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
          this.order.cart.push({
            id: 2,
            name: "Utánvét díj",
            price: 790,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
        }
        axios.post(
          import.meta.env.VITE_API_URL + "/orders/updatecart/" + this.orderid,
          JSON.stringify(this.order.cart),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        const cartamount = this.order.cart.reduce(
          (sum, item) =>
            sum +
            Math.round(item.price - (item.price / 100) * item.sale) *
              item.quantity,
          0
        );
        if (cartamount > 14999) {
          this.order.cart.push({
            id: 1,
            name: "Szállítási díj",
            price: 0,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
        } else {
          this.order.cart.push({
            id: 1,
            name: "Szállítási díj",
            price: 1290,
            quantity: 1,
            sale: 0,
            img: null,
            visitno: true,
          });
        }
        axios.post(
          import.meta.env.VITE_API_URL + "/orders/updatecart/" + this.orderid,
          JSON.stringify(this.order.cart),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      axios
        .post(
          import.meta.env.VITE_API_URL + "/orders/saveshipping/" + this.orderid,
          JSON.stringify(this.order),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) =>
          this.$router.push({
            path: "/shop/checkout/summary",
            query: { order: this.orderid },
          })
        )
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
    async check() {
      this.loadingcoupon = true;
      await axios
        .get(import.meta.env.VITE_API_URL + "/cupons/check/" + this.cuponcode)
        .then((response) => (this.cuponsresponse = response.data));

      if (this.cuponsresponse._id) {
        console.log("Kupon aktivalasa");
        this.order.cart.forEach((item, index) => {
          if (!(item.name == "Szállítási díj")) {
            console.log(item);
            this.order.cart[index].sale = this.cuponsresponse.cupon_value;
          } else {
            console.log("elutasitva");
          }
        });
        axios.post(
          import.meta.env.VITE_API_URL + "/orders/updatecart/" + this.orderid,
          JSON.stringify(this.order.cart),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        await axios.get(
          import.meta.env.VITE_API_URL +
            "/orders/savecupon/" +
            this.orderid +
            "/" +
            this.cuponsresponse.cupon_name
        );
        this.cuponactive = true;
      } else {
        console.log("Hibas kupon!");
      }
      this.loadingcoupon = false;
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
        <div class="header" @click="showCart = !showCart">
          <div class="text">
            <ion-icon class="cart_icon" name="cart-outline"></ion-icon>
            <p>Tekintsd meg a kosarad tartalmát</p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div class="price">
            <b
              ><p v-if="order.cart">
                {{
                  order.cart.reduce(
                    (sum, item) =>
                      sum +
                      Math.round(item.price - (item.price / 100) * item.sale) *
                        item.quantity,
                    0
                  )
                }}
                Ft
              </p></b
            >
          </div>
        </div>

        <div class="cart" v-if="showCart">
          <div class="list">
            <div
              class="cart_item"
              v-for="(item, index) in order.cart"
              :key="index"
            >
              <div class="cart_item_imgtext">
                <div class="cart_item_img">
                  <img v-if="!(item.img == null)" :src="'/newimgs/' + item.img + '.webp'" />
                </div>
                <div class="cart_item_desc">
                  <p>{{ item.name }}</p>
                  <div v-if="item.custom == true" class="result">
                    <div v-for="p in item.pearls">
                      <img
                        :src="'https://elenora.hu:444/getimage/' + p + '.webp'"
                      />
                    </div>
                  </div>
                  <p v-if="!item.visitno">Méret: {{ item.size }}</p>
                  <p v-if="!item.visitno" class="quantity">
                    {{ item.quantity }}
                  </p>
                </div>
              </div>
              <div class="cart_item_del">
                <h5>
                  {{ Math.round(item.price - (item.price / 100) * item.sale) }}
                  Ft
                </h5>
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
          <div class="circle"><p>1</p></div>
          <div class="title"><p>Adatok</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle active"><p class="active">2</p></div>
          <div class="title"><p>Szállítás - Fizetés</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>3</p></div>
          <div class="title"><p>Összegzés</p></div>
        </div>
      </div>
      <div class="osszesites_w">
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Kapcsolattartás</p>
            <p class="c">{{ order.u_email }}</p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('customer')">Módosítás</p>
          </div>
        </div>
        <div class="oszesites_b">
          <div class="left">
            <p class="t">Szállítási cím</p>
            <p class="c">
              {{ order.u_postnumber }} {{ order.u_city }},
              {{ order.u_addresse }}, {{ order.u_legio }}
            </p>
          </div>
          <div class="right">
            <p class="ch" @click="backto('customer')">Módosítás</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Ajándékkártya vagy kupon kódja</h3>
        <div class="cupon_b">
          <div>
            <input
              v-if="!cuponactive"
              type="text"
              v-model="cuponcode"
              placeholder="Válts be kuponod"
            />
            <input
              v-if="cuponactive"
              type="text"
              v-model="cuponcode"
              placeholder="Válts be kuponod"
              disabled
            />
            <button v-if="!loadingcoupon && !cuponactive" @click="check()">
              Beváltom
            </button>
            <button v-if="loadingcoupon"><Loader /></button>
            <button style="background-color: green" v-if="cuponactive">
              &#10003;
            </button>
          </div>

          <p v-if="cuponsresponse == 'Érvénytelen kupon!'">Érvénytelen kód!</p>
          <p style="color: green" v-if="cuponsresponse._id">
            {{ cuponsresponse.cupon_value }}%-os kupon beváltva!
          </p>
        </div>
        <h3>Számlázási cím</h3>
        <div class="szamla_b">
          <input
            type="radio"
            name="szamla"
            value="same"
            id="same"
            v-model="order.szamlazasimod"
          />
          <label for="same">Egyezik a szállítási címmel</label>
          <br />
          <br />
          <input
            type="radio"
            name="szamla"
            value="other"
            id="other"
            v-model="order.szamlazasimod"
          />
          <label for="other">Másik számlázási címet adok meg</label>

          <div class="otherszamlazasi" v-if="order.szamlazasimod == 'other'">
            <input type="text" v-model="order.szamlazasOrszag" />
            <div class="inputflex">
              <input
                type="text"
                v-model="order.szamlazasVezeteknev"
                placeholder="Vezetéknév"
              />
              <input
                type="text"
                v-model="order.szamlazasUtonev"
                placeholder="Utónév"
              />
            </div>
            <div class="inputflex">
              <input
                type="text"
                v-model="order.szamlazasIranyitoszam"
                placeholder="Irányítószám"
              />
              <input
                type="text"
                v-model="order.szamlazasTelepules"
                placeholder="Település"
              />
            </div>
            <input type="text" v-model="order.szamlazasCim" placeholder="Cím" />
            <input
              type="tel"
              v-model="order.szamlazasTel"
              placeholder="Telefonszám"
            />
          </div>
        </div>

        <h3>Szállítás és fizetés</h3>
        <h5 class="mini">
          Ha a rendelés összege meghaladja a 15.000 Ft-ot a szállítás ingyenes!
        </h5>
        <div class="options_box">
          <div class="flex_option">
            <div class="flex_option">
              <input
                type="radio"
                name="shipping"
                id="id1"
                value="delivery-card"
                v-model="order.shipping"
                class="radio"
              />
              <label for="id1">Házhozszállítás - Online fizetés</label>
            </div>
            <div>
              <h6>1290 Ft</h6>
            </div>
          </div>
          <div class="flex_option">
            <div class="flex_option">
              <input
                type="radio"
                name="shipping"
                id="id2"
                value="delivery-cash"
                v-model="order.shipping"
                class="radio"
              />
              <label for="id2">Házhozszállítás - Utánvétes fizetés</label>
            </div>
            <div>
              <h6>2080 Ft</h6>
            </div>
          </div>
        </div>
        <br />
        <button
          class="btntovabb"
          @click="next"
          v-if="!loading && !(order.shipping == '')"
        >
          Összegzés
        </button>
        <button class="btntovabb off" v-if="!loading && order.shipping == ''">
          Összegzés
        </button>
        <button class="btntovabb" v-if="loading"><Loader /></button>
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

.otherszamlazasi input {
  width: 99%;
  border: none;
  height: 25px;
  color: black;
  border-radius: 5px;
  padding: 3px;
  box-shadow: 0px 0px 3px rgba(49, 49, 49, 0.663);
  margin: 4px;
}
.inputflex {
  display: flex;
  justify-content: center;
}
.inputflex input {
  width: 50%;
}
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
.szamla_b {
  width: 60%;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gray;
  border-radius: 15px;
}

.cupon_b {
  padding: 0.4rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border: 1px solid gray;
  border-radius: 5px;

  gap: 0.5rem;
}
.cupon_b p {
  line-height: 0px;
  color: red;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cupon_b div {
  display: flex;
}
.cupon_b button {
  height: 30px;
  border: 0;
  background-color: lightsalmon;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 5px;
}
.cupon_b input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.167);
  border: none;
}
.flex_option {
  display: flex;
  align-items: center;
}
.options_box {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.prices {
  padding-left: 1rem;
  padding-right: 1rem;
}
.prices div {
  display: flex;
  justify-content: space-between;
}
.ch {
  cursor: pointer;
}
.t {
  color: gray;
}
h3 {
  position: relative;
  left: 5%;
  font-weight: 300;
}
h5 {
  position: relative;
  left: 5%;
  top: -20px;
  font-weight: 300;
}
.btntovabb {
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
  transform: rotate(90deg);
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

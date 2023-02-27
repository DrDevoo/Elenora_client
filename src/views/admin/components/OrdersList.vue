<script>
import axios from "axios";
export default {
  name: "GetInvetory",
  data() {
    return {
      orders: [],
      p_order: [],
      details: false,
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/orders/getall")
      .then((response) => (this.orders = response.data.r_orders));
  },
  methods: {
    openitemdetails(orderid) {
      axios
        .get(import.meta.env.VITE_API_URL + "/orders/getbyid/" + orderid)
        .then((response) => (this.p_order = response.data));
      this.details = true;
    },
  },
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Dátum/rendeles szam</th>
          <th>Állapot</th>
          <th>Megrendelő</th>
          <th>Termék(ek)</th>
          <th>Összeg</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item._id">
          <td>
            {{ item.createdtime.split("T")[0] }} <br />
            {{ item.orderid }}
          </td>
          <td></td>
          <td>
            {{ item.u_firstname + " " + item.u_name }} <br />
            {{ item.u_email }}
          </td>
          <td>
            <h6 class="itemname" v-for="(cartitem, index) in item.cart">
              {{ cartitem.name }}
            </h6>
          </td>
          <td>
            {{
              item.cart.reduce(
                (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
                0
              )
            }}
            Ft
          </td>
          <td></td>
          <td @click="openitemdetails(item._id)">
            <ion-icon name="eye-outline"></ion-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="details_box" v-if="details">
    <div class="d_container">
      <ion-icon
        @click="details = !details"
        style="font-size: 24pt; position: sticky; top: 0"
        name="close-outline"
      ></ion-icon>
      <h3 style="text-align: center">
        Rendekés összesítő - <i>{{ this.p_order.orderid }}</i>
      </h3>
      <div class="customer_b">
        <div class="box">
          <h5>Megrendelő adatai:</h5>
          <div class="flex">
            <b><p>Teljes név:</p></b>
            <p>{{ this.p_order.u_firstname }} {{ this.p_order.u_name }}</p>
          </div>
          <div class="flex">
            <b><p>E-mail:</p></b>
            <p>{{ this.p_order.u_email }}</p>
          </div>
          <div class="flex">
            <b><p>Tel.:</p></b>
            <p>{{ this.p_order.u_tel }}</p>
          </div>
        </div>
        <div class="box">
          <h5>Szállítás, számlázás:</h5>
          <div class="flex">
            <b><p>helység:</p></b>
            <p>{{ this.p_order.u_postnumber }}, {{ this.p_order.u_city }}</p>
          </div>
          <div class="flex">
            <b><p>Utca:</p></b>
            <p>{{ this.p_order.u_addresse }}</p>
          </div>
        </div>
        <div class="box">
          <h5>Rendelés adatai:</h5>
          <div class="flex" v-if="this.p_order.createdtime">
            <b><p>Idő:</p></b>
            <p>{{ this.p_order.createdtime.split("T")[0] }}</p>
          </div>
          <div class="flex">
            <b><p>Státusz:</p></b>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <h4 style="text-align: center">Rendelt termékek</h4>
        <div
          class="cartprod"
          v-for="(item, index) in this.p_order.cart"
          :key="index"
        >
          <img class="prodimg" :src="imgurl + item.img" />
          <div></div>
          <div>
            <div class="flex">
              <b><p>Neve:</p></b>
              <p>{{ item.name }}</p>
            </div>
            <div class="flex">
              <b><p>Mennyiség:</p></b>
              <p>{{ item.quantity }}</p>
            </div>
            <div class="flex">
              <b><p>Méret:</p></b>
              <p>{{ item.size }}</p>
            </div>
            <div class="flex">
              <b><p>Ára:</p></b>
              <p>{{ item.price }} Ft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cartprod {
  display: flex;
  margin-bottom: 1rem;
  gap: 0.5rem;
}
.customer_b {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px;
}
.prodimg {
  width: 90px;
  border-radius: 5px;
}
.customer_b .box {
  padding: 0.4rem;
}
.flex {
  height: 30px;
  display: flex;
  gap: 0.5rem;
}
.box h5 {
  line-height: 0;
}
.details_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details_box .d_container {
  overflow-y: auto;
  box-shadow: 0px 0px 10px black;
  width: 70%;
  height: 80vh;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1rem;
}
.itemname {
  line-height: 0px;
}
.listprod {
  position: relative;
  top: 0;
  width: 100%;
  top: -5rem;
}
table {
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
  border: none;
}
thead {
  background-color: lightsalmon;
  position: sticky;
  top: 0;
}
tbody {
}
tr {
  height: 30px;
}
th,
td {
  text-align: center;
  border-bottom: 1px solid gray;
}

@media only screen and (max-width: 900px) {
  .details_box .d_container {
  overflow-y: auto;
  box-shadow: 0px 0px 10px black;
  width: 95%;
  height: 83vh;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1rem;
}
.customer_b {
  display: block;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px;
  gap: 1rem;
}
}
</style>

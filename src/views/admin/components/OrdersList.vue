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
    p_delete(id) {
      if (confirm("Biztosan törlöd a rendelést?")) {
        axios.get(import.meta.env.VITE_API_URL + "/orders/update/del/" + id);
      }
    },
    p_maked(id) {
      if (confirm("Biztos teljesen összevan készítve a rendelés?")) {
        axios.get(import.meta.env.VITE_API_URL + "/orders/update/maked/" + id);
      }
    },
    p_shipping(id) {
      if (confirm("Biztosan feladtad a GLS-nek a csomagot?")) {
        axios.get(
          import.meta.env.VITE_API_URL + "/orders/update/shipping/" + id
        );
      }
    },
    p_finish(id) {
      if (confirm("Biztosan teljesűlt a kézbesítés?")) {
        axios.get(import.meta.env.VITE_API_URL + "/orders/update/finish/" + id);
      }
    },
  },
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Dátum / Rendelés szám</th>
          <th>Állapot</th>
          <th>Megrendelő</th>
          <th>Fizetés</th>
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
          <td>
            <p class="stat red" v-if="item.status == 'pending'">
              Rendelés alatt
            </p>
            <p class="stat orange" v-if="item.status == 'ordered'">
              Megrendelve
            </p>
            <p class="stat blue" v-if="item.status == 'maked'">Összekészítve</p>
            <p class="stat lila" v-if="item.status == 'shipping'">Szállítás</p>
            <p class="stat green" v-if="item.status == 'done'">Teljesítve</p>
          </td>
          <td>
            {{ item.u_firstname + " " + item.u_name }} <br />
            {{ item.u_email }}
          </td>
          <td v-if="item.shipping == 'delivery-card'">Fizetve</td>
          <td v-if="item.shipping == 'delivery-cash'">Utánvét</td>
          <td>
            {{
              item.cart.reduce(
                (sum, item) =>
                  sum +
                  Math.round(item.price - (item.price / 100) * item.sale) *
                    item.quantity,
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
        Rendekés összesítő - <i>{{ p_order.orderid }}</i>
      </h3>
      <div class="customer_b">
        <div class="box">
          <h5>Megrendelő adatai:</h5>
          <div class="flex">
            <b><p>Teljes név:</p></b>
            <p>{{ p_order.u_firstname }} {{ p_order.u_name }}</p>
          </div>
          <div class="flex">
            <b><p>E-mail:</p></b>
            <p>{{ p_order.u_email }}</p>
          </div>
          <div class="flex">
            <b><p>Tel.:</p></b>
            <p>{{ p_order.u_tel }}</p>
          </div>
        </div>
        <div class="box">
          <h5>Szállítás, számlázás:</h5>
          <div class="flex">
            <b><p>helység:</p></b>
            <p>{{ p_order.u_postnumber }}, {{ p_order.u_city }}</p>
          </div>
          <div class="flex">
            <b><p>Utca:</p></b>
            <p>{{ p_order.u_addresse }}</p>
          </div>
        </div>
        <div class="box">
          <h5>Rendelés adatai:</h5>
          <div class="flex" v-if="p_order.createdtime">
            <b><p>Idő:</p></b>
            <p>{{ p_order.createdtime.split("T")[0] }}</p>
          </div>
          <div class="flex">
            <b><p>Státusz:</p></b>
            <p>{{ p_order.status }}</p>
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
          <img
            v-if="!(item.img == null)"
            class="prodimg"
            :src="imgurl + item.img"
          />
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
              <p v-if="item.size">{{ item.size }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="order-btns">
        <button
          v-if="!(p_order.status == 'done')"
          @click="p_delete(p_order._id)"
          class="red"
        >
          Törlés
        </button>
        <button
          v-if="p_order.status == 'ordered'"
          @click="p_maked(p_order._id)"
          class="blue"
        >
          Összekészítve
        </button>
        <button
          v-if="p_order.status == 'maked'"
          @click="p_shipping(p_order._id)"
          class="orange"
        >
          Feladva
        </button>
        <button
          v-if="p_order.status == 'shipping'"
          @click="p_finish(p_order._id)"
          class="green"
        >
          Teljesítve
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat {
  margin: auto;
  border-radius: 20px;
  width: 70%;
  padding: 3px;
  color: white;
}
.stat.red {
  background-color: tomato;
}
.stat.orange {
  background-color: orange;
}
.stat.blue {
  background-color: lightblue;
}
.stat.lila {
  background-color: purple;
}
.stat.green {
  background-color: rgb(16, 234, 96);
}

.order-btns {
  margin: auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.order-btns button {
  cursor: pointer;
  height: 25px;
  border: none;
  width: 140px;
  border-radius: 10px;
  font-size: 11pt;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
}
.order-btns button.red {
  background-color: tomato;
}
.order-btns button.blue {
  background-color: lightskyblue;
}
.order-btns button.orange {
  background-color: orange;
}
.order-btns button.green {
  background-color: rgb(24, 247, 106);
}
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

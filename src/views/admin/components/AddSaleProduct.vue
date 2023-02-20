<script>
import axios from "axios";
export default {
  name: "GetCollections",
  data() {
    return {
      products: [],
      p_name : null,
      p_precent : 0,
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getall")
      .then((response) => (this.products = response.data.products));
  },
  methods: {
    pick(name){
      this.p_name = name
    }
  }
};
</script>
<template>
  <section class="addsale">
    <h3 style="text-align: center;">Új akció termékre</h3>
    <div class="options-b">
      <div>
        <h5>Választott termék:</h5>
        <p>{{ this.p_name }}</p>
      </div>
      <div>
        <h5>Hány százalékos?</h5>
        <input class="precent" type="number" name="" id="" placeholder="Százalék" v-model="p_precent" />
      </div>
      <div>
        <form action="">
          <h5>Meddig tartson?</h5>
          <input type="radio" name="alltime" id="alltime" />
          <label for="alltime">Készlet erejéig</label><br />
          <input type="date" name="" id="" />
        </form>
      </div>
    </div>
    <div>
      <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Ára</th>
          <th>Kolekció</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item._id">
          <td>{{ item.prodname }}</td>
          <td>{{ item.price }} Ft</td>
          <td>{{ item.collections }}</td>
          <td class="click" @click="pick(item.prodname)">Választ</td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>
</template>

<style scoped>
.options-b {
  border-radius: 10px 10px 0px 0px;
  padding: 0.4rem;
  background-color: rgba(255, 160, 122, 0.7);
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.addsale {
  position: relative;
  top: -5rem;
  width: 100%;
}
.options-b div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.precent{
  border: none;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
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
</style>

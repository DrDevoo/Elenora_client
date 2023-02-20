<script>
import axios from "axios";
export default {
  name: "GetCollections",
  data() {
    return {
      collections: [],
      p_name : null,
      p_precent : 0,
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/collections/getall")
      .then((response) => (this.collections = response.data));
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
    <h3 style="text-align: center">Új akció kollekcióra</h3>
    <div class="options-b">
      <div>
        <h5>Választott kollekció:</h5>
        <p>{{ this.p_name }}</p>
      </div>
      <div>
        <h5>Hány százalékos?</h5>
        <input class="precent" type="number" name="" id="" placeholder="Százalék" v-model="p_precent"/>
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
            <th>Típusa</th>
            <th>Karkötők</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in collections" :key="item._id">
            <td>{{ item.col_name }}</td>
            <td>{{ item.col_type }}</td>
            <td>{{ item.col_db }}</td>
            <td @click="pick(item.col_name)">választ</td>
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
.options-b div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addsale {
  position: relative;
  top: -5rem;
  width: 100%;
}
.precent{
  border: none;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
}
table {
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
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

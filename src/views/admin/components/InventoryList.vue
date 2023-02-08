<script>
import axios from "axios";
export default {
  name: "GetInvetory",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3500/inventory/getall")
      .then((response) => (this.items = response.data));
  },
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Darab</th>
          <th>Karkötő</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.item_name }}</td>
          <td>{{ item.item_quantity }}</td>
          <td>0</td>
          <td class="addbtn">+ /-</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.addbtn {
  background-color: lightcoral;
  border-radius: 5px;
  color: white;
  font-size: 13pt;
  height: 90%;
  font-weight: bold;
  cursor: pointer;
}
.listprod {
  position: relative;
  top: 0;
  width: 100%;
  top: -8rem;
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
tbody{

}
tr{
  height: 30px;
}
th,
td {
  text-align: center;
  border-bottom: 1px solid gray;
}
</style>

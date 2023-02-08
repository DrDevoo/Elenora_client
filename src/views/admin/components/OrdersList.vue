<script>
import axios from "axios";
export default {
  name: "GetInvetory",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3500/invetory/getall")
      .then((response) => (this.products = response.data));
  },
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Dátum</th>
          <th>Állapot</th>
          <th>Megrendelő</th>
          <th>Termék(ek)</th>
          <th>Összeg</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item._id">
          <td>{{ item.prodname }}</td>
          <td>{{ item.price }} Ft</td>
          <td>{{ item.collections }}</td>
          <td>0</td>
          <td>+ /-</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
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

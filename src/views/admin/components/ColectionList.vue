<script>
import axios from "axios";
export default {
  name: "GetCollections",
  data() {
    return {
      collections: [],
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/collections/getall")
      .then((response) => (this.collections = response.data));
  },
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Típusa</th>
          <th>Neme</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in collections" :key="item._id">
          <td>{{ item.col_name }}</td>
          <td>{{ item.col_type }}</td>
          <td>{{ item.col_gender }}</td>
          <td>•••</td>
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

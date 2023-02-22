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
      .get(import.meta.env.VITE_API_URL + "/sales/getsaled")
      .then((response) => (this.collections = response.data.products));
  },
  methods: {
    deletesale(id){
      if(confirm("Biztos torolod a kedvezményt? Ez nem vonhato vissza!")){
        axios
          .get(import.meta.env.VITE_API_URL + "/sales/delete/" + id)
      }
    }
  }
};
</script>

<template>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Termék</th>
          <th>Százalék</th>
          <th>Meddig</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in collections" :key="item._id">
          <td>{{ item.prodname }}</td>
          <td>{{ item.saleprecent }}</td>
          <td>{{ item.saletime.split("T")[0] }}</td>
          <td @click="deletesale(item._id)"><ion-icon name="trash-outline"></ion-icon></td>
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

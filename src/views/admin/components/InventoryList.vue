<script>
import axios from "axios";
export default {
  name: "GetInvetory",
  data() {
    return {
      items: [],
      e_id: null,
      e_name: null,
      e_quan: null,
      e_open: false,
      item_newquatity: null,
      new: null,
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/inventory/getall")
      .then((response) => (this.items = response.data));
  },
  methods: {
    edit(id, name, quan) {
      this.e_open = !this.e_open;
      this.e_quan = quan;
      this.e_name = name;
      this.e_id = id;
    },
    submitEdit() {
      this.new = this.e_quan + this.item_newquatity;
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/inventory/update/" +
            this.e_name +
            "/" +
            this.new,
              this.e_name,
            {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        })
        axios
      .get(import.meta.env.VITE_API_URL + "/inventory/getall")
      .then((response) => (this.items = response.data));
      this.e_open = false
    },
  },
};
</script>

<template>
  <section class="edit_s" v-if="e_open">
    <h3>
      Mennyiség módosítása: <i>{{ e_name }}</i>
    </h3>
    <p>Jelenlegi mennyiség: {{ e_quan }}</p>
    <label for="">Mennyivel módosítod</label>
    <input type="number" placeholder="db" v-model="item_newquatity" />
    <button v-on:click="submitEdit()">mentés</button>
  </section>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Darab</th>
          <th>Karkötő</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.item_name }}</td>
          <td>{{ item.item_quantity }}</td>
          <td>0</td>
          <td
            class="addbtn"
            @click="edit(item._id, item.item_name, item.item_quantity)"
          >
            + /-
          </td>
          <td>•</td>
          <td class="addbtn">...</td>
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
  min-width: 30px;
}
.listprod {
  position: relative;
  top: 0;
  width: 100%;
  top: -8rem;
}
.edit_s {
  position: relative;
  top: 0;
  width: 100%;
  top: -6rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
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

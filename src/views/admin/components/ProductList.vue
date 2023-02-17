<script>
import axios from "axios";
export default {
  name: "GetProducts",
  data() {
    return {
      products: [],
      form: {
        prod_name: "",
        prod_collection: "",
        prod_price: 0,
        prod_description: "",
        prod_categ: "",
        prod_colors: [],
        prod_pears: [],
      },
      file: "",
      collections: [],
      items: [],
      p_prod: [],
      moreopen: false,
      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/collections/getall")
      .then((response) => (this.collections = response.data));

    axios
      .get(import.meta.env.VITE_API_URL + "/inventory/getall")
      .then((response) => (this.items = response.data));
    axios
      .get(import.meta.env.VITE_API_URL + "/products/getall")
      .then((response) => (this.products = response.data.products));
  },
  methods: {
    more(id) {
      (this.p_prod = null), (this.moreopen = true);
      axios
        .get(import.meta.env.VITE_API_URL + "/products/getbyid/" + id)
        .then((response) => (this.p_prod = response.data));
    },
    update() {
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/update/",
          JSON.stringify(this.p_prod),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response)

        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      this.moreopen = false
    }
  },
};
</script>

<template>
  <section class="prodmore" v-if="this.moreopen">
    <h1>Termék módosítása</h1>
    <div>
      <div>
        <img class="prodimg" v-if="p_prod.image" :src="imgurl + p_prod.image" />
      </div>
      <div>
        <label for="">Neve</label>
        <input type="text" v-model="this.p_prod.prodname" placeholder="Termék neve" />
        <br />
        <label for="kollekcio">Kollekció</label>
        <select name="kollekcio" id="kollekcio" v-model="this.p_prod.collections">
          <option disabled selected>Kollekció</option>
          <option
            v-for="item in collections"
            :key="item._id"
            :value="item.col_name"
          >
            {{ item.col_name }}
          </option>
          <option value="none">Nincs</option>
        </select>
        <br />
        <label for="">Ára</label>
        <input type="text" placeholder="Termék ára" v-model="this.p_prod.price" />
        <br />
        <label for="">Leírása</label>
        <textarea
          v-model="this.p_prod.description"
          placeholder="Termék leírása"
          cols="30"
          rows="4"
        ></textarea>
        <br />
        <label for="Neme">Kategória</label>
        <select name="Neme" id="Neme" v-model="this.p_prod.categ">
          <option disabled selected>Termék neme</option>
          <option value="female">Női</option>
          <option value="male">Férfi</option>
          <option value="unisex">Férfi és Női</option>
          <option value="couple">Páros</option>
        </select>
      </div>
    </div>
    <br>
    <div class="btn_w">
      <button class="btn gray" @click="moreopen = !moreopen">Mégse</button>
      <button class="btn yellow" @click="update()">Módósítás</button>
      <button class="btn red" >Törlés</button>
    </div>
  </section>

  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Ára</th>
          <th>Kolekció</th>
          <th>Eladott</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item._id">
          <td>{{ item.prodname }}</td>
          <td>{{ item.price }} Ft</td>
          <td>{{ item.collections }}</td>
          <td>0</td>
          <td class="click" @click="more(item._id)">•••</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.prodimg{
  width: 60px;
}
.click{
  cursor: pointer;
}
input,
select,
textarea {
  width: 100%;
  border: none;
  background-color: rgba(255, 160, 122, 0.436);
  padding: 10px;
  border-radius: 20px;
}
label {
  position: relative;
  left: 0.5rem;
  font-size: 9pt;
}
.btn_w {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.btn {
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 30px;
  font-weight: bold;
}
.btn.red {
  background-color: tomato;
}
.btn.gray {
  background-color: gray;
}
.btn.yellow {
  background-color: rgb(255, 208, 0);
}
.prodmore {
  position: relative;
  top: 0;
  width: 100%;
  top: -8rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
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

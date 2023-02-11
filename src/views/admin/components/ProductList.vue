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
      (this.form.prod_name = null), (this.moreopen = true);
      axios
        .get(import.meta.env.VITE_API_URL + "/products/getbyid/" + id)
        .then((response) => (this.p_prod = response.data));

      this.form.prod_name = this.p_prod.prodname;
    },
  },
};
</script>

<template>
  <section class="prodmore" v-if="this.moreopen">
    <h1>Termék módosítása</h1>
    <div>
      <div>
        <img src="" />
      </div>
      <div>
        <label for="">Neve</label>
        <input type="text" v-model="form.prod_name" placeholder="Termék neve" />
        <br />
        <label for="kollekcio">Kollekció</label>
        <select name="kollekcio" id="kollekcio" v-model="form.prod_collection">
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
        <input type="text" placeholder="Termék ára" v-model="form.prod_price" />
        <br />
        <label for="">Leírása</label>
        <textarea
          v-model="form.prod_description"
          placeholder="Termék leírása"
          cols="30"
          rows="4"
        ></textarea>
        <br />
        <label for="Neme">Kategória</label>
        <select name="Neme" id="Neme" v-model="form.prod_categ">
          <option disabled selected>Termék neme</option>
          <option value="female">Női</option>
          <option value="male">Férfi</option>
          <option value="unisex">Férfi és Női</option>
          <option value="couple">Páros</option>
        </select>
        <br />
        <label for="colors">Színei</label>
        <select name="colors" id="colors" multiple v-model="form.prod_colors">
          <option disabled selected>Termék színei</option>
          <option value="white">fehér</option>
          <option value="black">fekete</option>
          <option value="blue">kék</option>
          <option value="red">piros</option>
          <option value="green">zöld</option>
          <option value="brown">barna</option>
          <option value="gold">arany</option>
          <option value="purple">lila</option>
        </select>
        <br />
        <label for="gyoongyok">Gyöngyei</label>
        <select
          name="gyoongyok"
          id="gyoongyok"
          multiple
          v-model="form.prod_pears"
        >
          <option disabled selected>Termék gyöngyei</option>
          <option v-for="item in items" :key="item._id" :value="item.item_name">
            {{ item.item_name }}
          </option>
        </select>
      </div>
    </div>
    <div class="btn_w">
      <button class="btn gray" @click="moreopen = !moreopen">Mégse</button>
      <button class="btn yellow">Módósítás</button>
      <button class="btn red">Törlés</button>
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
          <td @click="more(item._id)">•••</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
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

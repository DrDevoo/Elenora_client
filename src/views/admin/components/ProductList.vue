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
        prod_description: " ",
        prod_categ: "",
        prod_colors: [],
        prod_pears: [],
      },
      file1: "",
      file2: "",
      file3: "",
      collections: [],
      items: [],
      p_prod: [],
      pearls_count: 1,

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
      console.log(id)
      this.moreopen = true;
      axios
        .get(import.meta.env.VITE_API_URL + "/products/getbyid/" + id)
        .then((response) => (this.p_prod = response.data.product));
    },
    update() {
      axios
        .post(
          import.meta.env.VITE_API_URL + "/products/update/",
          JSON.stringify(this.p_prod),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          alert("Sikeres termék módosítás!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      this.moreopen = false;
    },
    Delete(index) {
      this.p_prod.pearls.splice(index, 1);
    },
    addPearl() {
      this.p_prod.pearls.push({
        name: this.pearl_name,
        xs: this.pearl_xs,
        s: this.pearl_s,
        m: this.pearl_m,
        l: this.pearl_l,
        xl: this.pearl_xl,
        xxl: this.pearl_xxl,
      });

      this.pearl_name = "";
      this.pearl_xs = 0;
      this.pearl_s = 0;
      this.pearl_m = 0;
      this.pearl_l = 0;
      this.pearl_xl = 0;
      this.pearl_xxl = 0;
    },
    handleFileUpload1() {
      this.file1 = this.$refs.file1.files[0];
      let formData1 = new FormData();
      formData1.append("file", this.file1);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg1/" +
            this.p_prod._id,
          formData1,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          alert("Sikeres kép módosítás!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload2() {
      this.file2 = this.$refs.file2.files[0];
      let formData2 = new FormData();
      formData2.append("file", this.file2);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg2/" +
            this.p_prod._id,
          formData2,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          alert("Sikeres kép módosítás!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload3() {
      this.file3 = this.$refs.file3.files[0];
      let formData3 = new FormData();
      formData3.append("file", this.file3);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg3/" +
            this.p_prod._id,
          formData3,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          alert("Sikeres kép módosítás!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    Deleteproduct(){
      if(confirm("Biztos torolod a termeket? Ez nem vonhato vissza!")){
        axios
          .get(import.meta.env.VITE_API_URL + "/products/delete/" + this.p_prod._id)
      }
    },
  },
};
</script>

<template>
  <section class="prodmore" v-if="this.moreopen">
    <h1>Termék módosítása</h1>
    <div>
      <div>
        <label for="">Neve</label>
        <input
          type="text"
          v-model="this.p_prod.prodname"
          placeholder="Termék neve"
        />
        <br />
        <label for="kollekcio">Kollekció</label>
        <select
          name="kollekcio"
          id="kollekcio"
          v-model="this.p_prod.collections"
        >
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
        <input
          type="text"
          placeholder="Termék ára"
          v-model="this.p_prod.price"
        />
        <br />
        <label for="">Leírás</label>
        <textarea
          rows="4" cols="50"
          v-model="this.p_prod.description"
        />
        <br />
        <label for="Neme">Kategória</label>
        <select name="Neme" id="Neme" v-model="this.p_prod.categ">
          <option disabled selected>Termék neme</option>
          <option value="female">Női</option>
          <option value="male">Férfi</option>
          <option value="unisex">Férfi és Női</option>
          <option value="couple">Páros</option>
          <option value="set">Szett</option>
          <option value="aproko">Aprókő</option>
        </select>

        <div class="pearls_t_w">
          <table class="pears-t">
            <tr>
              <th>Gyöngy</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
              <th></th>
            </tr>
            <tr v-for="(item, index) in this.p_prod.pearls" :key="index">
              <td style="text-align: center">
                {{ item.name }}
              </td>
              <td style="text-align: center">
                {{ item.xs }}
              </td>
              <td style="text-align: center">
                {{ item.s }}
              </td>
              <td style="text-align: center">
                {{ item.m }}
              </td>
              <td style="text-align: center">
                {{ item.l }}
              </td>
              <td style="text-align: center">
                {{ item.xl }}
              </td>
              <td style="text-align: center">
                {{ item.xxl }}
              </td>
              <td>
                <button @click="Delete(index)">Törlés</button>
              </td>
            </tr>
            <tr v-for="n in this.pearls_count" :key="n">
              <td>
                <select name="gyongy" id="gyongy" v-model="pearl_name">
                  <option
                    v-for="item in items"
                    :key="item._id"
                    :value="item.item_name"
                  >
                    {{ item.item_name }}
                  </option>
                </select>
              </td>
              <td>
                <input v-model="pearl_xs" type="number" min="0" />
              </td>
              <td>
                <input v-model="pearl_s" type="number" min="0" />
              </td>
              <td>
                <input v-model="pearl_m" type="number" min="0" />
              </td>
              <td>
                <input v-model="pearl_l" type="number" min="0" />
              </td>
              <td>
                <input v-model="pearl_xl" type="number" min="0" />
              </td>
              <td>
                <input v-model="pearl_xxl" type="number" min="0" />
              </td>
              <td>
                <button @click="addPearl()">Mentés</button>
              </td>
            </tr>
          </table>
          <div class="flex">
            <p
              class="add_p"
              v-if="this.pearls_count < 1"
              v-on:click="this.pearls_count += 1"
            >
              + gyöngy
            </p>
          </div>
        </div>
        <div>
          <div class="updateimg_b">  
            <input
              type="file"
              id="file1"
              ref="file1"
              @change="handleFileUpload1()"
            />
            <img class="prodimg" v-if="p_prod.image" :src="imgurl + p_prod.image" />
          </div>
          <div class="updateimg_b">  
            <input
              type="file"
              id="file2"
              ref="file2"
              @change="handleFileUpload2()"
            />
            <img class="prodimg" v-if="p_prod.image2" :src="imgurl + p_prod.image2" />
          </div>
          <div class="updateimg_b">  
            <input
              type="file"
              id="file3"
              ref="file3"
              @change="handleFileUpload3()"
            />
            <img class="prodimg" v-if="p_prod.image3" :src="imgurl + p_prod.image3" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="btn_w">
      <button class="btn gray" @click="moreopen = !moreopen">Mégse</button>
      <button class="btn yellow" @click="update()">Módósítás</button>
      <button class="btn red" @click="Deleteproduct()">Törlés</button>
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
.updateimg_b{
  margin-top: 0.7rem;
  margin-bottom: 0.5rem;
  display: flex;
}
.updateimg_b img{
  border-radius: 10px;
}
.prodimg {
  width: 60px;
}
.click {
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

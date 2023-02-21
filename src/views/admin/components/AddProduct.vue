<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        prod_name: "",
        prod_collection: "",
        prod_price: 0,
        prod_description: "",
        prod_categ: "",
        prod_colors: [],
        prod_pears: [],
      },
      file1: "",
      file2: "",
      file3: "",
      collections: [],
      items: [],
      pearls_count: 0,

      saved_pearls: [],
      pearl_name: "",
      pearl_xs: 0,
      pearl_s: 0,
      pearl_m: 0,
      pearl_l: 0,
      pearl_xl: 0,
      pearl_xxl: 0,
      api_result: null,
    };
  },
  methods: {
    submitFile() {
      let formData1 = new FormData();
      let formData2 = new FormData();
      let formData3 = new FormData();
      formData1.append("file", this.file1);
      formData2.append("file", this.file2);
      formData3.append("file", this.file3);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/add/" +
            this.form.prod_name +
            "/" +
            this.form.prod_collection +
            "/" +
            this.form.prod_price +
            "/" +
            this.form.prod_description +
            "/" +
            this.form.prod_categ +
            "/" +
            this.form.prod_colors,
          JSON.stringify(this.saved_pearls),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg1/" +
            this.form.prod_name,
          formData1,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg2/" +
            this.form.prod_name,
          formData2,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/addimg3/" +
            this.form.prod_name,
          formData3,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      this.form.prod_categ = null;
      this.form.prod_name = null;
      this.form.prod_price = null;
      this.form.prod_description = null;
      this.form.prod_collection = null;
      this.saved_pearls = [];
    },
    handleFileUpload1() {
      this.file1 = this.$refs.file1.files[0];
    },
    handleFileUpload2() {
      this.file2 = this.$refs.file2.files[0];
    },
    handleFileUpload3() {
      this.file3 = this.$refs.file3.files[0];
    },
    addPearl() {
      this.saved_pearls.push({
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
    Delete(index) {
      this.saved_pearls.splice(index, 1);
    },
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/collections/getall")
      .then((response) => (this.collections = response.data));

    axios
      .get(import.meta.env.VITE_API_URL + "/inventory/getall")
      .then((response) => (this.items = response.data));
  },
};
</script>

<template>
  <section class="addprod">
    <form v-on:submit.prevent="submitForm">
      <div class="inputs_wrapper">
        <div class="left_inputs">
          <label for="">Neve</label>
          <input
            type="text"
            v-model="form.prod_name"
            placeholder="Termék neve"
          />
          <br />
          <label for="">Ára</label>
          <input
            type="text"
            placeholder="Termék ára"
            v-model="form.prod_price"
          />
          <br />
          <label for="">Leírása</label>
          <textarea
            v-model="form.prod_description"
            placeholder="Termék leírása"
            cols="30"
            rows="4"
          ></textarea>
          <br />
          <label for="kollekcio">Kollekció</label>
          <select
            name="kollekcio"
            id="kollekcio"
            v-model="form.prod_collection"
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
          <label for="Neme">Kategória</label>
          <select name="Neme" id="Neme" v-model="form.prod_categ">
            <option disabled selected>Termék neme</option>
            <option value="female">Női</option>
            <option value="male">Férfi</option>
            <option value="unisex">Férfi és Női</option>
            <option value="couple">Páros</option>
            <option value="set">Szett</option>
          </select>
          <br />
          <label for="colors">Színei</label>
          <select name="colors" id="colors" multiple v-model="form.prod_colors">
            <option disabled selected>Termék színei</option>
            <option value="white">fehér</option>
            <option value="black">fekete</option>
            <option value="gray">szürke</option>
            <option value="blue">kék</option>
            <option value="red">piros</option>
            <option value="green">zöld</option>
            <option value="brown">barna</option>
            <option value="yellow">sárga</option>
            <option value="purple">lila</option>
            <option value="pink">rózsaszín</option>
          </select>
        </div>
        <div class="right_inputs">
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
              <tr v-for="(item, index) in this.saved_pearls" :key="index">
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
          <div class="file_w">
            <input
              type="file"
              id="file1"
              ref="file1"
              @change="handleFileUpload1($event)"
            />
            <input
              type="file"
              id="file2"
              ref="file2"
              @change="handleFileUpload2($event)"
            />
            <input
              type="file"
              id="file3"
              ref="file3"
              @change="handleFileUpload3($event)"
            />
          </div>
        </div>
      </div>
      <div class="submit_wrapper">
        <input type="submit" value="Termék mentése" v-on:click="submitFile()" />
        <h2>{{ this.api_result }}</h2>
      </div>
    </form>
  </section>
</template>

<style scoped>
.pears-t {
  border: 1px solid black;
  border-collapse: collapse;
}
td input {
  width: 50px;
}
.addprod {
  padding-bottom: 1rem;
  position: relative;
  top: -8rem;
  width: 100%;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
}
.inputs_wrapper {
  display: flex;
}
.submit_wrapper {
  text-align: center;
}
.left_inputs {
  width: 50%;
  padding: 1rem;
}
.left_inputs input,
select,
textarea {
  width: 100%;
  border: none;
  background-color: rgba(255, 160, 122, 0.436);
  padding: 10px;
  border-radius: 20px;
}
.right_inputs {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}
.flex {
  z-index: 20;
  display: flex;
  gap: 5px;
}
.file_w {
  background-color: rgba(255, 160, 122, 0.436);
  width: 90%;
  height: 25%;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.pearls_t_w {
  background-color: rgba(255, 160, 122, 0.436);
  width: 90%;
  height: 63%;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
}
.add_p {
  background-color: lightsalmon;
  border-radius: 10px;
  padding: 5px;
}
.submit_wrapper input {
  background-color: lightsalmon;
  border: none;
  padding: 5px;
  border-radius: 40px;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 10pt;
  text-transform: uppercase;
}
label {
  position: relative;
  left: 0.5rem;
  font-size: 9pt;
}

@media only screen and (max-width: 900px) {
  .inputs_wrapper {
    display: block;
  }
  td input {
    width: 20px;
  }
  .left_inputs {
    width: 100%;
  }
  .right_inputs {
    width: 100%;
  }
  .left_inputs input,
  select,
  textarea {
    margin-bottom: 5px;
  }
  .submit_wrapper input {
    margin: 0.8rem;
    font-size: 9pt;
  }
}
</style>

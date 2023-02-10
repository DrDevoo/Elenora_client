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
      file: "",
      collections: [],
      items: [],
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
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
            this.form.prod_colors +
            "/" +
            this.form.prod_pears,
          formData,
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
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
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
          <label for="Neme">Kategória</label>
          <select name="Neme" id="Neme" v-model="form.prod_gender">
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
            <option
              v-for="item in items"
              :key="item._id"
              :value="item.item_name"
            >
              {{ item.item_name }}
            </option>
          </select>
        </div>
        <div class="right_inputs">
          <div>
            <input
              type="file"
              id="file"
              ref="file"
              @change="handleFileUpload($event)"
            />
          </div>
        </div>
      </div>
      <div class="submit_wrapper">
        <input type="submit" value="Termék mentése" v-on:click="submitFile()" />
      </div>
    </form>
  </section>
</template>

<style scoped>
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
}
.right_inputs div {
  background-color: rgba(255, 160, 122, 0.436);
  width: 90%;
  height: 90%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
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

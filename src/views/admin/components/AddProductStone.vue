<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        prod_name: "",
        prod_price: 0,
      },
      file1: "",
      api_result: null,
    };
  },
  methods: {
    submitFile() {
      let formData1 = new FormData();
      formData1.append("file", this.file1);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/products/add/stone/" +
            this.form.prod_name +
            "/" +
            this.form.prod_price,
          JSON.stringify(this.form),
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
            "/products/addimg/stone/" +
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
          alert("Sikeres Kavics termék mentés!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      this.form.prod_name = null;
      this.form.prod_price = null;
    },
    handleFileUpload1() {
      this.file1 = this.$refs.file1.files[0];
    },
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
        </div>
        <div class="right_inputs">
          <div class="file_w">
            <input
              type="file"
              id="file1"
              ref="file1"
              @change="handleFileUpload1($event)"
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

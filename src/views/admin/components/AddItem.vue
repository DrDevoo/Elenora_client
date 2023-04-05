<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        item_name: "",
        item_quatity: 0,
      },
    };
  },
  methods: {
    submitItem() {
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/inventory/add/" +
            this.form.item_name +
            "/" +
            this.form.item_quatity,
          this.form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function () {
          console.log("SUCCESS!!");
          alert("Sikeres készlet mentés!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
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
          <input type="text" v-model="form.item_name" placeholder="Neve" />
        </div>
        <div class="right_inputs">
          <label for="">Darabszám</label>
          <input
            type="number"
            v-model="form.item_quatity"
            placeholder="Darabszám"
          />
        </div>
      </div>
      <div class="submit_wrapper">
        <input type="submit" value="Anyag mentése" v-on:click="submitItem()" />
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
input {
  width: 100%;
  border: none;
  background-color: rgba(255, 160, 122, 0.436);
  padding: 10px;
  border-radius: 20px;
}
.right_inputs {
  width: 50%;
  padding: 1rem;
}
.right_inputs div {
  background-color: rgba(255, 160, 122, 0.436);
  width: 90%;
  height: 90%;
  padding: 1rem;
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
  input,
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

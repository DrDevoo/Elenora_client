<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        collection_name: "",
        collection_type: "",
        collection_gender: "",
      },
      data: JSON.stringify(this.form),
    };
  },

  methods: {
    submitSave() {
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/collections/add/" +
            this.form.collection_name +
            "/" +
            this.form.collection_type +
            "/" +
            this.form.collection_gender,
          this.data
        )
        .then(function () {
          console.log("SUCCESS!!");
          alert("Sikeres kollekció mentés!")
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <section class="addcolection">
    <form v-on:submit.prevent="submitForm">
      <div class="input_wrapper">
        <div>
          <label for="">Neve</label>
          <input
            type="text"
            v-model="form.collection_name"
            placeholder="Kollekció neve"
          />
        </div>
        <div>
          <label for="">Típusa</label>
          <select name="" id="" v-model="form.collection_type">
            <option disabled selected>Kollekció típusa</option>
            <option value="bracelet">karkötő</option>
            <option value="keychain">kulcstartó</option>
          </select>
          <label for="">Neme</label>
          <select name="" id="" v-model="form.collection_gender">
            <option disabled selected>Kollekció neme</option>
            <option value="female">Női</option>
            <option value="male">Férfi</option>
            <option value="unisex">Férfi és Női</option>
            <option value="couple">Páros</option>
          </select>
        </div>
      </div>
      <div class="submit_wrapper">
        <input
          type="submit"
          value="Kollekció mentése"
          v-on:click="submitSave()"
        />
      </div>
    </form>
  </section>
</template>

<style scoped>
.addcolection {
  padding: 1rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  position: relative;
  top: -8rem;
  width: 100%;
}
.input_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 5px;
}
.input_wrapper input,
select {
  width: 100%;
  border: none;
  background-color: rgba(255, 160, 122, 0.436);
  padding: 10px;
  border-radius: 20px;
}
.submit_wrapper {
  text-align: center;
}
.submit_wrapper input {
  background-color: lightsalmon;
  border: none;
  padding: 5px;
  border-radius: 40px;
  width: 150px;
  height: 30px;
  color: white;
  font-size: 9pt;
  text-transform: uppercase;
}
label {
  position: relative;
  left: 0.5rem;
  font-size: 9pt;
}
@media only screen and (max-width: 900px) {
  .input_wrapper {
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

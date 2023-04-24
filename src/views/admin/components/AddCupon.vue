<script>
import axios from "axios";
export default {
  name: "PostFormAxios",
  data() {
    return {
      form: {
        cupon_name: "",
        cupon_value: 0,
      },
      data: JSON.stringify(this.form),
    };
  },

  methods: {
    submitSave() {
      axios
        .post(
          import.meta.env.VITE_API_URL +
          "/cupons/add/" +
            this.form.cupon_name +
            "/" +
            this.form.cupon_value,
          this.data
        )
        .then(function () {
          console.log("SUCCESS!!");
          alert("Sikeres kupon mentés!")
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
            v-model="form.cupon_name"
            placeholder="Kupon neve"
          />
        </div>
        <div>
          <label for="">Százaléka</label>
            <input
            type="number"
            v-model="form.cupon_value"
            placeholder="Kupon százaléka"
          />
        </div>
      </div>
      <div class="submit_wrapper">
        <input
          type="submit"
          value="Kupon mentése"
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
label{
  position: relative;
  left: 0.5rem;
  font-size: 9pt;
}
@media only screen and (max-width: 900px) {
  .input_wrapper{
    display: block;
  }
  .left_inputs{
    width: 100%;
  }
  .right_inputs{
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

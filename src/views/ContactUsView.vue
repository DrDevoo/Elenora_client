<script setup>
import Header from "../components/Header.vue";
import Loader from "../components/Loader.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
</script>
<script>
export default {
  name: "GetCollections",
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        text: "",
      },
      loading: false,
    };
  },
  methods: {
    send() {
      this.loading = true;
      console.log("Panasz kuldese...");
      axios
        .post(
          import.meta.env.VITE_API_URL + "/newsletter/addmail",
          JSON.stringify(this.form),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          this.loading = false;
        })
        .catch(function () {
          console.log("FAILURE!!");
          this.loading = false;
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: 300;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  width: 95%;
}
a {
  text-decoration: none;
  color: lightsalmon;
}
section {
  align-items: center;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
input {
  border-radius: 5px;
  padding-left: 10px;
  width: 90%;
  height: 40px;
  border: none;
  background-color: rgba(128, 128, 128, 0.218);
}
textarea {
  border-radius: 5px;
  padding-left: 10px;
  width: 90%;
  height: 80px;
  border: none;
  background-color: rgba(128, 128, 128, 0.218);
}
.btn {
  border-radius: 5px;
  padding-left: 10px;
  width: 50%;
  height: 40px;
  border: none;
  font-size: 15pt;
  background-color: lightsalmon;
  transition: all 1s;
  color: white;
}
.btn:hover {
  box-shadow: 0px 0px 10px black;
}

input::placeholder,
textarea::placeholder {
  color: black;
}
</style>

<template>
  <Header />
  <main>
    <section>
      <h1>Segítünk!</h1>
      <p>
        Rendelésekkel, termékekkel, visszaküldéssel kapcsolatos kérdéseid
        e-mailben tudjuk fogadni az alábbi elérhetőségen:
        <a href="mail:info@elenora.hu">informacio@elenora.hu</a>
      </p>
      <p>
        Mielőtt írsz nekünk, kérlek olvasd el a
        <RouterLink to="/gyik"><b>Fizetés és Szállítás,</b></RouterLink>
        valamint a
        <RouterLink to="/gyik"><b>Gyakran Ismételt Kérdések</b></RouterLink>
        (GY.I.K.) oldalt, ahol összegyűjtve találod a leggyakoribb kérdéseket és
        válaszokat.
      </p>
    </section>
    <section>
      <b>Írj nekünk itt!</b>
      <input type="text" placeholder="Vezetéknév" v-model="form.firstname" />
      <input type="text" placeholder="Keresztnév" v-model="form.lastname" />
      <input type="text" placeholder="E-mail" v-model="form.email" />
      <textarea
        cols="30"
        rows="15"
        placeholder="Miben segíthetünk?"
        v-model="form.text"
      />
      <button v-if="loading" class="btn"><Loader /></button>
      <button v-if="!loading" @click="send()" class="btn">Küldés</button>
    </section>
  </main>
  <Footer />
</template>

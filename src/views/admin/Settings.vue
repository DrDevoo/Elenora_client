<script setup>
import Header from "./components/Header.vue";
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      showAdd: false,
      siteStatus: null,
      siteText: null,
    };
  },
  methods: {
    saveStatus() {
      if (confirm("Biztos átállítod az oldal státuszát?")) {
        axios.get(
          import.meta.env.VITE_API_URL +
            "/settings/update/status/" +
            this.siteStatus
        );
      }
    },
    saveText() {
      if (confirm("Biztos átállítod az oldal szövegét?")) {
        axios.get(
          import.meta.env.VITE_API_URL +
            "/settings/update/headertitle/" +
            this.siteText
        );
      }
    },
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/settings/get/header_title")
      .then((response) => (this.siteText = response.data.value));
    axios
      .get(import.meta.env.VITE_API_URL + "/settings/get/sitestatus")
      .then((response) => (this.siteStatus = response.data.value));
  },
};
</script>

<template>
  <Header />
  <h1 class="title">Oldal beállítások</h1>
  <main>
    <div class="s_b">
      <h2>Oldal megjelenése</h2>
      <select name="sitestatus" id="sitestatus" v-model="siteStatus">
        <option value="online">Nyitott (alap)</option>
        <option value="offline">Nem elérhető</option>
        <option value="wait">Nyitás előtt</option>
      </select>
      <button @click="saveStatus">Mentés</button>
    </div>
    <div class="s_b">
      <h2>Fejléc szöveg</h2>
      <input type="text" v-model="siteText" />
      <button @click="saveText">Mentés</button>
    </div>
  </main>
</template>

<style scoped>
.s_b {
  padding: 1rem;
  border-radius: 29px;
  background: #ffffff;
  box-shadow: 5px 5px 18px #bababa, -5px -5px 18px #ffffff;
  margin-bottom: 1rem;
}
.title {
  position: relative;
  top: -4rem;
  left: 0.8rem;
  text-transform: uppercase;
  font-weight: 200;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.809);
  letter-spacing: 1px;
}
main {
  padding: 1rem;
}

@media only screen and (max-width: 900px) {
}
</style>

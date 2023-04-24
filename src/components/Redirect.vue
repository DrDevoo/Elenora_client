<script setup>
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      status: "",
    };
  },
  created() {
    axios
      .get(import.meta.env.VITE_API_URL + "/settings/get/sitestatus")
      .then((response) => {
        console.log(response.data.value);
        if (response.data.value !== "online") {
          this.$router.push({
            path: "/",
          });

        }
        this.status = response.data.value
      });
  },
};
</script>

<template>
  <main v-if="status !== 'online'">
    <div class="offline_b">
      <img src="../assets/images/logo/logo.svg" />
      <h1>Valami nem stimmel...</h1>
      <p>Az oldalunk jelenleg nem elérhető, dolgozunk a megoldáson!</p>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.offline_b {
  padding: 1rem;
  border-radius: 29px;
  background: #ffffff;
  box-shadow: 5px 5px 18px #bababa, -5px -5px 18px #ffffff;
  text-align: center;
}
img {
  width: 50vw;
}
</style>

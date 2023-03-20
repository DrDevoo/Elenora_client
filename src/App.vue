<script setup>
import { RouterLink, RouterView } from "vue-router";
import WaitView from "./components/Wait.vue";
import OfflineView from "./components/Offline.vue";
</script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      status: "offline",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/settings/get/sitestatus")
      .then((response) => (this.status = response.data));
  },
};
</script>

<template>
  <RouterView v-if="status.value === 'online'" />
  <RouterView v-else-if="status.value === 'wait'" />
  <OfflineView v-else-if="status.value === 'offline'" />
</template>

<style>
*{
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(localStorage.adminaccess)
    if (localStorage.adminaccess !== "true") {
      this.$router.push({
        path: "/rgvar49wadmin",
      });
    }
  },
};
</script>

<template></template>

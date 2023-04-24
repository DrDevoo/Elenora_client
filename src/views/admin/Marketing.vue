<script setup>
import Header from "./components/Header.vue";
</script>

<script>
export default {
  data() {
    return {
      showAdd: false,
    };
  },
};
</script>

<template>
  <Header />
  <h1 class="title">Márketing</h1>
  <main>
    
  </main>
</template>

<style>
* {
  font-family: "Heebo", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

section {
  margin-bottom: 5rem;
}
.number_s_w {
  top: -5rem;
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  width: 100%;
}
.number_s_w .box {
  display: flex;
  width: 46%;
  height: 150px;
  border-radius: 29px;
  box-shadow: 5px 5px 24px #d6d6d6, -5px -5px 24px #ffffff;
  padding: 0.5rem;
}
.b1 {
  background: rgb(1, 120, 0);
  background: linear-gradient(
    120deg,
    rgba(1, 120, 0, 1) 0%,
    rgba(0, 255, 142, 1) 100%
  );
}
.b2 {
  background: rgb(156, 53, 0);
  background: linear-gradient(
    120deg,
    rgba(156, 53, 0, 1) 0%,
    rgba(255, 215, 0, 1) 100%
  );
}
.b3 {
  background: rgb(156, 0, 60);
  background: linear-gradient(
    120deg,
    rgba(156, 0, 60, 1) 0%,
    rgba(255, 0, 53, 1) 100%
  );
}
.b4 {
  background: rgb(14, 0, 255);
  background: linear-gradient(
    120deg,
    rgba(14, 0, 255, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
.number_s_w .box .data_b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  color: white;
}
.number_s_w .box .icon_b {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.number_s_w .box .icon_b .icon {
  font-size: 5rem;
  text-align: center;
  color: rgb(255, 255, 255);
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

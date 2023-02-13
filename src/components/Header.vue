<script>
import axios from "axios";
export default {
  data() {
    return {
      showMenu: false,
      showCart: false,
      header_title: "null",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/settings/get/header_title")
      .then((response) => (this.header_title = response.data));
  },
};
</script>

<template>
  <div class="info">
    <div>{{ this.header_title.value }}</div>
  </div>
  <header>
    <div class="header_wrapper">
      <div>
        <a @click="showMenu = !showMenu"
          ><ion-icon name="menu-outline"></ion-icon
        ></a>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div>
        <RouterLink to="/"
          ><img class="logo" src="../assets/images/logo/logo.svg" alt="ELENORA"
        /></RouterLink>
      </div>
      <div>
        <a href="javascript:void(0);" onclick="cartV()"
          ><ion-icon name="heart-outline"></ion-icon
        ></a>
        <a @click="showCart = !showCart"
          ><ion-icon name="bag-outline"></ion-icon
        ></a>
      </div>
    </div>
  </header>

  <section v-if="showMenu" class="menu_wrapper" id="menuBtn">
    <a @click="showMenu = !showMenu"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <br />
    <div class="menu-link-list">
      <h3 class="linktitle">Ékszerek</h3>
      <RouterLink to="/shop/women"
        ><h3 class="link">Női karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/men"
        ><h3 class="link">Férfi karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/couple"
        ><h3 class="link">Páros karkötők</h3></RouterLink
      >
      <RouterLink to="/shop/sales"
        ><h3 class="link">Akciós karkötők</h3></RouterLink
      >
      <RouterLink to="/shop"><h3 class="link">Összes karkötő</h3></RouterLink>
      <h3 class="linktitle">Kiegészítők</h3>
      <RouterLink to="/shop/accessories"
        ><h3 class="link">Kulcstartók</h3></RouterLink
      >
      <RouterLink to="/asvany-katalogus"
        ><h3 class="linktitle">Ásvány Lexikon</h3></RouterLink
      >
      <RouterLink to="/kapcsolat"
        ><h3 class="linktitle">Kapcsolat</h3></RouterLink
      >
      <RouterLink to="/gyik"><h3 class="linktitle">Gy.i.k</h3></RouterLink>
    </div>
  </section>

  <section v-if="showCart" class="cart_wrapper" id="cartBtn">
    <a @click="showCart = !showCart"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <h1>Kosár (0)</h1>
  </section>
</template>

<style scoped>
.info {
  z-index: 10;
  background-color: rgba(255, 160, 122, 0.895);
  width: 100%;
  height: 25px;
  text-align: center;
}
.info div {
  line-height: 30px;
  color: white;
  animation: roll 8s linear infinite;
  position: relative;
}
@keyframes roll {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}

.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

header {
  position: sticky;
  top: 0;
  padding: 0.5rem;
  z-index: 10;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  height: 35px;
}

header ion-icon {
  font-size: 18pt;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  color: rgb(0, 0, 0);
}

.logo {
  height: 1.5rem;
  width: 200px;
}

@media only screen and (max-width: 600px) {
  header {
    padding: 0rem;
  }

  header ion-icon {
    font-size: 16pt;
    margin-left: 0.5rem;
    color: rgb(0, 0, 0);
  }

  .logo {
    height: 1.3rem;
    width: 200px;
  }
  .info {
    z-index: 10;
    background-color: rgba(255, 160, 122, 0.895);
    width: 100%;
    height: 25px;
    text-align: center;
  }
  .info div {
    line-height: 30px;
    color: white;
    animation: roll 8s linear infinite;
    position: relative;
  }
}

.menu-link-list {
  left: 0;
  position: relative;
}
.menu_wrapper {
  position: fixed;
  height: 100vh;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.982);
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px rgba(84, 83, 83, 0.549);
  z-index: 10;

  animation-name: animMenu;
  animation-duration: 0.5s;
}
.menu_wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
  width: 100%;
}
.menu_wrapper ion-icon {
  font-size: 2rem;
  position: absolute;
}
.menu_wrapper a {
  text-decoration: none;
  color: black;
}
.menu-link-list a .link {
  position: relative;
  font-weight: 200;
  width: 90%;
  left: 2rem;
  letter-spacing: 2px;
}
.linktitle {
  position: relative;
  font-weight: 200;
  width: 90%;
  left: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
@keyframes animMenu {
  from {
    left: -400px;
  }
  to {
    left: 0;
  }
}

.cart_wrapper {
  position: fixed;
  height: 100vh;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.982);
  top: 0;
  right: 0;
  box-shadow: 0px 0px 10px rgba(84, 83, 83, 0.549);
  z-index: 10;

  animation-name: anim;
  animation-duration: 0.5s;
}

.cart_wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
  width: 100%;
}
.cart_wrapper ion-icon {
  font-size: 2rem;
  position: absolute;
}
.cart_wrapper a {
  text-decoration: none;
  color: black;
}
@keyframes anim {
  from {
    right: -400px;
  }
  to {
    right: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
      fullname: "",
    };
  },
  mounted() {
    if (localStorage.name) {
      this.fullname = localStorage.name;
    }
  },
};
</script>

<template>
  <section class="header">
    <header>
      <ion-icon
        class="ham_icon"
        name="menu-outline"
        @click="showMenu = !showMenu"
      ></ion-icon>
      <div>
        <p>{{this.fullname}}</p>
      </div>
    </header>
  </section>
  <section class="menu" v-if="showMenu">
    <a @click="showMenu = !showMenu"
      ><ion-icon class="menu_icon" name="close-outline"></ion-icon
    ></a>
    <br />
    <RouterLink to="/admin/dashboard"
      ><h3 class="link">Vezérlőpult</h3></RouterLink
    >
    <RouterLink to="/admin/orders"><h3 class="link">Rendelések</h3></RouterLink>
    <RouterLink to="/admin/products"><h3 class="link">Termékek</h3></RouterLink>
    <RouterLink to="/admin/collections"><h3 class="link">Kollekciók</h3></RouterLink>
    <RouterLink to="/admin/sales"><h3 class="link">Akciók/Kuponok</h3></RouterLink>
    <RouterLink to="/admin/inventory"><h3 class="link">Készlet</h3></RouterLink>
    <RouterLink to="/admin/settings"><h3 class="link">Beállítások</h3></RouterLink>
    <RouterLink to="/admin/mail"><h3 class="link">Hírlevél</h3></RouterLink>
    <RouterLink to="/admin/marketing"><h3 class="link">Marketing</h3></RouterLink>
  </section>
</template>

<style scoped>
.header {
  z-index: 20;
  position: sticky;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: rgb(255, 215, 199);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.524);
}
.ham_icon {
  font-size: 20pt;
}

.menu {
  width: fit-content;
  position: fixed;
  background-color: white;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 0;
  padding-left: 0.5rem;
  padding-right: 1rem;
  animation-name: animMenu;
  animation-duration: 0.5s;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
}
.menu a {
  height: 45px;
  text-decoration: none;
  color: black;
}
.menu a h3{
  line-height: 0px;
}
.menu_icon {
  font-size: 25pt;
  color: black;
}

@keyframes animMenu {
  from {
    left: -400px;
  }
  to {
    left: 0;
  }
}
</style>

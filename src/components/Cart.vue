<template>
  <section class="cart_wrapper" id="cartBtn">
    <a href="javascript:void(0);" onclick="cartV()"
      ><ion-icon name="close-outline"></ion-icon
    ></a>
    <h1>Kosár (0)</h1>
  </section>
</template>

<style scoped>
.cart_wrapper {
  display: none;
  position: fixed;
  height: 100vh;
  width: 28%;
  background-color: rgba(255, 255, 255, 0.866);
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

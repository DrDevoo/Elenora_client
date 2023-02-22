<template>
  <main>
    <div class="offline_b">
        <img src="../assets/images/logo/logo.svg" alt="">
      <h1>Valami nem stimmel...</h1>
      <p>Az oldalunk jelenleg nem elérhető, dolgozunk a megoldáson!</p>
    </div>
  </main>
</template>

<style scoped>
main{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.offline_b{
    padding: 1rem;
    border-radius: 29px;
  background: #ffffff;
  box-shadow: 5px 5px 18px #bababa, -5px -5px 18px #ffffff;
  text-align: center;
}
img{
    width: 50vw;
}
</style>

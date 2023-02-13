<template>
  <div class="body">
    <main>
      <img class="logo" src="../assets/images/logo/logo.svg" alt="" />
      <h1>Megújulunk!</h1>
      <h2>
        Hamarosan újra nyitunk és a megújult webáruházunkban várunk új
        kollekciókkal, karkötőkkel és kiegészítőkkel.
      </h2>
      <div class="clock_b">
        <p class="time" id="d">00</p>
        <p class="gap" id="">:</p>
        <p class="time" id="h">00</p>
        <p class="gap" id="">:</p>
        <p class="time" id="m">00</p>
        <p class="gap" id="">:</p>
        <p class="time" id="s">00</p>
      </div>
      <p>
        Addig is iratkozz fel hírlevelünkre, hogy ne maradj le aktuális
        kedvezményeinkről, ajánlatainkról.
      </p>
      <a href=""><p>Feliratkozom!</p></a>
    </main>
    <footer>
      <p>Kövess minket itt is:</p>
      <ion-icon name="logo-instagram"></ion-icon>
      <ion-icon name="logo-facebook"></ion-icon>
    </footer>
    <img class="layout" src="../assets/images/karkot_t.png" />
    <img class="layout2" src="../assets/images/karkot_t.png" />
  </div>
</template>

<style scoped>
* {
  text-align: center;
  color: white;
}

.body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(252, 128, 101, 0.879);
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 88vh;
  max-width: 550px;
}
footer {
  height: 60px;
  background-color: rgba(255, 255, 255, 0.495);
  width: 100%;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.858);
  display: flex;
  padding-left: 1rem;
  gap: 10px;
  align-items: center;
  position: fixed;
  bottom: 0;
}
footer ion-icon {
  font-size: 20px;
}

.clock_b {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logo {
  width: 70%;
  filter: invert();
}
h1 {
  font-weight: 200;
  font-size: 30pt;
}
.gap {
  font-size: 23pt;
  font-weight: bold;
}

.time {
  background-color: rgba(255, 255, 255, 0.271);
  border-radius: 9px;
  padding: 10px;
  font-size: 25pt;
}

a {
  text-decoration: none;
  line-height: 10px;
  position: relative;
  top: -1.3rem;
}

a p {
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.157);
  height: fit-content;
  padding: 5px;
  border-radius: 10px;
}

.layout {
  position: fixed;
  width: 400px;
  bottom: -160px;
  right: -100px;
  opacity: 0.1;
  transform: rotate(70deg);
}

.layout2 {
  position: fixed;
  width: 400px;
  top: -180px;
  left: -250px;
  opacity: 0.15;
  transform: rotate(110deg);
}
</style>

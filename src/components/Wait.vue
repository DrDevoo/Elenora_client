<script>
import axios from "axios";
export default {
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,

      hirlevel: false,
      form: {
        email: "",
        name: "",
      },
      succes: false,
    };
  },
  computed: {
    seconds: () => 1000,
    minutes: () => {
      return this._seconds * 60;
    },
    hours: () => {
      return this._minutes * 60;
    },
    days: () => {
      return this._hours * 24;
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        //0 = Januar, 1 = Februar stb...
        const end = new Date(2023, 2, 28, 12, 0, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / 86400000);
        const hours = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor((distance % 3600000) / 60000);
        const seconds = Math.floor((distance % 60000) / 1000);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },

    subscribe() {
      if (!this.form.name == "" && !this.form.email == "") {
        axios
          .post(
            import.meta.env.VITE_API_URL + "/newsletter/subscribe",
            JSON.stringify(this.form),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => (this.succes = true))
          .catch((error) => {
            console.error("There was an error!", error);
          });
      } else {
        alert("Kérlek minden mezőt tölts ki!");
      }
    },
  },
  mounted() {
    this.showRemaining();
  },
};
</script>

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
        <p class="time" id="d">{{ displayDays }}</p>
        <p class="gap" id="">:</p>
        <p class="time" id="h">{{ displayHours }}</p>
        <p class="gap" id="">:</p>
        <p class="time" id="m">{{ displayMinutes }}</p>
        <p class="gap" id="">:</p>
        <p class="time" id="s">{{ displaySeconds }}</p>
      </div>
      <p>
        Addig is iratkozz fel hírlevelünkre, hogy ne maradj le aktuális
        kedvezményeinkről, ajánlatainkról.
      </p>
      <p class="hir" @click="hirlevel = !hirlevel">Feliratkozom!</p>
    </main>
    <footer>
      <p>Kövess minket itt is:</p>
      <a href="https://instagram.com/elenora.ekszer" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
      <a href="https://www.facebook.com/elenora.ekszer" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
    </footer>
    <img class="layout" src="../assets/images/karkot_t.png" />
    <img class="layout2" src="../assets/images/karkot_t.png" />
  </div>
  <section class="hirlevel_w" v-if="hirlevel">
    <div class="hirlevel_b">
      <div v-if="!succes">
        <ion-icon
          @click="hirlevel = !hirlevel"
          style="color: black; width: 100%; text-align: left; font-size: 20pt"
          name="close-outline"
        ></ion-icon>
        <h2>
          Iratkozz fel hírlevelünkre, hogy azonnal értesűlj az új ajánlatokról!
        </h2>
        <div class="inputs">
          <input type="email" placeholder="Email" v-model="this.form.email" />
          <input type="text" placeholder="Név" v-model="this.form.name" />
          <button @click="subscribe()">Feliratkozás</button>
        </div>
      </div>
      <div v-if="succes">
        <ion-icon
          @click="hirlevel = !hirlevel"
          style="color: black; width: 100%; text-align: left; font-size: 20pt"
          name="close-outline"
        ></ion-icon>
        <h2>Sikeresen feliratkoztál a hírlevelünkre!</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hirlevel_w {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.444);
  display: flex;
  justify-content: center;
  align-items: center;
}
.hirlevel_b {
  background-color: rgba(255, 255, 255, 0.937);
  width: 80%;
  height: 60vh;
  border-radius: 20px;
  color: black;
}
.hirlevel_b h2 {
  color: black;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
}
.inputs input {
  color: black;
  width: 100%;
  max-width: 500px;
  height: 30px;
  border-radius: 10px;
  border: none;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
}
.inputs button {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  color: black;
  width: 150px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin: auto;
  border-radius: 50px;
  border: none;
  background: #ffffff;
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
}

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

.hir {
  cursor: pointer;
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

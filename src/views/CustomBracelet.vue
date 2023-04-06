<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      loading: false,
      visitstart: true,
      visitmaker: false,
      visitperarls: true,
      visittext: false,
      visitsize: false,
      key: 0,
      cart: [],

      resid: null,
      res: null,

      bracelet: {
        pearl: "arany-lavako",
        tcolor: "fekete",
        text: "ELENORA",
        size: "M",
        pearls: [
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
          "arany-lavako",
        ],
      },
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const name = "hematit";
    this.bracelet.pearl = "hematit";
    const textl = this.bracelet.text.length;
    const pnum = 21 - textl;
    const sidepnum = pnum / 2;
    let x = 0;
    for (x; x < sidepnum; x++) {
      this.bracelet.pearls[x] = name;
    }
    for (x; x < sidepnum + textl; x++) {
      this.bracelet.pearls[x] =
        this.bracelet.text.charAt(x - sidepnum) + this.bracelet.tcolor;
    }
    for (x; x < sidepnum + textl + sidepnum; x++) {
      this.bracelet.pearls[x] = name;
    }
  },
  methods: {
    start() {
      this.visitmaker = true;
      this.visitperarls = true;
      this.visitstart = false;
    },
    cpearls() {
      this.visitperarls = true;
      this.visittext = false;
      this.visitsize = false;
    },
    ctext() {
      this.visitperarls = false;
      this.visittext = true;
      this.visitsize = false;
    },
    csize() {
      this.visitperarls = false;
      this.visittext = false;
      this.visitsize = true;
    },
    pickpearl(name) {
      this.bracelet.pearl = name;
      const textl = this.bracelet.text.length;
      const pnum = 21 - textl;
      const sidepnum = pnum / 2;
      let x = 0;
      for (x; x < sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
      for (x; x < sidepnum + textl; x++) {
        this.bracelet.pearls[x] =
          this.bracelet.text.charAt(x - sidepnum) + this.bracelet.tcolor;
      }
      for (x; x < sidepnum + textl + sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
    },
    settext() {
      let test = /^[A-Za-z0-9]*$/.test(this.bracelet.text)
      if(test == false){
        alert("Csak angol ABC használhatsz!")
        this.bracelet.text = "ELENORA"
      }
      this.bracelet.text = this.bracelet.text.toUpperCase();
      const name = this.bracelet.pearl;
      this.bracelet.pearl = name;
      const textl = this.bracelet.text.length;
      const pnum = 21 - textl;
      const sidepnum = pnum / 2;
      let x = 0;
      for (x; x < sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
      for (x; x < sidepnum + textl; x++) {
        this.bracelet.pearls[x] =
          this.bracelet.text.charAt(x - sidepnum) + this.bracelet.tcolor;
      }
      for (x; x < sidepnum + textl + sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
    },
    setcolor(color) {
      this.bracelet.tcolor = color;
      this.bracelet.text = this.bracelet.text.toUpperCase();
      const name = this.bracelet.pearl;
      this.bracelet.pearl = name;
      const textl = this.bracelet.text.length;
      const pnum = 21 - textl;
      const sidepnum = pnum / 2;
      let x = 0;
      for (x; x < sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
      for (x; x < sidepnum + textl; x++) {
        this.bracelet.pearls[x] =
          this.bracelet.text.charAt(x - sidepnum) + this.bracelet.tcolor;
      }
      for (x; x < sidepnum + textl + sidepnum; x++) {
        this.bracelet.pearls[x] = name;
      }
    },
    async addtocart() {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/custom/add",
        JSON.stringify(this.bracelet),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.cart.push({
        id: res.data._id,
        name: "Egyedi ásvány karkötő",
        price: 5690,
        quantity: 1,
        sale: 0,
        img: null,
        visitno: true,
        custom: true,

        cid: res.data._id,
        pearl: res.data.pearl,
        tcolor: res.data.tcolor,
        text: res.data.text,
        size: res.data.size,
        pearls: res.data.pearls,
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.key += 1;
    },
  },
};
</script>

<style scoped>
.textbox {
  margin: auto;
  text-align: center;
  max-width: 600px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}
.startbtn {
  cursor: pointer;
  background-color: rgb(17, 17, 17);
  width: 150px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  font-size: 15pt;
  margin: auto;
  border: none;
  margin-bottom: 1rem;
}
.maker {
  border: 1px solid rgba(128, 128, 128, 0.628);
}
.menu {
  display: flex;
}
.menu .menubtn {
  width: 100%;
  border: 1px solid gray;
  padding: 1rem;
  line-height: 0px;
  text-align: center;
}
.plist {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.plist .box {
  width: 23%;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
}
.plist .box.active {
  box-shadow: 0px 0px 3px black;
}
.plist .box img {
  width: 45%;
  text-align: center;
}
h3 {
  font-weight: 300;
}
.menucontent {
  padding: 10px;
}
.nextbtn {
  cursor: pointer;
  background-color: rgb(33, 33, 33);
  width: 100px;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  font-size: 12pt;
  border: none;
}
.a {
  background-color: rgb(76, 76, 76);
  color: white;
}
.result {
  display: flex;
}
.result div {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 4.76%;
}
.result img {
  width: 100%;
}
.setcolor {
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.setcolor div {
  border: 2px solid gray;
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
.setcolor div.black {
  background-color: rgb(0, 0, 0);
}
.setcolor div.white {
  background-color: rgb(255, 255, 255);
}
.setcolor div.active {
  border: 3px solid rgb(60, 60, 60);
  box-shadow: 0px 0px 5px black;
}
.addcart {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.addcart button {
  cursor: pointer;
  background-color: rgb(33, 33, 33);
  width: 150px;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  font-size: 12pt;
  border: none;
}
.addcart h5 {
  font-size: 16pt;
  font-weight: 300;
}
</style>

<template>
  <Header :key="key" />
  <main>
    <section class="textbox">
      <h1>Tervezz egyedi felliratos karkötőt!</h1>
      <h2>Nehéz megtalálni a legjobb személyre szabott ajándékot?</h2>
      <p>
        Tervezz percek alatt gyönyörú, egyedi ásvány karkötöt magadnak, vagy
        lepj meg vele valakit! Csak válassz egy ásvány gyöngyöt, add meg a
        feliratot és adj hozzá kiegészitőket.
      </p>
    </section>
    <section v-if="visitstart">
      <button class="startbtn" @click="start()">Kezdés</button>
    </section>

    <section class="maker" v-if="visitmaker">
      <div class="result">
        <div v-for="p in bracelet.pearls">
          <img :src="'https://elenora.hu:444/getimage/' + p + '.webp'" />
        </div>
      </div>
      <div class="menu">
        <div :class="{ a: visitperarls }" class="menubtn" @click="cpearls()">
          <p>1. Gyöngy</p>
        </div>
        <div :class="{ a: visittext }" class="menubtn" @click="ctext()">
          <p>2. Felirat</p>
        </div>
        <div :class="{ a: visitsize }" class="menubtn" @click="csize()">
          <p>3. Méret</p>
        </div>
      </div>
      <div class="menucontent">
        <div v-if="visitperarls">
          <h3>Válassz ásvány gyöngyöt:</h3>
          <div class="plist">
            <div
              :class="{ active: bracelet.pearl == 'lavako' }"
              class="box"
              @click="pickpearl('lavako')"
            >
              <img src="../assets/pearls/lavako.webp" />
              <p>Lávakő</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'hematit' }"
              class="box"
              @click="pickpearl('hematit')"
            >
              <img src="../assets/pearls/hematit.webp" />
              <p>Heamtit</p>
            </div>

            <div
              :class="{ active: bracelet.pearl == 'arany-lavako' }"
              class="box"
              @click="pickpearl('arany-lavako')"
            >
              <img src="../assets/pearls/arany-lavako.webp" />
              <p>Arany lávakő</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'feher-lavako' }"
              class="box"
              @click="pickpearl('feher-lavako')"
            >
              <img src="../assets/pearls/feher-lavako.webp" />
              <p>Arany lávakő</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'howlit' }"
              class="box"
              @click="pickpearl('howlit')"
            >
              <img src="../assets/pearls/howlit.webp" />
              <p>Howlit</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'karneol' }"
              class="box"
              @click="pickpearl('karneol')"
            >
              <img src="../assets/pearls/karneol.webp" />
              <p>Karneol</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'kek-jade' }"
              class="box"
              @click="pickpearl('kek-jade')"
            >
              <img src="../assets/pearls/kek-jade.webp" />
              <p>Kék jáde</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'kek-regalit' }"
              class="box"
              @click="pickpearl('kek-regalit')"
            >
              <img src="../assets/pearls/kek-regalit.webp" />
              <p>Kék regalit</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'kek-tigrisszem' }"
              class="box"
              @click="pickpearl('kek-tigrisszem')"
            >
              <img src="../assets/pearls/kek-tigrisszem.webp" />
              <p>Kék tigrisszem</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'lepidolit' }"
              class="box"
              @click="pickpearl('lepidolit')"
            >
              <img src="../assets/pearls/lepidolit.webp" />
              <p>Lepidolit</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'lila-regalit' }"
              class="box"
              @click="pickpearl('lila-regalit')"
            >
              <img src="../assets/pearls/lila-regalit.webp" />
              <p>Lila regalit</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'malyva-lavako' }"
              class="box"
              @click="pickpearl('malyva-lavako')"
            >
              <img src="../assets/pearls/malyva-lavako.webp" />
              <p>Mályva lávakő</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'matt-barack-aventurin' }"
              class="box"
              @click="pickpearl('matt-barack-aventurin')"
            >
              <img src="../assets/pearls/matt-barack-aventurin.webp" />
              <p>Matt barack aventurin</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'matt-feher-jade' }"
              class="box"
              @click="pickpearl('matt-feher-jade')"
            >
              <img src="../assets/pearls/matt-feher-jade.webp" />
              <p>Matt fehéér jáde</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'matt-fekete-achat' }"
              class="box"
              @click="pickpearl('matt-fekete-achat')"
            >
              <img src="../assets/pearls/matt-fekete-achat.webp" />
              <p>Matt fekete achát</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'matt-szurke-kepjaspis' }"
              class="box"
              @click="pickpearl('matt-szurke-kepjaspis')"
            >
              <img src="../assets/pearls/matt-szurke-kepjaspis.webp" />
              <p>Matt szürke képjáspis</p>
            </div>
            <div
              :class="{ active: bracelet.pearl == 'rozsakvarc' }"
              class="box"
              @click="pickpearl('rozsakvarc')"
            >
              <img src="../assets/pearls/rozsakvarc.webp" />
              <p>Rózsakvarc</p>
            </div>
          </div>
          <button class="nextbtn" @click="ctext">Következő</button>
        </div>
        <div v-if="visittext">
          <h3>Mi legyen az egyedi szöveg?</h3>
          <input
            type="text"
            maxlength="15"
            v-model="bracelet.text"
            v-on:change="settext()"
          />
          <label for="">Max 15 karakter</label>

          <div class="setcolor">
            <p>Betűk színe:</p>
            <div
              :class="{ active: bracelet.tcolor == 'fekete' }"
              class="black"
              @click="setcolor('fekete')"
            ></div>
            <div
              :class="{ active: bracelet.tcolor == 'feher' }"
              class="white"
              @click="setcolor('feher')"
            ></div>
          </div>
          <!--
          <div>
            <p>Addj hozzá kiegészítőket:</p>
          </div>
          <p>
            Írd be a szöveget amit szeretnél a karkötőben látni. Válassz hozzáá
            kiegészitőket tetszőleges helyre. A kiegészitőket bárhová teheted,
            csak helyezd oda a szövegben a kurzort. A szövegmezőben tudod
            szerkeszteni és törölni a kiegészítőket is.
          </p>
          -->
          <button class="nextbtn" @click="csize">Következő</button>
        </div>
        <div v-if="visitsize">
          <h3>Válaszd ki a megfelelő méretet:</h3>
          <select v-model="bracelet.size" class="size_b">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <div class="addcart">
            <button @click="addtocart">Kosárba rakom</button>
            <h5>5690 Ft</h5>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

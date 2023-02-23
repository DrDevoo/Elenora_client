<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      showB1: false,
      showB2: false,
      showB3: false,
      showB4: false,
      showB5: false,
      showB6: false,
      showB7: false,
      showB8: false,
      showB9: false,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-weight: 300;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  width: 95%;
  text-align: justify;
}

.gyik-s {
  position: relative;
  top: 2rem;
  width: 100%;
}
.gyik-b {
  position: relative;
  top: 0;
  width: 90%;
  margin: auto;
  margin-bottom: 0.5rem;
}
.gyik-b .title-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: white;
}
.gyik-b .text-b {
  z-index: -1;
  position: relative;
  top: 0rem;
  animation: slidedown 0.7s ease;
  height: fit-content;
}

@keyframes slidedown {
  from {
    top: -3.5rem;
  }
  to {
    top: 0rem;
  }
}

.downarrow {
  animation: scrollarr 0.3s linear;
}
@keyframes scrollarr {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

<template>
  <Header />
  <main>
    <h1>Gyakran ismételt kérdések</h1>
    <section class="gyik-s">
      <div class="gyik-b">
        <div @click="showB1 = !showB1" class="title-b">
          <h4>Mikor érkezik meg a rendelésem?</h4>
          <ion-icon v-if="!showB1" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB1"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB1" class="text-b">
          <p>A 13 óráig beérkezett rendeléseket hétköznapokon még aznap, a 13 óra utáni rendeléseket pedig a következő napon postázzuk. A szállítási idő általában 1-3 munkanap. Ha most leadod a rendelésed, akkor lehet, hogy már kedden, de valószínűleg legkésőbb pénteken megérkezik a csomagod.</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB2 = !showB2" class="title-b">
          <h4>Kell regisztrálnom a vásárláshoz?</h4>
          <ion-icon v-if="!showB2" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB2"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB2" class="text-b">
          <p>Vásárláshoz nem kell regisztrálni.</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB3 = !showB3" class="title-b">
          <h4>Hogyan tudok vásárolni?</h4>
          <ion-icon v-if="!showB3" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB3"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB3" class="text-b">
          <p>A kiválasztott termékre kattintva eljutsz az adott termék oldalára. Válaszd ki a méretet, majd kattints a Kosárba teszem gombra. Megjelenik azáltal a kosarad, melyben ellenőrizheted a kiválasztott termékeket. Kattints a Pénztár gombra, ahol részletezve láthatod a kosaradat. A Tovább a szállítási módokhoz gombra kattintva töltsd ki az adatokat, válassz szállítási módot. Kattints a tovább a számlázási adatokhoz. Itt a számlán lévő adatokat kell megadnod. Válazd ki a fizetési módot. A rendelés összegzése gombra kattintva láthatod a rendelésed adatait. Fogadd el a GDPR és ÁSZF feltételeit. Kattints a megrendelés elküldése gombra, és kész is van a rendelésed. Rendelés leadás után a termékedet elkészítjük, 1-4 munkanapon belül a kiválasztott módon eljuttatjuk hozzád.</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB4 = !showB4" class="title-b">
          <h4>Milyen fizetési módok közül választhatok?</h4>
          <ion-icon v-if="!showB4" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB4"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB4" class="text-b">
          <p>A következő fizetési módok közül lehet választani:
Kártyás fizetés (Barion)
Banki átutalás
Utánvét, fizetés a futárnál (+ 890 Ft)</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB5 = !showB5" class="title-b">
          <h4>Mennyibe kerül a szállítás?</h4>
          <ion-icon v-if="!showB5" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB5"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB5" class="text-b">
          <p>A szállítás ára függ a szállítás módjától. A GLS csomagpont választása esetében a szállítás 990 Ft, a GLS futárszolgálat ára pedig 1 290 Ft. A 10 000 Ft feletti rendelések esetében a szállítás ingyenes!</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB6 = !showB6" class="title-b">
          <h4>Hogyan tudom visszaküldeni/kicserélni a termékeket?</h4>
          <ion-icon v-if="!showB6" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB6"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB6" class="text-b">
          <p>A terméket az átvétel napjától számított 30 napig vissza küldheted, amennyiben nem tetszik, meggondoltad magad. Termék hiba esetén a 30 napos garanciális időn belül küld vissza a terméket részünkre. Javítjuk a terméket, majd kiszállítjuk számodra. Ebben az esetben díj mentes a javítás és a szállítás. Amennyiben nem adtál meg jó méretet, küld vissza a terméket nekünk. Javítjuk a mérethibát, majd a szállítási költséget kifizetve vissza küldjük a terméket.</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB7 = !showB7" class="title-b">
          <h4>Hogyan kaphatok visszatérítést?</h4>
          <ion-icon v-if="!showB7" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB7"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB7" class="text-b">
          <p>Garanciális időn belül küld vissza a terméket a címünkre (Budapest, 1193 Szigligeti utca 1, 9/26), ezt követően a vásárlás teljes költségét vissza utaljuk részedre. Ebben az esetben vedd fel velünk a kapcsolatot.</p>
        </div>
      </div>

      <div class="gyik-b">
        <div @click="showB8 = !showB8" class="title-b">
          <h4>Honnan tudom, mi a méretem?</h4>
          <ion-icon v-if="!showB8" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB8"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB8" class="text-b">
          <p>A méret segédletet az alábbi oldalon találod: </p>
        </div>
      </div>
      <div class="gyik-b">
        <div @click="showB9 = !showB9" class="title-b">
          <h4>Mi van, ha nem lesz jó a méret?</h4>
          <ion-icon v-if="!showB9" name="chevron-up-outline"></ion-icon>
          <ion-icon
            v-if="showB9"
            class="downarrow"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
        <div v-if="showB9" class="text-b">
          <p>Ne aggódj, ha túl szűk, vagy túl nagy lett a karkötő, mert ingyen kicseréljük neked, akár többször is ha szükséges! Egyébként ritkán szokott gond lenni a mérettel, mert a karkötő könnyen nyúlik, ezért 1-2 centi eltéréssel is kényelmes lehet. Mérethiba csere esetén csak küldd vissza nekünk a karkötőt, csomagolás nélkül egy borítékba és mi visszapostázzuk neked a megfelelő méretben.</p>
        </div>
      </div>
    </section>
    <p>Ha további kérdésed van, írj egy emailt az info@elenora.hu email címünkre és szívesen válaszolunk!</p>
  </main>
  <Footer />
</template>

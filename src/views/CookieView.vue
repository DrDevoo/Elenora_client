<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
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
a{
  text-align: left;
  color: lightsalmon;
  text-decoration: none;
}
</style>

<template>
  <Header />
  <main>
    <h1>COOKIE-K (SÜTIK) KEZELÉSE</h1>
    <h3>Mik a cookie-k?</h3>
    <p>
      A cookie, vagyis süti egy olyan fájl (egy adatsor), amit a weboldal
      látogatójának számítógépén, mobiltelefonján vagy egyéb, internetes
      hozzáférést biztosító eszközén hozhat létre a weboldalt megjelenítő
      program. A cookie-t a webszerver küldi a látogató böngészőjének, majd a
      böngésző visszaküldi a szervernek. A sütik kizárólag adatokat
      tartalmaznak, vagyis nem tartalmaznak futtatható állományokat, vírusokat,
      illetve kémprogramokat (spyware) és nem férnek hozzá a felhasználó
      merevlemezének adataihoz. (A süti egy kódolt adatsor, egy elérési útvonal,
      ami csak az adott szerverrel együtt értelmezhető. Magát a felhasználó
      adatait a szerver tárolja, nem a süti. (Minden weboldal használ sütiket.))
    </p>
    <h3>Mire használhatók a sütik?</h3>
    <p>
      A sütik által küldött információk segítségével az internetböngészők
      könnyebben felismerhetők, így a felhasználók releváns és személyre szabott
      tartalmat kapnak. A cookie-k kényelmesebbé teszik a böngészést, értve ez
      alatt az online adatbiztonsággal kapcsolatos igényeket. A sütik
      segítségével a weboldalak üzemeltetői névtelen (anonim) statisztikákat is
      készíthetnek az oldallátogatók szokásairól. A kapott statisztikai
      eredményeket felhasználva tudjuk az oldal szerkezetét és tartalmát az
      igényeknek megfelelően alakítani, mindezt a felhasználók anonimitásának
      megőrzése mellett. A Weboldalon olyan funkciók is találhatók, amelyek
      technikai okok miatt nem is tudnak sütik nélkül működni, ilyen például a
      kosár, illetve a kedven termékek listájának a kezelése.
    </p>
    <h3>Sütik törlése</h3>
    <p>
      A sütiket a használt böngészőprogramokban lehet törölni vagy letiltani. A
      böngészők alapértelmezett módon engedélyezik a sütik elhelyezését. Ezt a
      böngésző beállításainál lehet letiltani, valamint a meglévőket törölni.
      Mindemellett beállítható az is, hogy a böngésző értesítést küldjön a
      felhasználónak, amikor sütit küld az eszközre. Fontos hangsúlyozni
      azonban, hogy ezen fájlok letiltása vagy korlátozása rontja a böngészési
      élményt, valamint hiba jelentkezhet a weboldal funkciójában is. A
      beállítási lehetőségek általában a böngésző Opciók vagy Beállítások
      menüpontjában találhatók. Mindegyik webes kereső különböző, így a
      megfelelő beállításokhoz kérjük. használja keresője Segítség menüjét,
      illetve az alábbi linkeket a sütik beállításainak módosításához:
      <ul>
        <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">Cookie settings in Internet Explorer</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies" target="_blank">Cookie settings in Firefox</a></li>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank">Cookie settings in Chrome</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank">Cookie settings in Safari</a></li>
      </ul>
    </p>
    <h3>Webáruhában használt cookie-k</h3>
    <p>A weboldal egy cookie segítségével azonosítja be a munkamenetet. Ez szükséges a kosár, a kedvenc termékek, illetve az utoljára megtekintett termékek kezeléséhez. Weboldalunkon továbbá harmadik fél által elhelyezett cookie-k is működnek. Ezek a cookie-k a biztonságos vásárlást illetve a weboldal működésének a nyomon követését szolgálják. A következő partnerek helyeznek el cookie-kat az oldalon. Részletesebb információkért kérlek kövesd a linkeket:
      <ul>
        <li><a href="https://support.google.com/analytics/answer/6004245" target="_blank">Google Analytics</a> - Weboldal orgalmának mérése</li>
        <li><a href="https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookie-Information" target="_blank">Hotjar</a> - Weboldal orgalmának mérése</li>
        <li><a href="https://www.facebook.com/policy/cookies/" target="_blank">Facebook Pixel</a> - Reklámok hatékonyságának mérése</li>
        <li><a href="https://www.barion.com/en/cookie-notice/" target="_blank">Barion Pixel</a> - Fizetés biztonságának növelése</li>
      </ul>
    </p>
    <h3>További hasznos linkek</h3>
    <p>Ha szeretne többet megtudni a sütik-ről, azok felhasználásáról:
      <ul>
        <li><a href="https://support.microsoft.com/en-us/help/260971/description-of-cookies" target="_blank">Microsoft Cookies Guide</a></li>
        <li><a href="https://www.allaboutcookies.org/" target="_blank">All ABout Cookies</a></li>
        <li><a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook Cookies</a></li>
      </ul>
      Ha kérdésed van a sütikkel kapcsolatban, írj egy emailt az informacio@elenora.hu email címünkre és mihamarabb válaszolunk!
    </p>
    <img :src="'/prodimgs/c488558954a75149b7d6210518a73fb7'" alt="nemmegy">
  </main>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped >
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

.box{
  margin: auto;
  width: 50%;
  margin-bottom: 2rem;
}
.box h1{
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.463);
}
.img_c{
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img_c img{
  width: 50px;
  height: 50px;
}
.box p{
  text-align: justify;
}

@media only screen and (max-width: 1000px) {
  .box{
  margin: auto;
  width: 85%;
  margin-bottom: 2rem;
}
}
</style>

<template>
  <Header />
  <main>
    <h1>Ásvány Lexikon</h1>
    <section>
      <div class="box">
        <h1>Lávakő</h1>
        <div class="img_c">
          <img src="../assets/pearls/lavako.webp" />
          <img src="../assets/pearls/arany-lavako.webp" />
          <img src="../assets/pearls/feher-lavako.webp" />
          <img src="../assets/pearls/malyva-lavako.webp" />
          <img src="../assets/pearls/szurke-lavako.webp" />
        </div>
        <p>
          A lávakőnek méregtelenítő és sejt-vízutánpotló hatása van. Emellett
          képes az izmokat, és a kötőszöveteket is megerősíteni, valamint a
          vérkeringésre és az idegrendszerre is erősítő hatással van. Segíti a
          tiszta gondolkodást, elűzi a pesszimista és zavaros gondolatokat.
          Biztosítani tudja az egyensúlyt a szervezetben, képes arra, hogy
          nyugtassa az idegrendszert, valamint serkenti a megújulását. A
          lávakőnek a gyógyító hatását már több ezer éve ismerjük. Az amerikai
          indiánok, az indiaiak és az ősmagyar sámánok is nagyon sok esetben
          használták ezt a követ gyógyítás céljából.  <br><br> Csillagjegyek: bak, a
          nyilas, a skorpió és a vízöntő  <br><br> Csakra: gyökércsakra
        </p>
      </div>
      <div class="box">
        <h1>Achát</h1>
        <div class="img_c">
          <img src="../assets/pearls/matt-fekete-achat.webp" />
        </div>
        <p>
          Az arab kultúra szerint az achát a viselőjüket segítik abban, hogy
          megtudják különböztetni az igaz és hamis barátokat. Szerencsekőnek
          tartják, mely ajánlott azoknak, akik nem tudnak ellenállni a
          szerencsejátékoknak. Néhány kultúra szerint a pénzt és a gazdagságot
          vonzza. Lelki gyógyhatásai közül a legkiemelkedőbb a félelmeink
          leküzdésében való segítség. Harmonizálni tudja a női és férfi
          energiákat. Az achát bélrendszeri problémák esetében kitűnő gyógymód
          lehet, mivel szabályozza az emésztést és segíti a bélflóra
          helyreállítását is. Pozitívan hat az immunrendszerre, megvéd a
          fertőzésekkel szemben. Terhesség esetén a hányinger leküzdésében
          segít, valamint a baba növekedését is segíteni tudja. <br><br> Csillagjegy:
          ikrek, rák <br><br> Csakrái: gyökércsakra, szívcsakra
        </p>
      </div>
      <div class="box">
        <h1>Aventurin</h1>
        <div class="img_c">
          <img src="../assets/pearls/zold-aventurin.webp" />
          <img src="../assets/pearls/matt-barack-aventurin.webp" />
        </div>
        <p>
          Az aventurin ásványkő az idegrendszerünkre és a szívünkre megnyugtató
          hatással bír, ezáltal megkönnyíti az elalvásunkat. Segít abban, hogy a
          mély haragunkat feloldjuk, valamint az önbizalmunk és lelkesedésünk
          növekedésében. Képes arra, hogy feloldja az érzelmi blokkjainkat, mely
          akár már gyerekkorunk óta kísér. Segít megoldást találni a
          konfliktusok ellen, valamint az igaz barátok megtalálását és azok
          megtartását. Gyógyhatásait tekintve leginkább a bőrünkre van pozitív
          hatással. Allergiák, kiütések, ekcémák, pattanások kezelésére
          alkalmazzák. Segít még leküzdeni a bélproblémákat, hasmenést és
          székrekedést kitűnően kezeli. <br><br> Csillagjegyei: bika, rák, mérleg,
          nyilas, vízöntő <br><br> Csakrái: szívcsakra
        </p>
      </div>
      <div class="box">
        <h1>Hegyikristály</h1>
        <div class="img_c">
          <img src="../assets/pearls/rozsaszin-hegyi.webp" />
          <img src="../assets/pearls/roppantott-hegyikristaly.webp" />
        </div>
        <p>
          Az ókori görögök úgy vélték, hogy a kristály örökké fagyott jég, amit
          az istenektől kaptak, emiatt nevezték el Kristallos-nak, aminek a
          jelentése: jég. A hegyi kristály az összes többi kő hatását erősíteni
          tudja, ezért is nevezik a kövek koronázatlan királyának. A kő nyugtató
          hatással bír a lélekre, emellett a szellemi kimerültségre is jó
          hatással van. Tisztítja az aurát, és erősíteni, védelmezni tudja.
          Segíteni tud a szellemi fejlődésben. A hegyi kristály minden területre
          képes hatni, segít a gyulladás csökkentésében és a fájdalom
          csillapításában is. Sokak szerint a hegyikristály a testet és a lelket
          is képes megfiatalítani. <br><br> Csillagjegyek: Mindegyik csillagjegy <br><br> Csakra:
          Minden csakrát erősít
        </p>
      </div>
      <div class="box">
        <h1>Hematit</h1>
        <div class="img_c">
          <img src="../assets/pearls/hematit.webp" />
        </div>
        <p>
          A hematit követ vérkőként emlegetik, mivel az emberek ujjait
          vérpirosra szokták festeni csiszolás során. Segít bátrabban,
          céltudatosabban mozogni a világban, ezzel javítja az életminőségünket.
          Fokozza a dinamikánkat, segít nyerni a külső befolyásokkal szemben. A
          hematitnak magas a vastartalma, emiatt nagyon hatásos a vérrel
          kapcsolatos betegségekre. Pozitívan hat a vérképre, vérszegénységre,
          valamint a vérnyomás ingadozást is ki tudja egyenlíteni.
          Érelmeszesedésre és visszerekre is használható. Hatására a vérömlenyek
          és az aranyér gyorsabban gyógyul. Fokozni tudja a test gyógyulását. A
          rendszertelen menstruációra is pozitívan hat, valamint a terhesség
          alatti fáradságot is könnyíti. <br><br> Csillagjegy: bak, vízöntő, kos, skorpió
          <br><br> Csakrái: gyökércsakra
        </p>
      </div>
      <div class="box">
        <h1>Howlit</h1>
        <div class="img_c">
          <img src="../assets/pearls/howlit.webp" />
        </div>
        <p>
          A howlitot Henry How-ról, egy 19-ik századi ásványkutatóról nevezték
          el, aki elsőkét talált rá erre a nagyon sokoldalú kőre. A howlit
          higgadtságot és türelmet képes teremteni. Ez a kő elmélyíti az önmaga
          és mások iránti szeretetet. Segít, hogy kitudjuk űzni a testi és lelki
          mérgeket, valamint önállóságra késztet. A howlit óriási segítséget ad
          a fogyókúrához, élénkíti az emésztést, méregtelenít, valamint
          erősíteni tudja a hasnyálmirigyet. Emésztési problémákban is nagyon
          sokat tud segíteni. Erősíti a csontokat, fogakat, szívet és az ereket
          is. Támogatja az ítélőképességet, erősíti a kitartást és az akaratot,
          emellett csökkenteni tudja a stresszt. <br><br> Csillagjegyek: mérleg, ikrek
          <br><br> Csakra: Napfonatcsakra, szakráliscsakra
        </p>
      </div>
      <div class="box">
        <h1>Jáde</h1>
        <div class="img_c">
          <img src="../assets/pearls/kek-jade.webp" />
          <img src="../assets/pearls/krem-jade.webp" />
          <img src="../assets/pearls/rozsaszin-jade.webp" />
          <img src="../assets/pearls/matt-feher-jade.webp" />
        </div>
        <p>
          A jáde kő a bölcsesség, a bátorság és a szerénység szimbóluma. A
          tisztaság és a nyugalom jelképeként emlegetik. Ez az ásványkő vonzza a
          szerencsét és a bátorságot is. A jáde az ész és a test egységét
          erősíti, valamint növeli tudja az önnállóságot is. Nyugtat és megvéd a
          negatív gondolatoktól, viselőjét a kreatívabb gondolkozás útjára
          tereli. Sokan az álom köveként is hivatkoznak rá, mivel nyugtató
          hatása van, könnyebb alvást eredményez. Hasznos a vesék számára,
          eltávolítja a méreganyagokat, gyógyítja a műtét utáni sebeket. Fokozza
          a termékenységet a nőknél és férfiaknál egyaránt, emelett még a
          szülésnél is nagy segítség lehet. <br><br> Csillagjegyek: Halak, Szűz, Skorpió,
          Vizöntő, Ikrek, Rák <br><br> Csakra: Szívcsakra
        </p>
      </div>
      <div class="box">
        <h1>Jáspis</h1>
        <div class="img_c">
          <img src="../assets/pearls/voros-jaspis.webp" />
          <img src="../assets/pearls/zebra-jaspis.webp" />
        </div>
        <p>
          A jáspis csökkenti a szerelmi bánatot, aktiválja a bátorságot és
          kitartást. A föld elemi erejét, bölcsességét és szeretetét tudja
          közvetíteni. Önzetlenségre, szerénységre, együttérzésre és türelemre
          késztet, valamint harmonizáló hatása is van. Kreativitást ad, emiatt
          növeli a fantáziát és támogatja az alkotóerőt. Jó hatással van a
          puffadásra és székrekedésre is egyaránt. Segít a máj, az epe és a
          hasnyálmirigy működésében. Nagyon hasznos a menstruációs fájdalmára,
          segít átvészelni azt, valamint szülési fájdalmaknál is nagy segítséget
          biztosít. Az epilepsziás rohamokat enyhíteni tudja. <br><br> Csillagjegyek:
          Mindegyik csillagjegy <br><br> Csakra: Gyökércsakra
        </p>
      </div>
      <div class="box">
        <h1>Karneol</h1>
        <div class="img_c">
          <img src="../assets/pearls/karneol.webp" />
        </div>
        <p>
          A karneol magabiztosságot, merészséget és nyitottságot ad. Segít, hogy
          nyitottabbak legyünk másokhoz, valamint, hogy jól tudjuk érezni
          magunkat a testünkben. Motivál, segít sikereket elérni, erősíti a
          belső indíttatásainkat. Szerencsétlenség ellen talizmánként
          használható. A gyomor betegségekre hatásos tud lenni, valamint a
          vérrel kapcsolatos problémákra is. Javítja a vérképet, oldani tudja a
          vérrögöket, és segít elállítani a vérzést. Javítani tudja a szervezet
          ásványi és tápanyag felvételét. Nagyon hasznos menstruációs görcsök,
          alhasi fájdalmak, miómák, ciszták esetén is. A karneol csökkenteni
          tudja a koleszterinszintet is. <br><br> Csillagjegy: kos, bika, ikrek,
          oroszlán, szűz, vízöntő <br><br> Csakrái: gyökércsakra, szakráliscsakra
        </p>
      </div>
      <div class="box">
        <h1>Lepidolit</h1>
        <div class="img_c">
          <img src="../assets/pearls/lepidolit.webp" />
        </div>
        <p>
          Fokozza önfegyelmet és aktiválja döntőképességet, így az életben
          kitűzött célokat könnyebben érhetjük el. Segít szembe nézni
          félelmekkel, leküzdeni a haragot és a stresszt. Nyugtató hatása
          éjszaka is segítségünkre lehet. Alvászavarok esetén, amelyeket a
          túlfeszített munkatempó, a stressz, vagy gyerekeknél a túlpörgés okoz,
          tökéletes választás lehet. Javítja és erősíti a kötőszövetet, hasznos
          a bőrbetegségek ellen is. Jót tesz az idegi fájdalmak, neuralgia,
          isiász ellen, segít a fertőzések kivédésében. <br><br> Csillagjegy: Mérleg
          <br><br> Csakra: koronacsakra
        </p>
      </div>
      <div class="box">
        <h1>Lápisz lazuli</h1>
        <div class="img_c">
          <img src="../assets/pearls/lapisz-lazuli.webp" />
        </div>
        <p>
          A lazuri segít abban, hogy rátalálhassunk a belső igényeinkre,
          valamint, hogy kitudjunk állni magunkért, növelve ezzel önbizalmunkat.
          A kő viselői nyitottabbá válnak, könnyebben közelednek és teremtenek
          másokkal kapcsolatot, sokkal nyitottabbak lesznek. Segít abban, hogy
          problémáinkat könnyebben feldolgozhassuk, ezáltal kiegyensúlyozottabb
          életet éljünk. A lazurit ásvány hajhullás esetén nagyon hatásos. Torok
          problémák, megfázás esetében segítséget nyújt, valamint a hallást is
          javítani tudja. A bőrkiütésekre, herpeszre is hat, valamint a
          vérnyomásra is jótékony hatással van. Enyhíteni tudja a fejfájást.
          <br><br> Csillagjegy: kos, oroszlán, szűz, nyilas, bak, halak <br><br> Csakrái:
          torokcsakra, homlokcsakra
        </p>
      </div>
      <div class="box">
        <h1>Regalit</h1>
        <div class="img_c">
          <img src="../assets/pearls/kek-regalit.webp" />
          <img src="../assets/pearls/lila-regalit.webp" />
          <img src="../assets/pearls/turkiz-regalit.webp" />
        </div>
        <p>
          A regalit tulajdonképpen tengeri üledék jáspis. Császárkőnek is
          nevezik, mert régebben a császároknak a pecséteit, gyűrűit,
          ruhadíszeit is ezzel a kővel készítették. Az uralkodók nem csak azért
          hordták, mert szépnek tartották, hanem mert úgy vélték megvédi őket az
          ellenségektől, trónfosztóktól. A regalit elnyeli a negatív energiákat,
          a pozitívat pedig többszörözi. Kitartóbbá teszi viselőjét és segít a
          céljaink megvalósításában. Bátorságot ad, segít szembenézni a
          problémákkal. <br><br> Csillagjegyek: Kos, Bika, Ikrek, Rák, Oroszlán, Szűz,
          Skorpió, Nyilas, Bak, Halak
        </p>
      </div>
      <div class="box">
        <h1>Rodonit</h1>
        <div class="img_c">
          <img src="../assets/pearls/rodonit.webp" />
        </div>
        <p>
          A rodonit ásvány élénkít, emiatt nem ajánlott használni pihenés
          esetén. Erőt ad, hogy merjünk lépni, döntéseket hozni, változtatni
          életünkön. Segít abban, hogy nyitottabbak, magabiztosabbak lehessünk.
          Képes megszűntetni a félelmet, bátorságot ad. Lelki stressz
          leküzdésében rendkívül hatásos. A rodonit a pajzsmirigyzavarok,
          autoimmun betegségek és a genetikus betegségek esetében nagy
          segítséget nyújt. Segítségével a sebek gyorsabban javulnak, a vérzések
          hamarabb elmúlnak. Erősíti a csontokat, hatásos csontritkulással
          szemben is. Méregtelenítő kúrák alkalmával javasolt. <br><br> Csillagjegy: bika
          <br><br> Csakrái: szívcsakra
        </p>
      </div>
      <div class="box">
        <h1>Rózsakvarc</h1>
        <div class="img_c">
          <img src="../assets/pearls/rozsakvarc.webp" />
        </div>
        <p>
          A rózsakvarc a szívcsakrán keresztül segít az érzelmek
          feldolgozásaiban. Segít a szerelem lelki és testi kiteljesedésében.
          Megában hordozza a termékenységet, emiatt hasznos a terméketlenség
          esetén. Segíti a kreativitásunkat, az alkotó gondolatokat. Az életben
          segít megtalálni a szépséget és a szeretetet. Védi és erősíti a
          szívet, harmonizálja a szívritmust. A bőrbetegségek, asztma, allergia
          és vérszegénység ellen tökéletes. <br><br> Csillagjegyek: bika, rák, mérleg
          <br><br> Csakra: Szívcsakra
        </p>
      </div>
      <div class="box">
        <h1>Szezámkő</h1>
        <div class="img_c">
          <img src="../assets/pearls/zold-szezamko.webp" />
        </div>
        <p>
          Már az ókorban is nagy becsben tartották a szezámkövet a szerencse
          hozó képessége miatt. Támogatja a fizikai, érzelmi és szellemi
          egészséget. Nyugtató hatása van, oldja a stresszt és kiegyensúlyozottá
          tesz. Arab kultúra szerint, aki viseli a követ, megtudja különböztetni
          a jó és rossz barátokat. Tisztítani tudja az aurát, segíti a
          spirituális fejlődést. Komolyságot és kiegyensúlyozottságot ad.
          Erősíti a bizalom érzést, életet lehel belénk. Reményt és bátorságot
          ad, segít az életcélunk elérésében, valamint harmonizálni tudja az
          energiákat. Ellenállóbbá tesz a fertőzésekkel szemben, ezáltal
          védelmet ad. Terhesség esetén enyhíti a rosszulléteket, megkönnyíti az
          áldott állapotban lévő napokat. <br><br> Csillagjegy: Ikrek, Rák <br><br> Csakrái:
          Gyökér, szív
        </p>
      </div>
      <div class="box">
        <h1>Tigrisszem</h1>
        <div class="img_c">
          <img src="../assets/pearls/tigrisszem.webp" />
        </div>
        <p>
          A tigrisszem elő tudja segíteni a tiszta szemmel való látást, hogy
          magunkat és a körülöttünk lévő világot jobban tudjuk látni. Ezzel a
          kifinomult megfigyelési képességgel könnyen tudunk döntéseket hozni és
          a felmerülő problémákat megoldani. Ez az ásványkő jól használható
          emiatt a tanulmányink során, vagy akár akkor is, mikor nehéz
          döntéseket kell meghozzunk. Képes arra hogy megfékezze a túláradó
          energiákat és ezek helyére a belső békét, és védettséget helyezi át.
          Csont és ízületerősítő hatása van, mozgásszervi merevség ellen nagyon
          hatásos. A légutakat is képes erősíteni, emiatt megfelelő a köhögés,
          meghűlés, asztma ellen is. Az idegi betegségek esetén is hatásos
          lehet. <br><br> Csillagjegyek: szűz, oroszlán, skorpió, nyilas, ikrek <br><br> Csakra:
          Napfonatcsakra
        </p>
      </div>
      <div class="box">
        <h1>Unakit</h1>
        <div class="img_c">
          <img src="../assets/pearls/unakit.webp" />
        </div>
        <p>
          Az unakit elősegíti fontos döntéseink hosszú távú következményeinek
          objektív mérlegelését. Az érzelmi kapcsolatokat képes harmonizálni.
          Párkapcsolaton belül önzetlen megközelítést tesz lehetővé, ezzel
          lehetővé teszi a harmonikus együttlétet is. Szülő-gyermek kapcsolatban
          elsimítja a generációs ellentéteket. Baráti kapcsolatokban felszínre
          tudja hozza az őszinteség igényét. Az unakit ásványkő fel tudja fedni
          a saját és embertársaink rejtett belső értékeit is. Képes irányt mutat
          belső vívódásaink megoldása felé, valamint távol tartja a tudatos
          fekete mágiát és az átkok nagy részét. Legyengíti és eltéríti a
          gonosz, ártó szándékot, bárhonnan is közelítsen felénk. <br><br> Csillagjegyek:
          ikrek <br><br> Csakra: Szívcsakra
        </p>
      </div>
    </section>
  </main>
  <Footer />
</template>

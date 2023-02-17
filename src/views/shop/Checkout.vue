<template>
  <main>
    <section class="datas_w">
      <div class="logo_w">
        <img
          class="logo"
          src="../../assets/images/logo/logo.svg"
          alt="ELENORA"
        />
      </div>
      <div class="cart_w">
        <div class="text">
          <ion-icon class="cart_icon" name="cart-outline"></ion-icon>
          <p>Tekintsd meg a kosarad tartalmát</p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div class="price">
          <b><p>2000 Ft</p></b>
        </div>
      </div>
      <div class="order_status">
        <div class="sec">
          <div class="circle active"><p class="active">1</p></div>
          <div class="title"><p>Adatok</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>2</p></div>
          <div class="title"><p>Szállítás</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>3</p></div>
          <div class="title"><p>Fizetés</p></div>
        </div>
        <div class="hr"></div>
        <div class="sec">
          <div class="circle"><p>4</p></div>
          <div class="title"><p>Összegzés</p></div>
        </div>
      </div>
      <div>
        <h3>Kapcsolattartási adatok</h3>
        <input type="text" placeholder="E-mail-cím" /> <br />
        <div class="flex">
          <input type="checkbox" />
          <p>Szeretnék értesűlni az aktuális ajánlatokról</p>
        </div>

        <h3>Szállítási cím</h3>
        <input type="text" placeholder="Utónév" /> <br />
        <input type="text" placeholder="Vezetéknév" /> <br />
        <input type="text" placeholder="Ország/régió" /> <br />
        <input type="text" placeholder="Irányítószám" /> <br />
        <input type="text" placeholder="Település" /> <br />
        <input type="text" placeholder="Épület, emelet, ajtó (nem kötelező)" />
        <br />
        <input type="text" placeholder="telefonszám" /> <br />
        <br />
        <button>Szállítási módok</button>
      </div>
    </section>

    <footer>
        <h5> Minden jog fenntartva</h5>
    </footer>
  </main>
</template>

<style scoped>
main{
    display: flex;
    flex-direction: column;
}
h3 {
  position: relative;
  left: 5%;
  font-weight: 300;
}
input {
  position: relative;
  left: 5%;
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 7px;
  border: 1px solid rgb(189, 189, 189);
  padding-left: 0.5rem;
}
button {
  position: relative;
  left: 10%;
  width: 80%;
  height: 50px;
  background-color: rgb(47, 47, 47);
  color: white;
  font-size: 14pt;
  border: none;
  border-radius: 7px;
}
.flex {
  display: flex;
}
main {
  display: flex;
  height: 100vh;
}
.logo_w {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  margin: 1rem;
  width: 250px;
}
.datas_w {
  gap: 2rem;
  padding: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.order_status {
    margin-left: 1rem;
    margin-right: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
}
.sec {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.sec .circle {
  color: lightsalmon;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 3px solid lightsalmon;
}
.active {
  background-color: lightsalmon;
  color: white;
}
.sec .title {
  color: lightsalmon;
}
.hr {
  width: 70px;
  height: 2px;
  background-color: lightsalmon;
  position: relative;
  bottom: 1.5rem;
}
.cart_w {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(237, 237, 237);
  width: 100%;
  height: fit-content;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.527);
}
.cart_w .text {
  align-items: center;
  display: flex;
  color: rgb(59, 59, 59);
}
.cart_w .price {
  align-items: center;
  display: flex;
  color: rgb(40, 40, 40);

}
.cart_icon{
    font-size: 16pt;
}

footer{
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-top: 1px solid gray;
    color: black;
}
</style>

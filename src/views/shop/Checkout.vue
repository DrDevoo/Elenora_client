<template>
    <main>
        <section class="datas_w">
            <div>
                <img class="logo" src="../../assets/images/logo/logo.svg" alt="ELENORA">
            </div>
            <div class="order_status">
                <div class="sec">
                    <div class="circle"><p>1</p></div>
                    <div class="title"><p>Adatok</p></div>
                </div>
                <div class="hr"> </div>
                <div class="sec">
                    <div class="circle"><p>2</p></div>
                    <div class="title"><p>Szallitas</p></div>
                </div>
                <div class="hr"> </div>
                <div class="sec">
                    <div class="circle"><p>3</p></div>
                    <div class="title"><p>Fizetes</p></div>
                </div>
                <div class="hr"> </div>
                <div class="sec">
                    <div class="circle"><p>4</p></div>
                    <div class="title"><p>Osszegzes</p></div>
                </div>
            </div>
            <div>

            </div>
        </section>
        <section class="cart_w">
        
        </section>
    </main>
</template>
    
<style scoped>
main{
    display: flex;
    height: 100vh;
}
.logo{
    width: 300px;
}
.datas_w{
    gap: 2rem;
    padding: 2rem;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.order_status{
    display: flex;
    align-items: center;
}
.sec{

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.sec .circle{
    color: lightsalmon;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 3px solid lightsalmon;
}
.sec .title{
    color: lightsalmon;
}
.hr{
    width: 70px;
    height: 2px;
    background-color: lightsalmon;
    position: relative;
    bottom: 1.5rem;
}
.cart_w{
    background-color: rgb(237, 237, 237);
    width: 40%;
    height: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.527);
}
</style>
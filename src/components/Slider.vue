<script>
export default {
  data() {
    return {
      delay: 3500,
      activeIndex: 0,
      handler: null,
      isPlaying: true,
    };
  },
  methods: {
    stop() {
      this.isPlaying = false;
      console.log("stop");
      clearTimeout(this.handler);
    },
    start() {
      this.isPlaying = true;
      console.log("start");
    },
    handleClick(index) {
      const slides = document.querySelectorAll(".slide");
      const buttons = document.querySelectorAll(".button");

      slides.forEach((slide) => {
        slide.classList.remove("active");

        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
      });

      this.activeIndex = index;

      slides[this.activeIndex].classList.add("active");
      buttons[this.activeIndex].classList.add("active");
    },
    autoPlay() {
      const slides = document.querySelectorAll(".slide");
      const buttons = document.querySelectorAll(".button");

      let active = document.getElementsByClassName("active");

      const repeater = () => {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active");
        });

        slides[this.activeIndex].classList.add("active");
        buttons[this.activeIndex].classList.add("active");

        this.activeIndex++;

        if (slides.length === this.activeIndex) {
          this.activeIndex = 0;
        }

        if (this.activeIndex >= slides.length) {
          return;
        }

        this.handler = setTimeout(() => {
          repeater();
        }, this.delay);
      };

      repeater();
    },
  },
  mounted() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.handleClick(index);
      });
    });

    this.autoPlay();
  },
};
</script>

<template>
  <div class="slider-wrapper">
    <div class="slides">
      <div class="slide active">
        <img src="../assets/images/webp/1.webp" />
        <h2>Páros karkötő</h2>
        <p>Oszd meg ásvány karkötődet barátoddal, pároddal</p>
      </div>
      <div class="slide">
        <img src="../assets/images/webp/v.webp" />
        <h2>Változatosság</h2>
        <p>Válassz olyan karkötőt amiben megmutatkozik a sokszínűséged</p>
      </div>
      <div class="slide">
        <img src="../assets/images/webp/3.webp" />
        <h2>Elegáns</h2>
        <p>Hordd egy ünnepélyes eseményhez, egészítse ki az öltözéked</p>
      </div>
      <div class="slide">
        <img src="../assets/images/webp/4.webp" />
        <h2>Mindennapokban</h2>
        <p>Viseld a szürke hétköznapokban, hogy feldobják a kedved</p>
      </div>
    </div>
    <div class="controls">
      <button class="button active"></button>
      <button class="button"></button>
      <button class="button"></button>
      <button class="button"></button>
    </div>
  </div>
</template>

<style scoped>
.slides {
  position: relative;
  height: 500px;
  width: 100vw;
}

.slide {
  display: flex;
  position: absolute;
  width: 100%;
  height: 500px;
  opacity: 1;
  z-index: 1;
  color: #000;
  text-align: center;
  background-color: lightsalmon;
}
.slide h2 {
  color: white;
  letter-spacing: 3px;
  font-size: 30pt;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.535));
}
.slide p {
  color: white;
  letter-spacing: 3px;
  font-size: 20pt;
  position: absolute;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.535));
  transform: translate(-50%, -50%);
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide.active {
  opacity: 1;
  z-index: 2;
  animation: slide 0.6s ease;
}

@keyframes slide {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

.controls {
  z-index: 3;
  position: relative;
  top: -2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10px;
}

.button {
  appearance: none;
  width: 1px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.54);
  outline: none;
  border: none;
  margin: 0 5px;
  border-radius: 20px;
}

.button.active {
  background-color: rgba(0, 0, 0, 0.667);
  width: 30px;
  animation: wid 0.8s ease;
}
@keyframes wid {
  from {
    width: 0px;
  }
  to {
    width: 30px;
  }
}

@media only screen and (max-width: 1000px) {
  .slide h2 {
    letter-spacing: 3px;
    font-size: 25pt;
    top: 38%;
    width: 100%;
  }
  .slide p {
    letter-spacing: 3px;
    font-size: 15pt;
    width: 95%;
    top: 50%;
  }
}
</style>

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
        <img src="../assets/images/webp/IMG_1720.webp"/>
      </div>
      <div class="slide">
        <img src="../assets/images/webp/IMG_1721.webp"/>
      </div>
      <div class="slide">
        <img src="../assets/images/webp/IMG_1746.webp"/>
      </div>
    </div>
    <div class="controls">
      <button class="button active"></button>
      <button class="button"></button>
      <button class="button"></button>
    </div>
  </div>
</template>

<style>
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
}
.slide img{
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
</style>

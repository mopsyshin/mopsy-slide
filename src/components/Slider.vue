<template>
  <div>
    <div class="btn-group">
        <button @click="toFirst">Home ↑</button>
        <button @click="prevSlide">Prev ←</button>
        <button @click="nextSlide">Next →</button>
        <button @click="toLast">Last ↓</button>
      </div>
    <div class="slider-container">
      <div class="message"
            v-for="(item, index) in slides"
            :key="index"
            :class="{
              'prev': index === currentIndex - 1,
              'active': index === currentIndex,
              'next': index === currentIndex + 1,
              }">
        <div :style="item.style">
          <p  v-for="s in item.p" :key="s.key" v-html="s"></p>
          <a :href="item.a" target="_blank">
            {{ item.a }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weworkSlides from '../slides/wework.js';

export default {
  data() {
    return {
      slides: weworkSlides,
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex += 1;
      }
    },
    toFirst() {
      let duration = 700 / this.currentIndex;
      duration = duration > 100 ? 100 : duration;
      const prev = setInterval(() => {
        if (this.currentIndex === 0) {
          clearInterval(prev);
        }
        this.prevSlide();
      }, duration);
    },
    toLast() {
      let duration = 700 / (this.slides.length - this.currentIndex);
      duration = duration > 100 ? 100 : duration;
      const next = setInterval(() => {
        if (this.currentIndex === this.slides.length - 1) {
          clearInterval(next);
        }
        this.nextSlide();
      }, duration);
    },
  },
  mounted() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (event.key === 'ArrowRight') {
        this.nextSlide();
      } else if (event.key === 'ArrowDown') {
        this.toLast();
      } else if (event.key === 'ArrowUp') {
        this.toFirst();
      }
    });
  },
};

</script>

<style>
html {
  font-size: 10px;
}
.slider-container {
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.message {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.5s all;
}
.message div {
  text-align: center;
  padding: 24px;
  transition: 0.5s all;
  font-size: 8.4rem;
  font-weight: 600;
  color: rgba(0,0,0,0.65);
  width: 100rem;
  letter-spacing: -1px;
}
.message.active, .message.next, .message.prev {
  display: flex;
}
.message.active {
  z-index: 10;
}
.message div {
}
.message.next div {
  opacity: 0;
  transform: translateX(10rem);
  filter: blur(2rem);
}
.message.prev div {
  opacity: 0;
  transform: translateX(-10rem);
  filter: blur(2rem);
}
.btn-group {
  position: fixed;
  bottom: 1.6rem;
  left: 2.4rem;
  z-index: 100;
}
.btn-group button {
  font-size: 11px;
  color: rgba(0,0,0,0.5);
  padding: 8px 12px;
  margin: 8px;
  border-radius: 24px;
  border: none;
  background-color: rgba(0,0,0,0.04);
  transition: 0.3s all;
}
.btn-group button:hover {
  background-color: rgba(0,0,0,0.08);
}
button {
  cursor: pointer;
}
button:focus {
  outline: none;
}
@media(max-width: 450px) {
  html {
    font-size: 5.5px;
  }
}
</style>

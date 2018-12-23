<template>
  <div id="app">
    <slider/>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'

export default {
  name: 'app',
  components: {
    Slider,
  }
}
</script>

<style>
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
}
body {
  background-color: rgba(0,0,0,0.08);
}
a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
* {
  font-family: Helvetica, 'Apple SD Gothic',sans-serif;
  margin: 0;
  padding: 0;
}
</style>

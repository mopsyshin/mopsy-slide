import Vue from 'vue'
import Router from 'vue-router'
import Slider from './components/Slider.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slider',
      component: Slider
    },
  ]
})

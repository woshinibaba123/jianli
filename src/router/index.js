import Vue from 'vue'
import Router from 'vue-router'
import One from '../pages/One'
import Two from '../pages/Two'
import Three from '../pages/Three'

Vue.use(Router)

export default new Router({
  // mode:history,
  routes: [
    {
      path: '/',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})

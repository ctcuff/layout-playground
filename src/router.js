import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/Grid'
import SmoothScrolling from '@/components/SmoothScrolling'
import Home from '@/components/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home'
  },
  {
    path: '/grid',
    component: Grid,
    title: 'Grid'
  },
  {
    path: '/scroll',
    component: SmoothScrolling,
    title: 'Smooth Scroll'
  }
]

const router = new Router({ routes })

export { router as default, routes }

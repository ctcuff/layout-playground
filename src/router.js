import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/Grid'
import SmoothScrolling from '@/components/SmoothScrolling'
import Home from '@/components/Home'
import Video from '@/components/Video'
import SingleElement from '@/components/SingleElement'

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
  },
  {
    path: '/video',
    component: Video,
    title: 'Video'
  },
  {
    path: '/one-div',
    component: SingleElement,
    title: 'Single Element'
  }
]

const router = new Router({
  routes: routes.sort((a, b) => a.title.localeCompare(b.title))
})

export { router as default, routes }

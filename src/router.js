import Vue from 'vue'
import Router from 'vue-router'
import Animation from '@/components/Animation'
import SmoothScrolling from '@/components/SmoothScrolling'
import Home from '@/components/Home'
import Video from '@/components/Video'
import SingleElement from '@/components/SingleElement'
import Parallax from '@/components/Parallax'
import Gradients from '@/components/Gradients'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home'
  },
  {
    path: '/animation',
    component: Animation,
    title: 'Animation'
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
  },
  {
    path: '/parallax',
    component: Parallax,
    title: 'Parallax'
  },
  {
    path: '/gradients',
    component: Gradients,
    title: 'Gradients'
  }
]

const router = new Router({
  routes: routes.sort((a, b) => a.title.localeCompare(b.title))
})

export { router as default, routes }

import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/Grid'
import SmoothScrolling from '@/components/SmoothScrolling'

Vue.use(Router)

const defaultPath = {
  path: '/',
  component: SmoothScrolling
}

export default new Router({
  routes: [
    {
      ...defaultPath
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/scroll',
      component: SmoothScrolling
    }
  ]
})

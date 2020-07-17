<template>
  <div>
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'
  import debounce from '@/util/debounce'

  export default {
    name: 'App',
    components: {
      Menu
    },
    methods: {
      updateViewport() {
        // Updates the --vh variable used in the height mixin
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    },
    mounted() {
      this.updateViewport()
      window.addEventListener('resize', debounce(this.updateViewport, 250))
    },
    destroyed() {
      window.removeEventListener('resize', this.updateViewport)
    }
  }
</script>

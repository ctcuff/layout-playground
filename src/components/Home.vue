<template>
  <div class="home">
    <header>
      <div class="no-overflow">
        <h1 data-heading>Welcome to my</h1>
        <h1 data-heading>
          <span class="text--stroke">Creative Space</span>
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
  import { gsap } from 'gsap'

  export default {
    name: 'Home',
    mounted() {
      const heading = document.querySelectorAll('[data-heading]')

      gsap.fromTo(
        heading,
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.2
        }
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/home';
</style>

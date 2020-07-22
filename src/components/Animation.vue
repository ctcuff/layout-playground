<template>
  <div class="grid">
    <div class="grid-col">
      <div class="grid-col__item" v-for="(_, index) in columns - 1" :key="index"></div>
    </div>
    <div class="bars-container">
      <div class="bar" v-for="i in columns" :key="i"></div>
    </div>
    <main></main>
  </div>
</template>

<script>
  import { gsap } from 'gsap'

  export default {
    data: () => ({
      columns: 12,
      duration: 0.4,
      ease: 'power1.out'
    }),
    mounted() {
      const bars = document.querySelectorAll('.bar')

      gsap
        .timeline()
        .fromTo(
          bars,
          {
            y: '100%'
          },
          {
            y: '0%',
            stagger: 0.1,
            ease: this.ease,
            duration: this.duration
          },
          0
        )
        .to(bars, {
          y: '-100%',
          stagger: 0.1,
          delay: 0.5,
          ease: this.ease,
          duration: this.duration
        })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/animation';
</style>

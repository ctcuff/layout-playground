<template>
  <div class="menu">
    <div class="backdrop" ref="backdrop"></div>
    <div class="menu__button--open" @click="toggleMenu">
      <div class="menu-bar__top"></div>
      <div class="menu__button__text">Menu</div>
      <div class="menu-bar__bottom"></div>
    </div>
    <div class="menu__slider" ref="menu">
      <div class="menu__button--close" @click="toggleMenu">
        <div></div>
        <div></div>
      </div>
      <div class="menu__content">
        <p class="menu__content--title">Studies</p>
        <router-link
          class="menu__content--option no-overflow"
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
        >
          <div class="link-title">
            {{ link.title }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { gsap } from 'gsap'

  export default {
    name: 'Menu',
    data: () => ({
      animationDuration: 1,
      ease: 'expo.out',
      isOpen: false,
      links: [
        {
          title: 'Grid',
          to: '/grid'
        },
        {
          title: 'Smooth Scroll',
          to: '/'
        }
      ]
    }),
    mounted() {
      this.linkElements = document.querySelectorAll('.link-title')
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen

        gsap.set(this.$refs.backdrop, {
          zIndex: this.isOpen ? 100 : -1
        })

        gsap
          .timeline()
          .to(
            this.$refs.backdrop,
            {
              opacity: this.isOpen ? 1 : 0,
              duration: 0.5
            },
            0
          )
          .to(
            this.$refs.menu,
            {
              x: this.isOpen ? '0%' : '100%',
              ease: this.ease,
              duration: this.animationDuration
            },
            0
          )
          .fromTo(
            this.linkElements,
            {
              y: this.isOpen ? '100%' : '0%'
            },
            {
              y: this.isOpen ? '0%' : '100%',
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.1
            },
            this.isOpen ? 0.2 : 0
          )
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/menu';
</style>

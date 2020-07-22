<template>
  <div class="parallax" data-scroll-container>
    <div data-scroll-section class="parallax__group">
      <h1>An Exercise In</h1>
      <h1 class="text-stroke">Parallax</h1>
    </div>
    <div data-scroll-section class="parallax__group">
      <div
        data-scroll
        data-scroll-speed="4"
        data-scroll-position="top"
        class="parallax__group--foreground"
      >
        <h1>An Exercise In</h1>
        <h1 class="text-stroke">Parallax</h1>
      </div>
    </div>
    <div data-scroll-section data-scroll class="parallax__group">
      <h1>An Exercise In</h1>
      <h1 class="text-stroke">Parallax</h1>
    </div>
    <main data-scroll-section>
      <h1 data-scroll data-scroll-speed="9" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
      <h1 data-scroll data-scroll-speed="-7" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
      <h1 data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
      <h1 data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
      <h1 data-scroll data-scroll-speed="8" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
      <h1 data-scroll data-scroll-speed="-9" data-scroll-direction="horizontal">
        Different <span class="text-stroke">speeds</span>
      </h1>
    </main>
  </div>
</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll'

  export default {
    mounted() {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector('.parallax'),
        smooth: true
      })
    },
    destroyed() {
      this.scroll.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/parallax';
</style>

<template>
  <div>
    <video muted autoplay loop playsinline>
      <!-- 
        Video by Jess Vide from Pexels:
        https://www.pexels.com/video/drone-footage-of-a-beach-near-city-buildings-4612067/
      -->
      <source src="../assets/videos/beach-1920x1080.mp4" type="video/mp4" />
    </video>
    <header>
      <div class="text-container">
        <p>An Exercise</p>
        <p>In Video.</p>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Video'
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/video';
</style>

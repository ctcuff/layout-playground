<template>
  <div>
    <video muted autoplay loop playsinline>
      <source src="../assets/videos/beach.mp4" type="video/mp4" />
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

<template>
  <div class="grid">
    <div class="grid-col">
      <div class="grid-col__item" v-for="(_, index) in columns - 1" :key="index"></div>
    </div>
    <main></main>
  </div>
</template>

<script>
  export default {
    data: () => ({ columns: 8 })
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/grid';
</style>

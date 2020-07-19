<template>
  <div>
    <header>
      <h1 class="header__title">
        Art using only
      </h1>
      <h1 class="header__title">
        <span class="text-stroke" data-stroke>one</span> element
      </h1>
      <p class="header__sub-title">
        Everything below uses only a single div
      </p>
    </header>
    <div class="entry">
      <div class="mario"></div>
    </div>
    <div class="entry">
      <div class="yin-yang"></div>
    </div>
    <div class="entry">
      <div class="square-layers"></div>
    </div>
    <div class="entry">
      <div class="circle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../scss/components/single-element';
</style>

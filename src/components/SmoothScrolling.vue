<template>
  <div class="scroll-container" data-scroll-container>
    <header data-scroll-section>
      <h1 class="title" data-scroll>
        <span data-scroll data-scroll-position="top" data-scroll-speed="6">
          An exercise
        </span>
        <span
          data-scroll
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
        >
          in
        </span>
        <span
          class="title--stroke"
          data-scroll
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          data-scroll-speed="-7"
        >
          smooth
        </span>
        <span
          data-scroll
          data-scroll-position="top"
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          scrolling
        </span>
        <span
          class="title--small"
          data-scroll
          data-scroll-position="top"
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          And other things also
        </span>
      </h1>
      <hr
        data-scroll
        data-scroll-speed="20"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      />
    </header>
    <section data-scroll-section>
      <div
        class="section-wrapper"
        data-scroll-delay="1"
        data-scroll-speed="2"
        data-scroll
      >
        <p class="text--title grid-col-1-3" data-scroll>I.</p>
        <p class="text" data-scroll>
          In plain English, at 4 a.m., a ray of light had been observed on the disc of the
          planet Mars in or near the "terminator"; that is to say, the zone of twilight
          separating day from night. The news was doubly interesting to me, because a
          singular dream of "Sunrise in the Moon" had quickened my imagination as to the
          wonders of the universe beyond our little globe, and because of a
          never-to-be-forgotten experience of mine with an aged astronomer several years
          ago
        </p>
        <p class="text" data-scroll>
          This extraordinary man, living the life of a recluse in his own observatory,
          which was situated in a lonely part of the country, had, or at any rate,
          believed that he had, opened up a communication with the inhabitants of Mars, by
          means of powerful electric lights, flashing in the manner of a signal-lantern or
          heliograph. I had set him down as a monomaniac; but who knows? perhaps he was
          not so crazy after all.
        </p>
        <p class="text grid-col-1-3" data-scroll>
          When evening came I turned to the books, and gathered a great deal about the
          fiery planet, including the fact that a stout man, a Daniel Lambert, could jump
          his own height there with the greatest ease. Very likely; but I was seeking
          information on the strange light, and as I could not find any I resolved to walk
          over and consult my old friend, Professor Gazen, the well-known astronomer, who
          had made his mark by a series of splendid researches with the spectroscope into
          the constitution of the sun and other celestial bodies. It was a fine clear
          night. The sky was cloudless and of a deep dark blue, which revealed the highest
          heavens and the silvery lustre of the Milky Way. The great belt of Orion shone
          conspicuously in the east, and Sirius blazed a living gem more to the south. I
          looked for Mars, and soon found him farther to the north, a large red star,
          amongst the white of the encircling constellations.
        </p>
      </div>
    </section>
    <section id="fixed-element" data-scroll-section data-persistant>
      <div class="section-wrapper" data-scroll>
        <p class="text--title grid-col-1-3" data-scroll>
          II.
        </p>
        <p
          class="text text--fixed"
          data-scroll-target="#fixed-element"
          data-scroll
          data-scroll-sticky
        >
          <b>01.</b> It was a fine clear night. The sky was cloudless and of a deep dark
          blue, which revealed the highest heavens and the silvery lustre of the Milky
          Way. The great belt of Orion shone conspicuously in the east, and Sirius blazed
          a living gem more to the south. I looked for Mars, and soon found him farther to
          the north, a large red star, amongst the white of the encircling constellations.
        </p>
        <div class="grid--filler" data-scroll></div>
      </div>
    </section>
  </div>
</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll'

  export default {
    name: 'SmoothScrolling',
    mounted() {
      new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/smooth-scrolling';
</style>

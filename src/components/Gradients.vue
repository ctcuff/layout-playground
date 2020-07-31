<template>
  <div class="root" ref="root">
    <div
      v-for="(transition, index) in transitions"
      :key="index"
      :data-transition="transition"
      class="container"
    >
      <h1>Click me</h1>
      <p>
        <span class="arrow--left" :class="{ 'arrow--hidden': index === 0 }"></span>
        Effect {{ index + 1 }} / {{ transitions.length }}
        <span
          class="arrow--right"
          :class="{ 'arrow--hidden': index === transitions.length - 1 }"
        ></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const transitions = ['slide', 'blinds', 'circle']
      const transitionData = {}

      transitions.forEach(transition => {
        transitionData[transition] = {
          requestId: null,
          frameIndex: 0,
          direction: -1
        }
      })

      return {
        transitionData,
        transitions,
        events: ['click', 'touch']
      }
    },
    mounted() {
      const sections = document.querySelectorAll('[data-transition]')

      sections.forEach(section => {
        this.events.forEach(event => {
          section.addEventListener(event, this.animate)
        })
      })
    },
    beforeDestroy() {
      const sections = document.querySelectorAll('[data-transition]')

      sections.forEach(section => {
        this.events.forEach(event => {
          section.removeEventListener(event, this.animate)
        })
      })
    },
    methods: {
      animate(event) {
        const transitionName = event.target.dataset.transition
        const { requestId } = this.transitionData[transitionName]

        if (requestId) {
          this.stopAnimation(transitionName)
        }

        this.transitionData[transitionName].direction *= -1
        this[transitionName]()
      },
      stopAnimation(transition) {
        const requestId = this.transitionData[transition].requestId

        cancelAnimationFrame(requestId)
        this.transitionData[transition].requestId = null
      },
      slide() {
        const name = 'slide'
        const numFrames = 40

        this.transitionData[name].frameIndex += this.transitionData[name].direction

        let progress = this.transitionData[name].frameIndex / numFrames

        this.$refs.root.style.setProperty(
          '--slide-stop',
          `${+(progress * 100).toFixed(2)}%`
        )

        if (this.transitionData[name].frameIndex % numFrames === 0) {
          this.stopAnimation(name)
          return
        }

        this.transitionData[name].requestId = requestAnimationFrame(this.slide)
      },
      blinds() {
        const name = 'blinds'
        const numFrames = 30

        this.transitionData[name].frameIndex += this.transitionData[name].direction

        const progress = this.transitionData[name].frameIndex / numFrames

        this.$refs.root.style.setProperty(
          '--blinds-stop',
          `${+(progress * 100).toFixed(2)}%`
        )

        if (this.transitionData[name].frameIndex % numFrames === 0) {
          this.stopAnimation(name)
          return
        }

        this.transitionData[name].requestId = requestAnimationFrame(this.blinds)
      },
      circle() {
        const name = 'circle'
        const numFrames = 40

        this.transitionData[name].frameIndex += this.transitionData[name].direction

        const progress = this.transitionData[name].frameIndex / numFrames

        this.$refs.root.style.setProperty(
          '--circle-stop',
          `${+(progress * 100).toFixed(2)}%`
        )

        if (this.transitionData[name].frameIndex % numFrames === 0) {
          this.stopAnimation(name)
          return
        }

        this.transitionData[name].requestId = requestAnimationFrame(this.circle)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/components/gradients';
</style>

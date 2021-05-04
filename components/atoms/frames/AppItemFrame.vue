<template>
  <div :class="rootClasses" class="p-4 h-full box-border relative flex justify-center items-center">
    <div :class="groundClasses" class="z-10 absolute sm:bottom-0 bottom-2 w-full h-1/4 bg-opacity-30 rounded-1/2 sm:rounded-t-1/2 sm:rounded-b-none" aria-label="ground" />
    <div class="z-20">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppItemFrame',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    groundColor: {
      type: String,
      default: null
    },
    radius: {
      type: Boolean,
      default: true
    },
    radiusPosition: {
      type: String,
      default: null
    }
  },
  computed: {
    rootClasses () {
      const res = {}
      const bgColor = `bg-${this.color}`
      res[bgColor] = true
      if (this.radius) {
        const radius = this.radiusPosition ? `rounded-${this.radiusPosition}-frame` : 'rounded-frame'
        res[radius] = true
      }
      return res
    },
    groundClasses () {
      const groundColor = this.groundColor || 'white'
      return {
        [`bg-${groundColor}`]: true
      }
    }
  }
}
</script>

<style scoped>

</style>

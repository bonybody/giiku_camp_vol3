<template>
  <h1 v-if="level===1" :class="classes">
    <slot />
  </h1>
  <h2 v-else-if="level===2" :class="classes">
    <slot />
  </h2>
  <h3 v-else-if="level===3" :class="classes">
    <slot />
  </h3>
  <h4 v-else-if="level===4" :class="classes">
    <slot />
  </h4>
</template>

<script>
export default {
  name: 'AppHeading',
  props: {
    level: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: 'base'
    }
  },
  computed: {
    classes () {
      const size = `text-${this.size}`
      return {
        [size]: true,
        'font-bold': true,
        'text-bold': true
      }
    }
  }
}
</script>

<template>
  <button
    v-if="!to"
    :class="getClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
  <nuxt-link
    v-else
    :class="getClasses"
    :to="to"
    @click="$emit('click')"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: [Object, String],
      default () {
        return null
      }
    },
    variable: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    bgPaint: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses () {
      const textColor = this.bgPaint ? 'text-white' : `text-${this.color}`
      const bgColor = `bg-${this.color}`
      const hover = {
        [`hover:${bgColor}`]: true
      }
      return {
        [textColor]: true,
        [bgColor]: this.bgPaint,
        'inline-block': true,
        'px-3': true,
        'leading-9': true,
        'w-full': this.variable,
        'text-left': this.left,
        'text-center': !this.left,
        'min-w-button': true,
        'hover:bg-opacity-30': true,
        rounded: true,
        'text-sm': true,
        'font-bold': true,
        'transition-colors': true,
        ...hover
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

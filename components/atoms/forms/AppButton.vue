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
    }
  },
  computed: {
    getClasses () {
      const textColor = `text-${this.color}`
      const bgColor = `bg-${this.color}`
      const hover = {
        [`hover:${bgColor}`]: true
      }
      return {
        [textColor]: true,
        'inline-block': true,
        'text-center': true,
        'px-3': true,
        'leading-9': true,
        'min-w-button': true,
        'hover:bg-opacity-30': true,
        rounded: true,
        'text-sm': true,
        'font-bold': true,
        'transition-colors': true,
        'focus:outline-none': true,
        ...hover
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

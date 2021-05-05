<template>
  <button :class="getClasses" @click="$emit('input', id)">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppTabButton',
  props: {
    currentTab: {
      type: Number,
      default: 0,
      require: true
    },
    id: {
      type: Number,
      default: 0,
      require: true
    }
  },
  computed: {
    getClasses () {
      const currentColor = this.currentTab === this.id ? 'primary' : 'gray-400'
      return {
        [`text-${currentColor}`]: true,
        'text-sm': true,
        'leading-9': true,
        'font-bold': true,
        'transition-colors': true,
        'focus:outline-none': true,
        'px-4': true
      }
    }
  }
}
</script>

<style scoped>

</style>

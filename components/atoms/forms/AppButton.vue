<template>
  <button
    class="
      px-3
      leading-9
      min-w-button
      hover:bg-opacity-30
      rounded text-sm
      font-bold
      transition-colors
    "
    :class="getClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'primary'
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
        ...hover
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

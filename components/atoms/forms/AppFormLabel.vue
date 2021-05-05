<template>
  <label
    :class="{'text-slim': !focus, 'text-secondary': focus}"
    class="transition-colors text-sm font-bold"
    :for="getFor"
  >
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'AppFormLabel',
  props: {
    for: {
      type: String,
      require: true,
      default: null
    },
    focus: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null,
      require: true
    }
  },
  computed: {
    getFor () {
      return this.for
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <label
    :class="[{focus: 'text-secondary'}, isState ? 'text-red-500' : 'text-slim']"
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
    },
    isState: {
      type: Boolean,
      default: null
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

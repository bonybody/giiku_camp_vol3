<template>
  <div class="flex items-center w-full">
    <label for="toggleB" class="flex items-center cursor-pointer">
      <!-- label -->
      <slot />
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toggleB" type="checkbox" class="sr-only" @click="$emit('input', boolState)">
        <!-- line -->
        <div :class="getClasses" class="transition-colors block w-14 h-8 rounded-full" />
        <!-- dot -->
        <div class="dot bg-white absolute left-1 top-1 w-6 h-6 rounded-full transition shadow-md" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppToggleButton',
  props: {
    boolState: {
      type: Boolean,
      default: null,
      require: true
    }
  },
  computed: {
    getClasses () {
      const bgColor = this.boolState ? 'primary' : 'gray-400'
      return {
        [`bg-${bgColor}`]: true
      }
    }
  }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>

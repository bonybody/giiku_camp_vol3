<template>
  <div class="flex items-center w-full">
    <label for="toggleB" class="flex items-center cursor-pointer">
      <!-- label -->
      <slot />
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toggleB" type="checkbox" class="sr-only" @click="$emit('click')">
        <!-- line -->
        <div :class="getLineClasses" class="transition-colors block w-14 h-8 rounded-full" />
        <!-- dot -->
        <div :class="getDotClasses" class="bg-white absolute top-1 left-0 right-0 mx-auto w-6 h-6 rounded-full transition shadow-md" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppToggleButton',
  props: {
    isState: {
      type: Boolean,
      default: null,
      require: true
    }
  },
  data () {
    return {
      isFirstBool: false
    }
  },
  computed: {
    getLineClasses () {
      const bgColor = this.isState ? 'primary' : 'gray-400'
      return {
        [`bg-${bgColor}`]: true
      }
    },
    getDotClasses () {
      return {
        [`dot-${this.isState}`]: true
      }
    }
  },
  created () {
    this.isFirstBool = this.isState
  }
}
</script>

<style scoped>
.dot-true {
  transform: translateX(50%);
}

.dot-false {
  transform: translateX(-50%);
}
</style>

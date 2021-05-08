<template>
  <button class="w-full h-full flex justify-center items-center p-2 border-box hover:bg-primary hover:bg-opacity-30 rounded-frame transition-colors" @click="$emit('click')">
    <img src="@/assets/images/icons/hamburger.svg" alt="ハンバーガーボタン">
  </button>
</template>

<script>
export default {
  name: 'AppHamburgerButton',
  props: {
    active: {
      type: Boolean,
      default: false,
      require: true
    }
  }
}
</script>

<style scoped>

</style>

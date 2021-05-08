<template>
  <div class="flex-center text-left">
    <div class="font-bold text-2xl">
      エラーが発生しました
    </div>
    <div class="text-danger">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

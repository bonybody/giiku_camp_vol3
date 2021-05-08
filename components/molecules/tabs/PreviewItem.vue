<template>
  <div class="h-full flex items-center sm:px-4 px-2 py-2 border rounded-md">
    <div class="h-9 mr-3">
      <img v-if="isMyself === true" class="h-full min-w-icon" :src="yumeTayori.src" :alt="yumeTayori.alt">
      <img v-else class="h-full min-w-icon" :src="yumePost.src" :alt="yumePost.alt">
    </div>
    <h3 class="truncate w-full text-bold font-bold text-lg">
      <slot name="title" />
    </h3>
    <slot name="detail" />
  </div>
</template>

<script>
export default {
  name: 'PreviewItem',
  props: {
    title: {
      type: String,
      default: null,
      require: true
    },
    isMyself: {
      type: Boolean,
      default: null,
      require: true
    }
  },
  data () {
    return {
      yumeTayori: {
        src: require('@/assets/images/menu_icons/yume_tayori.svg'),
        alt: 'ユメタヨリ'
      },
      yumePost: {
        src: require('@/assets/images/menu_icons/yume_post.svg'),
        alt: 'ユメポスト'
      }
    }
  }
}
</script>

<style scoped>

</style>

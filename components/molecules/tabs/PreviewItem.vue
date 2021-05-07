<template>
  <div class="h-14 flex items-center box-border px-4 border rounded-md">
    <div class="h-9 min-w-icon">
      <img v-if="isMyself === true" class="h-full box-border" :src="yumeTayori.src" :alt="yumeTayori.alt">
      <img v-else class="h-full" :src="yumePost.src" :alt="yumePost.alt">
    </div>
    <h3 class="truncate block w-full pl-3 text-bold font-bold text-lg leading-9">
      <slot name="title" />
    </h3>
    <div class="ml-auto">
      <slot name="detail" />
    </div>
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

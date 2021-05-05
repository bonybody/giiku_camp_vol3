<template>
  <div class="h-14 flex items-center box-border px-4 border rounded-md">
    <div class="h-9 mr-3">
      <img v-if="isMyself === true" class="h-full" :src="yumeTayori.src" :alt="yumeTayori.alt">
      <img v-else class="h-full" :src="yumePost.src" :alt="yumePost.alt">
    </div>
    <div>
      <app-heading :level="3" size="lg">
        {{ title }}
      </app-heading>
    </div>
    <div class="ml-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
export default {
  name: 'PreviewItem',
  components: { AppHeading },
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

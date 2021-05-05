<template>
  <div class="max-w-content mx-auto">
    <div class="h-32">
      <content-header color="slim" :image="image">
        <template #heading>
          <span class="text-white">
            ユメの記憶
          </span>
        </template>
        <template #description>
          <span class="text-white">
            ユメの記憶を辿りましょう
          </span>
        </template>
      </content-header>
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/components/molecules/commons/ContentHeader'

export default {
  components: { ContentHeader },
  data () {
    return {
      image: {
        src: require('@/assets/images/menu_icons/yume_kioku.svg'),
        alt: 'ユメの記憶'
      }
    }
  }
}
</script>

<style scoped>

</style>

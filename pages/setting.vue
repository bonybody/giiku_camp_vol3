<template>
  <div class="max-w-content mx-auto">
    <div class="mb-4">
      <app-heading :level="2" size="2xl">
        設定
      </app-heading>
    </div>
    <div class="h-32">
      <content-header color="gray-400" :image="image">
        <template #heading>
          設定
        </template>
        <template #description>
          サービスの設定を行います
        </template>
      </content-header>
    </div>
    <div>
      <yume-settings />
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import ContentHeader from '@/components/molecules/commons/ContentHeader'
import YumeSettings from '@/components/organisms/setting-groups/YumeSettings'

export default {
  components: { ContentHeader, AppHeading, YumeSettings },
  data () {
    return {
      image: {
        src: require('@/assets/images/menu_icons/setting.svg'),
        alt: '設定'
      }
    }
  }
}
</script>

<style scoped>

</style>

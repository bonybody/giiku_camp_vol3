<template>
  <div class="max-w-content mx-auto">
    <div class="mb-4">
      <app-heading :level="2" size="2xl">
        ユメの記憶
      </app-heading>
    </div>
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
    <div>
      <yume-kioku-tab-group />
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import ContentHeader from '@/components/molecules/commons/ContentHeader'
import YumeKiokuTabGroup from '@/components/organisms/tab-groups/YumeKiokuTabGroup'

export default {
  components: { ContentHeader, AppHeading, YumeKiokuTabGroup },
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

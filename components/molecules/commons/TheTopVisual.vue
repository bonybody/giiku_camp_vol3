<template>
  <div class="w-full rounded-frame shadow-md">
    <app-item-frame color="white" ground-color="primary">
      <div class="w-full box-border sm:px-2 px-0 sm:pt-2 pt-0">
        <app-heading :level="2" size="2xl">
          ユメタヨリ
        </app-heading>
        <div class="mt-1 font-bold text-bold">
          誰かとユメを共有するサービス
        </div>

        <div class="flex sm:mt-6 mt-4 sm:justify-start justify-around">
          <template v-for="(menuIcon, index) in menuIcons">
            <div :key="index" class="mr-2">
              <img class="h-logo" :src="menuIcon.src" :alt="menuIcon.alt">
            </div>
          </template>
        </div>
      </div>
    </app-item-frame>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppItemFrame from '@/components/atoms/frames/AppItemFrame'

export default {
  name: 'TheTopVisual',
  components: { AppHeading, AppItemFrame },
  data () {
    return {
      menuIcons: [
        {
          src: require('@/assets/images/menu_icons/yume_post.svg'),
          alt: 'ユメポスト'
        },
        {
          src: require('@/assets/images/menu_icons/yume_tayori.svg'),
          alt: 'ユメタヨリ'
        },
        {
          src: require('@/assets/images/menu_icons/yume_kioku.svg'),
          alt: 'ユメの記憶'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="w-full min-h-content box-border p-4 border rounded-md">
    <div class="text-bold text-lg text-center font-bold">
      ユメを記憶しませんか？
    </div>

    <div class="flex justify-around mt-6">
      <template v-for="(nullItem, index) in nullItemContent">
        <div :key="index" class="flex flex-col justify-center">
          <div class="w-1/2 mx-auto mb-1">
            <img :src="nullItem.src" :alt="nullItem.alt">
          </div>
          <app-button :to="nullItem.link.to" :color="nullItem.color">
            {{ nullItem.link.text }}
          </app-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'
export default {
  components: { AppButton },
  props: {
    currentTab: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      yumeTayori: {
        src: require('@/assets/images/menu_icons/yume_tayori.svg'),
        alt: 'ユメタヨリ',
        link: { text: 'ユメを書く', to: '/yume_tayori' },
        color: 'secondary'
      },
      yumePost: {
        src: require('@/assets/images/menu_icons/yume_post.svg'),
        alt: 'ユメポスト',
        link: { text: 'ポストを確認', to: '/yume_post' },
        color: 'primary'
      }
    }
  },
  computed: {
    nullItemContent () {
      let nullItem = []
      switch (this.currentTab) {
        case 0:
          nullItem = [{ ...this.yumePost }, { ...this.yumeTayori }]
          break
        case 1:
          nullItem = [{ ...this.yumePost }]
          break
        case 2:
          nullItem = [{ ...this.yumeTayori }]
          break
      }
      return nullItem
    }
  }
}
</script>

<style scoped>

</style>

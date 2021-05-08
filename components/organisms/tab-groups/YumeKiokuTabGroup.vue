<template>
  <div class="p-4 bg-white rounded-b-frame shadow-md">
    <div>
      <tab-menu v-model="current" :tabs="tabs" :current-tab="current" />
    </div>
    <div class="min-h-content" :class="{'flex-center': !show}">
      <div v-show="!show">
        <app-loading-animation />
      </div>
      <div v-show="show">
        <div v-show="isEmpty" class="mt-4">
          <the-null-item :current-tab="current" />
        </div>
        <template v-for="(previewItem, index) in previewItems">
          <div :key="index" class="mt-4">
            <preview-item :is-myself="isMyself(previewItem.type)">
              <template #title>
                <nuxt-link :to="`/yume_kioku/` + previewItem.actionId">
                  {{ previewItem.title }}
                </nuxt-link>
              </template>
              <template #detail>
                <div class="text-right">
                  <button class="w-5 h-5 mb-1 focus:outline-none" @click="changeFavorite(index)">
                    <svg
                      :class="(previewItem.isFavorite === true) ? 'text-secondary' : 'text-gray-400'"
                      class="m-auto fill-current transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="18"
                      viewBox="0 0 12 18"
                    >
                      <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M18.607,16.485l-5.9-3.469a1.5,1.5,0,0,0-2.069.563,1.557,1.557,0,0,0,.554,2.106l5.9,3.469a1.5,1.5,0,0,0,2.069-.564,1.554,1.554,0,0,0-.553-2.105ZM13.74,12.735l4.59,2.7,1.561-4.423L16.721,9.147,13.74,12.735ZM10.356,24.1l4.391-5.43L12.78,17.51ZM21.787,8.564,17.854,6.251a1.124,1.124,0,0,0-1.551.423,1.167,1.167,0,0,0,.416,1.579l3.934,2.312a1.124,1.124,0,0,0,1.551-.423,1.167,1.167,0,0,0-.416-1.579Z" transform="translate(-10.356 -6.096)" />
                    </svg>
                  </button>
                  <div class="text-xs text-gray-400">
                    {{ getJapaneseDate(previewItem.createdAt) }}
                  </div>
                </div>
              </template>
            </preview-item>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/molecules/tabs/TabMenu'
import PreviewItem from '@/components/molecules/tabs/PreviewItem'
import TheNullItem from '@/components/molecules/null-item/TheNullItem'
import formatter from '@/modules/formatter'
import AppLoadingAnimation from '@/components/atoms/loading/AppLoadingAnimation'

export default {
  name: 'YumeKiokuTabGroup',
  components: { AppLoadingAnimation, TabMenu, PreviewItem, TheNullItem },
  data () {
    return {
      previewItems: [],
      isEmpty: false,
      itemsNone: false,
      currentTab: 0,
      tabs: [
        { id: 0, text: 'スベテ' },
        { id: 1, text: 'ポスト' },
        { id: 2, text: 'タヨリ' }
      ],
      pin: {
        src: require('@/assets/images/menu_icons/pin.svg'),
        alt: 'ピン'
      },
      show: false
    }
  },
  async fetch () {
    this.show = false

    let data = false
    try {
      const user = this.$auth.getUser({ doc: true })
      switch (this.currentTab) {
        case 0:
          data = await this.$api.yume.getYumeGroupByUser(user)
          break
        case 1:
          data = await this.$api.yume.getYumePostGroupByUser(user)
          break
        case 2:
          data = await this.$api.yume.getYumeTayoriGroupByUser(user)
          break
      }
      if (!data) {
        this.isEmpty = true
      }
      this.previewItems = data
      this.show = true
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    current: {
      get () {
        return this.currentTab
      },
      set (tab) {
        this.currentTab = tab
        this.isEmpty = false
        // タブが切り替わったらユメ一覧を初期化
        // fetchをやり直し
        this.$fetch()
      }
    },
    isMyself () {
      return (type) => {
        if (type === 'yume_tayori') {
          return true
        } else {
          return false
        }
      }
    },
    getJapaneseDate () {
      return (date) => {
        return formatter.dateFormatToJapanese(date)
      }
    }
  },
  methods: {
    async changeFavorite (index) {
      const item = this.previewItems[index]
      item.isFavorite = !item.isFavorite
      try {
        await this.$api.yume.editYumeIsFavorite(item.actionId, item.isFavorite)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

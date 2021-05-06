<template>
  <div class="p-4 bg-white rounded-b-frame shadow-md">
    <div>
      <tab-menu v-model="current" :tabs="tabs" :current-tab="current" />
    </div>
    <template v-for="(previewItem, index) in previewItems">
      <div :key="index" class="mt-4">
        <preview-item :title="previewItem.title" :is-myself="previewItem.isMyself">
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
              {{ previewItem.createdAt }}
            </div>
          </div>
        </preview-item>
      </div>
    </template>
  </div>
</template>

<script>
import TabMenu from '@/components/molecules/tabs/TabMenu'
import PreviewItem from '@/components/molecules/tabs/PreviewItem'

export default {
  name: 'YumeKiokuTabGroup',
  components: { TabMenu, PreviewItem },
  data () {
    return {
      previewItems: [
        {
          isMyself: false,
          title: 'ユメポスト',
          createdAt: '2020/05/05',
          isFavorite: false
        },
        {
          isMyself: false,
          title: 'ユメポスト',
          createdAt: '2020/05/05',
          isFavorite: true
        },
        {
          isMyself: true,
          title: 'ユメタヨリ',
          createdAt: '2020/05/05',
          isFavorite: false
        },
        {
          isMyself: true,
          title: 'ユメタヨリ',
          createdAt: '2020/05/05',
          isFavorite: true
        }
      ],
      currentTab: 0,
      tabs: [
        { id: 0, text: 'スベテ' },
        { id: 1, text: 'ポスト' },
        { id: 2, text: 'タヨリ' }
      ],
      pin: {
        src: require('@/assets/images/menu_icons/pin.svg'),
        alt: 'ピン'
      }
    }
  },
  computed: {
    current: {
      get () {
        return this.currentTab
      },
      set (tab) {
        this.currentTab = tab
      }
    }
  },
  /* yumeのデータを受け取る */
  // fetch () {}
  methods: {
    // async changeFavorite (index) {
    changeFavorite (index) {
      /* firestoreの処理 */
      // await
      this.previewItems[index].isFavorite = !this.previewItems[index].isFavorite
    }
  }
}
</script>

<style scoped>

</style>

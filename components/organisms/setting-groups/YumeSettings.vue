<template>
  <div class="w-full box-border p-4 bg-white rounded-b-frame shadow-md">
    <div>
      <service-settings :current-notification="currentNotification" @click="changeNotificationState" />
    </div>
    <hr class="w-full my-4">
    <div>
      <div>
        <app-heading :level="3" size="xl">
          ユメの管理
        </app-heading>
      </div>
      <template v-for="(previewItem, index) in previewItems">
        <div :key="index" class="mt-4">
          <preview-item :title="previewItem.title" :is-myself="previewItem.isMyself">
            <app-button color="red-500" @click="showDialog(index)">
              記憶を消す
            </app-button>
          </preview-item>
        </div>
      </template>
    </div>

    <transition>
      <app-dialog
        v-show="isDialog"
        :is-close-action="true"
        :title="dialog.title"
        :text="dialog.text"
        @click="onDeleteItem"
        @close-dialog="isDialog = false"
      />
    </transition>
  </div>
</template>

<script>
import ServiceSettings from '@/components/molecules/setting/ServiceSettings'
import PreviewItem from '@/components/molecules/tabs/PreviewItem'
import AppButton from '@/components/atoms/forms/AppButton'
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppDialog from '@/components/molecules/commons/AppDialog'

export default {
  components: { ServiceSettings, PreviewItem, AppButton, AppHeading, AppDialog },
  data () {
    return {
      currentNotification: false,
      selectedItem: null,
      isDialog: false,
      dialog: {
        title: '記憶を消去します',
        text: 'ユメタヨリの記憶を削除すると<br>' +
            'ユメタヨリを受け取った人の記憶も<br>' +
            '消去されます'
      },
      previewItems: [
        {
          isMyself: false,
          title: 'ユメポスト0',
          createdAt: '2020/05/05',
          isFavorite: false
        },
        {
          isMyself: false,
          title: 'ユメポスト1',
          createdAt: '2020/05/05',
          isFavorite: true
        },
        {
          isMyself: true,
          title: 'ユメタヨリ2',
          createdAt: '2020/05/05',
          isFavorite: false
        },
        {
          isMyself: true,
          title: 'ユメタヨリ3',
          createdAt: '2020/05/05',
          isFavorite: true
        }
      ]
    }
  },
  async fetch () {
    try {
      const user = this.$auth.getUser({ doc: true })
      const data = await this.$api.user.getUserSettingByUser(user)
      this.currentNotification = data.notification
    } catch (e) {
      return false
    }
  },
  methods: {
    showDialog (index) {
      this.selectedItem = index
      this.isDialog = true
    },
    // async onDeleteItem () {
    onDeleteItem () {
      const newPreviewItems = this.previewItems.filter((el, i, self) => el !== self[this.selectedItem])
      this.previewItems = newPreviewItems
      this.isDialog = false
    },
    async changeNotificationState () {
      const isState = this.currentNotification
      const user = this.$auth.getUser({ doc: true })
      this.currentNotification = !isState
      await this.$api.user.editNotificationState(user, !isState)
    }

  }
  // fetch () {
  /*
      firestoreの必要なデータ
        - isMyself: コンテンツの種類を判断
        - isNotification: 現在のユーザーの通知設定
    */
  // }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 150ms
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>

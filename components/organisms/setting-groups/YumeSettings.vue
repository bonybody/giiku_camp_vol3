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
          <preview-item :title="previewItem.title" :is-myself="isMyself(previewItem.type)">
            <template #title>
              {{ previewItem.title }}
            </template>
            <template #detail>
              <app-button color="red-500" @click="showDialog(previewItem.type)">
                記憶を消す
              </app-button>
            </template>
          </preview-item>
          <transition>
            <app-dialog
              v-show="isDialog"
              :is-close-action="true"
              :title="dialog.title"
              :text="dialog.text"
              @click="onDeleteItem(dialog.argument)"
              @close-dialog="isDialog = false"
            />
          </transition>
        </div>
      </template>
    </div>
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
            '消去されます',
        argument: null
      },
      previewItems: [
        {
          type: 'yume_tayori',
          title: 'ユメタヨリ',
          isFavorite: false
        },
        {
          type: 'yume_post',
          title: 'ユメポスト',
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
  computed: {
    isMyself () {
      return (type) => {
        if (type === 'yume_tayori') {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    showDialog (argument) {
      this.isDialog = true
      this.dialog.argument = argument
    },
    // async onDeleteItem () {
    async onDeleteItem (type) {
      console.log(type)
      const user = this.$auth.getUser({ doc: true })
      try {
        await this.$api.yume.deleteYumeByUserWithType(user, type)
      } catch (e) {
        return false
      }
      this.isDialog = false
    },
    async changeNotificationState () {
      const isState = this.currentNotification
      const user = this.$auth.getUser({ doc: true })
      this.currentNotification = !isState
      await this.$api.user.editNotificationState(user, !isState)
    }
  }
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

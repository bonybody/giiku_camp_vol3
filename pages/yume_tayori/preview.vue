<template>
  <div class="max-w-content mx-auto">
    <div class="mb-4">
      <app-heading :level="2" size="2xl">
        ユメタヨリ
      </app-heading>
    </div>
    <div>
      <yume-detail
        type="preview"
        :title="title"
        :text="text"
        :category="category"
        @click="send"
        @back="backFormTo"
      />
    </div>

    <transition>
      <app-dialog
        v-show="isDialog"
        :is-close-action="false"
        :title="dialog.title"
        :text="dialog.text"
        color="secondary"
        @click="toTopAfterSending"
      />
    </transition>
  </div>
</template>

<script>
import YumeDetail from '@/components/organisms/yume/YumeDetail'
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppDialog from '@/components/molecules/commons/AppDialog'

export default {
  components: { AppHeading, YumeDetail, AppDialog },
  asyncData ({ query }) {
    if (query) {
      const title = query.title
      const text = query.text
      const category = query.category
      return {
        title,
        text,
        category
      }
    }
  },
  data () {
    return {
      title: null,
      text: null,
      category: null,
      isDialog: false,
      dialog: {
        title: 'ユメを記憶しました',
        text: 'あなたのユメを記憶しました。<br>' +
            'ユメの記憶であなたのユメを<br>' +
            '確認することができます。'
      }
    }
  },
  methods: {
    toTopAfterSending () {
      this.isDialog = false
      this.$router.push('/')
    },
    backFormTo () {
      const query = {
        title: this.title,
        category: this.category,
        text: this.text
      }
      this.$router.push({ path: '/yume_tayori', query })
    },
    changeDialogState () {
      this.dialog = !this.dialog
    },
    async send () {
      // パラメータの定義
      const title = this.title
      const category = this.category.doc.ref
      const text = this.text
      const user = this.$auth.getUser({ doc: true })
      // ドキュメントの作成
      await this.$api.yume.addYumeTayori(title, category, text, user)
      this.isDialog = !this.isDialog
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

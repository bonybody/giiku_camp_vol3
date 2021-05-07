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
        @click="isDialog = true"
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
import YumeDetail from '@/components/molecules/yume/YumeDetail'
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppDialog from '@/components/molecules/commons/AppDialog'

export default {
  components: { AppHeading, YumeDetail, AppDialog },
  asyncData ({ query }) {
    const title = query.title
    const text = query.text
    const category = query.category
    return {
      title,
      text,
      category
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
    // async toTopAfterSending () {
    toTopAfterSending () {
      /* 夢をfirestore送信  */
      // await
      this.isDialog = false
      this.$router.push('/')
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

<template>
  <div>
    <div>
      <app-heading :level="3" size="xl">
        サービスの設定
      </app-heading>
    </div>
    <!-- settingが増えることを見越してlistで作成 -->
    <!-- <ul><li></li></ul> -->
    <div class="flex mt-4">
      <app-toggle-button v-model="current" :is-state="current">
        <div class="text-base mr-4">
          ユメの通知
        </div>
      </app-toggle-button>
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppToggleButton from '@/components/atoms/forms/AppToggleButton'

export default {
  name: 'ServiceSettings',
  components: { AppHeading, AppToggleButton },
  props: {
    currentNotification: {
      type: Boolean,
      default: null,
      require: true
    }
  },
  computed: {
    current: {
      get () {
        return this.currentNotification
      },
      set (bool) {
        this.$emit('input', bool)
      }
    }
  }
}
</script>

<style scoped>

</style>

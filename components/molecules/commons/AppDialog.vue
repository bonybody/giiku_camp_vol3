<template>
  <div class="fixed min-h-full box-border px-6 z-top top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div class="min-w-dialog p-4 bg-white rounded-frame shadow-md">
      <div>
        <app-heading :level="3" size="xl">
          <span :class="`text-${color}`">
            {{ title }}
          </span>
        </app-heading>
      </div>

      <div class="text-sm mt-2 text-gray-400" v-html="text" />
      <div class="flex w-full mt-4">
        <div class="ml-auto">
          <app-button :color="color" @click="$emit('click')">
            確認
          </app-button>
        </div>
        <div v-if="isCloseAction === true" class="ml-4">
          <app-button color="gray-400" @click="$emit('close-dialog')">
            キャンセル
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'
import AppHeading from '@/components/atoms/headings/AppHeading'

export default {
  name: 'AppDialog',
  components: { AppHeading, AppButton },
  props: {
    isCloseAction: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null,
      require: true
    },
    text: {
      type: String,
      default: null,
      require: true
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>

</style>

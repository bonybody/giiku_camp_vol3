<template>
  <div class="w-full box-border p-4 bg-white rounded-b-frame shadow-md">
    <div>
      <service-settings />
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
            <app-button color="red-500">
              記憶を消す
            </app-button>
          </preview-item>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ServiceSettings from '@/components/molecules/setting/ServiceSettings'
import PreviewItem from '@/components/molecules/tabs/PreviewItem'
import AppButton from '@/components/atoms/forms/AppButton.vue'
import AppHeading from '@/components/atoms/headings/AppHeading.vue'

export default {
  components: { ServiceSettings, PreviewItem, AppButton, AppHeading },
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
      ]
    }
  }
}
</script>

<style scoped>

</style>

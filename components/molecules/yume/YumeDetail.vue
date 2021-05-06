<template>
  <div class="bg-white rounded-frame p-4 border-box">
    <div class="mb-3">
      <app-heading :level="3" size="xl">
        {{ title }}
      </app-heading>
    </div>
    <div
      class="
        mb-3
        font-bold
        text-sm
        inline-block
        min-w-button
        text-center
        leading-9
        rounded-full
        bg-opacity-30
        bg-primary
        text-primary"
    >
      {{ category.text }}
    </div>
    <div class="mb-4 w-full relative">
      <template v-for="(value, index) in getTextLineArray">
        <span :key="index" class="border-b border-gray-400 w-full inline-block leading-9 h-9">{{ value }}</span>
      </template>
    </div>
    <div v-if="type === 'preview'" class="mb-4 flex flex-start justify-end">
      <div class="mr-4">
        <app-button color="secondary">
          ユメを記憶する
        </app-button>
      </div>
      <div>
        <app-button @click="backFormTo">
          戻る
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppButton from '@/components/atoms/forms/AppButton'

export default {
  name: 'YumeDetail',
  components: { AppButton, AppHeading },
  props: {
    type: {
      type: String,
      default: 'detail'
    },
    title: {
      type: String,
      default: '',
      require: true
    },
    category: {
      type: Object,
      default () {
        return {}
      },
      require: true
    },
    text: {
      type: String,
      default: '',
      require: true
    }
  },
  computed: {
    getTextLineArray () {
      const array = this.text.split('\n')
      while (array.length < 4) {
        array.push(null)
      }
      return array
    }
  },
  methods: {
    backFormTo () {
      const query = {
        title: this.title,
        category: this.category,
        text: this.text
      }
      this.$router.push({ path: '/yume_tayori', query })
    }
  }
}
</script>

<style scoped>

</style>

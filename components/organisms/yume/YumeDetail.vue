<template>
  <div class="bg-white rounded-frame p-4 border-box shadow-md">
    <div class="flex">
      <div>
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
      </div>
      <div class="ml-auto">
        <img :src="crescentMoon.src" :alt="crescentMoon.alt">
      </div>
    </div>

    <div class="mb-4 w-full relative line-image break-all" :style="{'background-image': `url(${underline})`}">
      <span class="w-full inline-block leading-9" v-html="getTextLineArray" />
    </div>
    <div v-if="type === 'preview'" class="mb-4 flex flex-start justify-end">
      <div class="mr-4">
        <app-button color="secondary" @click="$emit('click')">
          ユメを記憶する
        </app-button>
      </div>
      <div>
        <app-button color="gray-400" @click="$emit('back')">
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
  data () {
    return {
      dialog: false,
      crescentMoon: {
        src: require('@/assets/images/icons/crescent-moon.svg'),
        alt: 'crescent-moon'
      },
      underline: require('@/assets/images/icons/underline.png')
    }
  },
  computed: {
    getTextLineArray () {
      const text = this.text.replace(/\n/g, '<br>')
      return text
    }
  }
}
</script>

<style scoped>
.over {
  overflow-wrap: wrap;
}
.line-image {
  height: 100%;
  background-repeat: repeat-y;
}
</style>

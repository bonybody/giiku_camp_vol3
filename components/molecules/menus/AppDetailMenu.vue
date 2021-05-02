<template>
  <div class="rounded-frame bg-white flex justify-between items-stretch p-3 box-border">
    <div class="flex-grow rounded-frame pr-3">
      <img :src="image" :alt="title" class="rounded-frame block">
    </div>
    <div class="flex-grow-0 w-64 flex flex-wrap">
      <div class="w-full">
        <app-heading :level="2" size="xl">
          {{ title }}
        </app-heading>
      </div>
      <p class="w-full text-sm text-gray-400" v-html="text" />
      <div class="w-full self-end text-right" :class="{[thisColor]: true}">
        <nuxt-link :to="link.to">
          {{ link.text }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
export default {
  name: 'AppDetailMenu',
  components: { AppHeading },
  props: {
    title: {
      type: String,
      require: true,
      default: null
    },
    text: {
      type: String,
      require: true,
      default: null
    },
    link: {
      type: Object,
      require: true,
      default: null
    },
    image: {
      type: String,
      require: true,
      default: null
    },
    color: {
      type: String,
      require: true,
      default: null
    }
  },
  computed: {
    thisColor () {
      return `text-${this.color}`
    }
  }
}
</script>

<style scoped>

</style>

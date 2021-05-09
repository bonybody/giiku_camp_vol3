<template>
  <div class="rounded-frame shadow-md bg-white flex justify-between items-stretch p-4 box-border">
    <div class="rounded-frame mr-4 shadow">
      <app-item-frame :color="color" :radius="true">
        <div class="h-full w-full flex justify-center items-center relative z-10">
          <img :src="image" :alt="title">
        </div>
      </app-item-frame>
    </div>
    <div class="w-64 flex flex-col">
      <div class="mb-3">
        <app-heading :level="2" size="xl">
          {{ title }}
        </app-heading>
      </div>
      <!-- eslint-disable-next-line -->
      <p class="text-sm text-gray-400" v-html="sanitize(text)" />
      <div class="text-right mt-auto" :class="{[thisColor]: true}">
        <app-button :to="link.to" :color="color">
          {{ link.text }}
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppButton from '@/components/atoms/forms/AppButton'
import AppItemFrame from '@/components/atoms/frames/AppItemFrame'
import sanitizeHTML from 'sanitize-html'
export default {
  name: 'DetailMenu',
  components: { AppItemFrame, AppButton, AppHeading },
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
  },
  methods: {
    sanitize (text) {
      return sanitizeHTML(text)
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  &::before {
    z-index: 1;
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 24%;
    border-radius: 50% 50% 0 0;
    background-color: rgba(255,255,255, .3);
  }
}
</style>

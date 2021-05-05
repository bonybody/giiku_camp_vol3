<template>
  <div class="h-full">
    <app-item-frame :color="color" :ground-color="groundColor" :radius="true" radius-position="t">
      <div class="h-full flex justify-center items-center">
        <div class="h-full pr-6">
          <img class="h-full" :src="image.src" :alt="image.alt">
        </div>
        <div>
          <div class="mb-2">
            <app-heading :level="3" size="2xl">
              <slot name="heading" />
            </app-heading>
          </div>
          <div class="">
            <slot name="description" />
          </div>
        </div>
      </div>
    </app-item-frame>
  </div>
</template>

<script>
import AppItemFrame from '@/components/atoms/frames/AppItemFrame'
import AppHeading from '@/components/atoms/headings/AppHeading'

export default {
  name: 'ContentHeader',
  components: {
    AppHeading,
    AppItemFrame
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    groundColor: {
      type: String,
      default: null
    },
    image: {
      type: Object,
      default () {
        return {}
      },
      require: true
    }
  }
}
</script>

<style scoped>

</style>

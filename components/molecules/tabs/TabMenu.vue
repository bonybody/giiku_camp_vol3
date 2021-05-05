<template>
  <div class="w-full flex box-border p-2 bg-white rounded-md shadow-md">
    <template v-for="(tab, index) in tabs">
      <div :key="index" class="w-full text-center">
        <app-tab-button
          :id="tab.id"
          v-model="current"
          :current-tab="current"
        >
          {{ tab.text }}
        </app-tab-button>
      </div>
    </template>
  </div>
</template>

<script>
import AppTabButton from '@/components/atoms/tabs/AppTabButton'
export default {
  name: 'TabMenu',
  components: { AppTabButton },
  props: {
    currentTab: {
      type: Number,
      default: 0,
      require: true
    },
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    current: {
      get () {
        return this.currentTab
      },
      set (id) {
        this.$emit('input', id)
      }
    }
  }
}
</script>

<style scoped>

</style>

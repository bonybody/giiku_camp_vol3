<template>
  <div class="p-4 bg-white rounded-b-frame">
    <div class="mb-4">
      <tab-menu v-model="currentTab" :tabs="tabs" :current-tab="currentTab" />
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/molecules/tabs/TabMenu'

export default {
  name: 'YumeKiokuTabGroup',
  components: { TabMenu },
  data () {
    return {
      currentTab: 0,
      tabs: [
        { id: 0, text: 'スベテ' },
        { id: 1, text: 'ポスト' },
        { id: 2, text: 'タヨリ' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

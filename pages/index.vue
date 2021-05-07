<template>
  <div class="container max-w-content m-auto">
    <the-top-visual />
    <div class="mt-6">
      <top-detail-menu-group />
    </div>
  </div>
</template>

<script>
import TheTopVisual from '@/components/molecules/commons/TheTopVisual'
import TopDetailMenuGroup from '@/components/organisms/menu-groups/TopDetailMenuGroup'
export default {
  components: { TheTopVisual, TopDetailMenuGroup }
}
</script>

<style>
</style>

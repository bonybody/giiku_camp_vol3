<template>
  <div class="max-w-content mx-auto">
    <div class="mb-4">
      <app-heading :level="2" size="2xl">
        ユメポスト
      </app-heading>
    </div>
    <div>
      <yume-accept-form />
    </div>
  </div>
</template>

<script>
import YumeAcceptForm from '@/components/organisms/forms/YumeAcceptForm'
import AppHeading from '@/components/atoms/headings/AppHeading'
export default {
  components: { AppHeading, YumeAcceptForm }
}
</script>

<style scoped>

</style>

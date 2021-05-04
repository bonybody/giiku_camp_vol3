<template>
  <header class="bg-white shadow-md h-12">
    <div class="flex justify-between h-full items-center max-w-screen-lg box-border px-4 m-auto">
      <div>
        <app-heading :level="1" :size="'2xl'">
          ユメタヨリ
        </app-heading>
      </div>
      <div>
        <the-global-nav />
      </div>
    </div>
  </header>
</template>

<script>
import TheGlobalNav from '@/components/molecules/commons/TheGlobalNav'
import AppHeading from '@/components/atoms/headings/AppHeading'

export default {
  name: 'TheHeader',
  components: {
    AppHeading,
    TheGlobalNav
  }
}
</script>

<style scoped>

</style>

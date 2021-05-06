<template>
  <div class="wrap">
    <the-header />
    <main class="box-border py-6 px-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/organisms/commons/TheHeader'

export default {
  components: { TheHeader }
}
</script>

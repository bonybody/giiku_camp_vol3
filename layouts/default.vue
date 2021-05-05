<template>
  <div class="wrap">
    <the-header />
    <main class="box-border p-6">
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

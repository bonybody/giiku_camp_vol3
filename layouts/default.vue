<template>
  <div class="wrap">
    <thel-header />
    <main class="box-border p-3">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import ThelHeader from '@/components/organisms/commons/ThelHeader'

export default {
  components: { ThelHeader }
}
</script>

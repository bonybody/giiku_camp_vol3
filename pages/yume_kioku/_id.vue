<template>
  <div class="max-w-content mx-auto">
    <yume-detail type="detail" :title="title" :text="text" :category="category" />
  </div>
</template>

<script>
import YumeDetail from '@/components/organisms/yume/YumeDetail'
export default {
  components: { YumeDetail },
  async asyncData ({ params, $api }) {
    const yumeId = params.id
    const yume = await $api.yume.getYumeById(yumeId)
    console.log(yume)
    return yume
  },
  data () {
    return {
      title: '',
      text: '',
      category: {}
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="max-w-content mx-auto">
    <div class="mb-4">
      <app-heading :level="2" size="2xl">
        ユメタヨリ
      </app-heading>
    </div>

    <div class="h-32">
      <content-header color="secondary" :image="image">
        <template #heading>
          ユメタヨリ
        </template>
        <template #description>
          誰かにユメが届くかも...
        </template>
      </content-header>
    </div>
    <div>
      <yume-tayori-form />
    </div>
  </div>
</template>
<script>
import YumeTayoriForm from '@/components/organisms/forms/YumeTayoriForm'
import ContentHeader from '@/components/molecules/commons/ContentHeader'
import AppHeading from '@/components/atoms/headings/AppHeading'

export default {
  components: { AppHeading, ContentHeader, YumeTayoriForm },
  data () {
    return {
      image: {
        src: require('assets/images/menu_icons/yume_tayori.svg'),
        alt: 'ユメタヨリ'
      }
    }
  }
}
</script>

<style scoped>

</style>

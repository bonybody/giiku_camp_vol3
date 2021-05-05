<template>
  <form class="bg-white rounded-b-frame shadow-md p-4 box-border" @submit.prevent="formSubmit">
    <div class="mb-4">
      <default-input-item v-model="title" name="title" label="ユメの題名" />
    </div>
    <div class="mb-4">
      <default-input-item v-model="category" name="category" label="ユメの種類" type="select" :options="categoryOptions" />
    </div>
    <div class="mb-4">
      <default-input-item v-model="text" name="text" label="ユメの内容" type="textarea" />
    </div>
    <div class="text-right">
      <app-button color="secondary">
        ユメを確認
      </app-button>
    </div>
  </form>
</template>

<script>
import DefaultInputItem from '@/components/molecules/forms/DefaultInputItem'
import AppButton from '@/components/atoms/forms/AppButton'

export default {
  name: 'YumeTayoriForm',
  components: {
    AppButton,
    DefaultInputItem
  },
  data () {
    return {
      title: null,
      category: null,
      text: null,
      categoryOptions: [
        {
          text: '怖い夢',
          value: 'scared'
        }
      ]
    }
  },
  methods: {
    formSubmit () {
      console.log('hoge')
    }
  }
}
</script>

<style scoped>

</style>

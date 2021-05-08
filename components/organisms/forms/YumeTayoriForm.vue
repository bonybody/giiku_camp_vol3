<template>
  <form class="bg-white rounded-b-frame shadow-md p-4 box-border" @submit.prevent="formSubmit">
    <div v-if="isTitle || isText" class="font-bold text-red-500 text-sm mb-4">
      入力に誤りがあります
    </div>
    <div class="mb-4">
      <default-input-item v-model="title" :is-state="isTitle" name="title" label="ユメの題名" />
    </div>
    <div class="mb-4">
      <default-input-item v-model="category" name="category" label="ユメの種類" type="select" :options="categoryOptions" />
    </div>
    <div class="mb-4">
      <default-input-item v-model="text" :is-state="isText" name="text" label="ユメの内容" type="textarea" />
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
      title: '',
      category: {},
      text: '',
      categoryOptions: [],
      isTitle: null,
      isText: null
    }
  },
  async fetch () {
    if (this.$route.query.title) {
      const params = this.$route.query
      this.title = params.title
      this.category = params.category
      this.text = params.text
    }
    try {
      const categories = await this.$api.category.getCategories()
      this.categoryOptions = categories
      this.category = categories[0]
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    formSubmit () {
      const query = {
        title: this.title,
        category: this.category,
        text: this.text
      }
      this.checkInputForm('title')
      this.checkInputForm('text')
      if (this.isTitle !== true && this.isText !== true) {
        this.$router.push({ path: '/yume_tayori/preview', query })
      }
    },
    checkInputForm (value) {
      const type = value[0].toUpperCase() + value.slice(1)
      if (this[value].length === 0) {
        this[`is${type}`] = true
      } else {
        this[`is${type}`] = false
      }
    }
  }
}
</script>

<style scoped>

</style>

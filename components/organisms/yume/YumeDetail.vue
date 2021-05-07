<template>
<<<<<<< HEAD:components/organisms/yume/YumeDetail.vue
  <div class="bg-white rounded-frame p-4 border-box">
    <div class="mb-3">
      <app-heading :level="3" size="xl">
        {{ title }}
      </app-heading>
    </div>
    <div
      class="
        mb-3
        font-bold
        text-sm
        inline-block
        min-w-button
        text-center
        leading-9
        rounded-full
        bg-opacity-30
        bg-primary
        text-primary"
    >
      {{ category.text }}
=======
  <div class="bg-white rounded-frame p-4 border-box shadow-md">
    <div class="flex">
      <div>
        <div class="mb-3">
          <app-heading :level="3" size="xl">
            {{ title }}
          </app-heading>
        </div>
        <div
          class="
          mb-3
          font-bold
          text-sm
          inline-block
          min-w-button
          text-center
          leading-9
          rounded-full
          bg-opacity-30
          bg-primary
          text-primary"
        >
          {{ category }}
        </div>
      </div>
      <div class="ml-auto">
        <img :src="crescentMoon.src" :alt="crescentMoon.alt">
      </div>
>>>>>>> 8716a126f4c5b43e973a5c4f78b900077ee2820d:components/molecules/yume/YumeDetail.vue
    </div>

    <div class="mb-4 w-full relative">
      <template v-for="(value, index) in getTextLineArray">
        <span :key="index" class="border-b border-gray-400 w-full inline-block leading-9 h-9">{{ value }}</span>
      </template>
    </div>
    <div v-if="type === 'preview'" class="mb-4 flex flex-start justify-end">
      <div class="mr-4">
<<<<<<< HEAD:components/organisms/yume/YumeDetail.vue
        <app-button color="secondary" @click="changeDialogState">
=======
        <app-button color="secondary" @click="$emit('click')">
>>>>>>> 8716a126f4c5b43e973a5c4f78b900077ee2820d:components/molecules/yume/YumeDetail.vue
          ユメを記憶する
        </app-button>
      </div>
      <div>
        <app-button color="gray-400" @click="backFormTo">
          戻る
        </app-button>
      </div>
    </div>
    <transition>
      <app-dialog
        v-show="dialog"
        title="確認"
        :text="'この内容で投稿します。本当によろしいですか？'"
        :is-close-action="true"
        @close-dialog="changeDialogState"
        @click="send"
      />
    </transition>
  </div>
</template>

<script>
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppButton from '@/components/atoms/forms/AppButton'
import AppDialog from '@/components/molecules/commons/AppDialog'

export default {
  name: 'YumeDetail',
  components: { AppDialog, AppButton, AppHeading },
  props: {
    type: {
      type: String,
      default: 'detail'
    },
    title: {
      type: String,
      default: '',
      require: true
    },
    category: {
      type: Object,
      default () {
        return {}
      },
      require: true
    },
    text: {
      type: String,
      default: '',
      require: true
    }
  },
  data () {
    return {
<<<<<<< HEAD:components/organisms/yume/YumeDetail.vue
      dialog: false
=======
      crescentMoon: {
        src: require('@/assets/images/icons/crescent-moon.svg'),
        alt: 'crescent-moon'
      }
>>>>>>> 8716a126f4c5b43e973a5c4f78b900077ee2820d:components/molecules/yume/YumeDetail.vue
    }
  },
  computed: {
    getTextLineArray () {
      const array = this.text.split('\n')
      while (array.length < 4) {
        array.push(null)
      }
      return array
    }
  },
  methods: {
    backFormTo () {
      const query = {
        title: this.title,
        category: this.category,
        text: this.text
      }
      this.$router.push({ path: '/yume_tayori', query })
    },
    changeDialogState () {
      this.dialog = !this.dialog
    },
    async send () {
      // パラメータの定義
      const title = this.title
      const category = this.category.doc.ref
      const text = this.text
      const user = this.$auth.getUser({ doc: true })
      // ドキュメントの作成
      const id = await this.$api.yume.addYumeTayori(title, category, text, user)
      if (id) {
        // ドキュメントの作成に成功すればユメ詳細画面に遷移
        this.$router.push('/yume_kioku/' + id)
      }
    }
  }
}
</script>

<style scoped>

</style>

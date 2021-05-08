<template>
  <div class="rounded-frame shadow-md py-10 px-4 border-box bg-white ">
    <div v-show="!show" class="flex justify-center items-center min-h-content">
      <app-loading-animation />
    </div>
    <div v-show="show" class="flex flex-col items-center">
      <div class="mb-4 w-full">
        <div class="w-full text-center relative mb-4">
          <img class="inline-block w-1/2" src="@/assets/images/menu_icons/yume_post.svg" alt="yume_post">
          <div class="absolute w-1/5 bottom-1/4  left-0 right-0 mx-auto">
            <img
              v-if="canAccept"
              class="w-full h-3/4"
              src="@/assets/images/icons/letter.svg"
              alt="手紙"
            >
          </div>
        </div>
      </div>
      <p v-if="!canAccept" class="text-center mb-4 text-danger">
        お便りは来ていないみたいです。<br>
        また明日確認してみましょう！
      </p>
      <div v-else>
        <app-button :disabled="!canAccept" @click="accept">
          受け取り
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'
import AppLoadingAnimation from '@/components/atoms/loading/AppLoadingAnimation'

export default {
  name: 'YumeAcceptForm',
  components: { AppLoadingAnimation, AppButton },
  data () {
    return {
      canAccept: false,
      show: false
    }
  },
  async fetch () {
    const user = this.$auth.getUser({ doc: true })
    const setting = await this.$api.user.getUserSettingByUser(user)
    if (!setting) { return false }
    this.canAccept = setting.can_accept_yume_post
    this.show = true
  },
  methods: {
    async accept () {
      const user = this.$auth.getUser({ doc: true })
      const id = await this.$api.yume.addYumePost(user)
      return this.$router.push('/yume_kioku/' + id)
    }
  }
}
</script>

<style scoped>

</style>

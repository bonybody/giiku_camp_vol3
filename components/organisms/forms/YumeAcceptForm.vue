<template>
  <div class="rounded-frame shadow-md py-10 px-4 border-box bg-white flex flex-col items-center">
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
    <div>
      <app-button @click="accept">
        受け取り
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'

export default {
  name: 'YumeAcceptForm',
  components: { AppButton },
  data () {
    return {
      canAccept: true
    }
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

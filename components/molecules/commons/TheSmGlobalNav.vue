<template>
  <div class="absolute z-top w-full min-h-full top-0 left-0 bg-black bg-opacity-30">
    <nav class="border-box p-2 bg-white w-56 min-h-full absolute top-0 right-0 z-20">
      <ul>
        <template v-for="(menu, index) in menus">
          <li :key="index" class="mb-2">
            <app-button :variable="true" :left="true" @click="routerPush(menu.to)">
              {{ menu.text }}
            </app-button>
          </li>
        </template>
      </ul>
      <div>
        <div>
          <app-button :variable="true" :bg-paint="true" @click="close">
            閉じる
          </app-button>
        </div>
      </div>
    </nav>
    <div aria-label="margin-area" class="absolute w-full h-full z-10" @click="close" />
  </div>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'
export default {
  name: 'TheSmGlobalNav',
  components: { AppButton },
  data () {
    return {
      menus: [
        {
          text: 'ユメポスト',
          to: '/yume_post'
        },
        {
          text: 'ユメタヨリ',
          to: '/yume_tayori'
        },
        {
          text: 'ユメの記憶',
          to: '/yume_kioku'
        },
        {
          text: '設定',
          to: '/setting'
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('click')
    },
    routerPush (to) {
      this.$router.push(to)
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
</style>

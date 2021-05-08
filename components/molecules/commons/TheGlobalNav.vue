<template>
  <nav>
    <ul class="flex">
      <template v-for="(menu, index) in menus">
        <li :key="index" class="ml-4">
          <nuxt-link :to="menu.to">
            <app-button :to="menu.to">
              {{ menu.text }}
            </app-button>
          </nuxt-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import AppButton from '@/components/atoms/forms/AppButton'
export default {
  name: 'TheGlobalNav',
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
  }
}
</script>

<style scoped>

</style>

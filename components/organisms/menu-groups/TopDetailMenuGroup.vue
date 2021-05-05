<template>
  <div>
    <ul>
      <template v-for="(menu, index) in menus">
        <li :key="index" class="mb-3">
          <detail-menu :title="menu.title" :text="menu.text" :link="menu.link" :image="menu.image" :color="menu.color" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import DetailMenu from '@/components/molecules/menus/DetailMenu'
export default {
  name: 'TopDetailMenuGroup',
  components: { DetailMenu },
  data () {
    return {
      menus: [
        {
          title: 'ユメポスト',
          text: '誰かのユメを受け取る場所<br>' +
              '今日もとどいているかも...<br>' +
              '一緒に見にきませんか？',
          link: { text: 'ポストを確認', to: 'post' },
          image: require('@/assets/images/menu_icons/yume_post.svg'),
          color: 'primary'
        },
        {
          title: 'ユメタヨリ',
          text: '誰かにユメが届く場所<br>' +
              'どんなユメでも構いません<br>' +
              '貴方のユメを教えてください',
          link: { text: 'ユメを書く', to: '#' },
          image: require('@/assets/images/menu_icons/yume_tayori.svg'),
          color: 'secondary'
        },
        {
          title: 'ユメの記憶',
          text: '届いたユメ、書いたユメを<br>' +
              '記憶しておく場所です<br>' +
              'ユメを思い出してみましょう',
          link: { text: '記憶を辿る', to: 'yume_kioku' },
          image: require('@/assets/images/menu_icons/yume_kioku.svg'),
          color: 'slim'
        },
        {
          title: '設定',
          text: 'サービスの設定を行います。',
          link: { text: '設定', to: 'setting' },
          image: require('@/assets/images/menu_icons/setting.svg'),
          color: 'gray-400'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

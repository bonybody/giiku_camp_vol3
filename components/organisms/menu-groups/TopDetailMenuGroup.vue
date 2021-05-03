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
import detailMenu from '@/components/molecules/menus/detailMenu'
export default {
  name: 'TopDetailMenuGroup',
  components: { detailMenu },
  data () {
    return {
      menus: [
        {
          title: 'ユメポスト',
          text: '誰かのユメを受け取る場所<br>' +
              '今日もとどいているかも...<br>' +
              '一緒に見にきませんか？',
          link: { text: 'ポストを確認', to: 'post' },
          image: require('@/assets/images/menu_icons/yume_post.png'),
          color: 'primary'
        },
        {
          title: 'ユメタヨリ',
          text: '誰かにユメが届く場所<br>' +
              'どんなユメでも構いません<br>' +
              '貴方のユメを教えてください',
          link: { text: 'ユメを書く', to: '#' },
          image: require('@/assets/images/menu_icons/yume_tayori.png'),
          color: 'secondary'
        },
        {
          title: 'ユメの記憶',
          text: '届いたユメ、書いたユメを<br>' +
              '記憶しておく場所です<br>' +
              'ユメを思い出してみましょう',
          link: { text: '記憶を辿る', to: '#' },
          image: require('@/assets/images/menu_icons/yume_kioku.png'),
          color: 'current'
        },
        {
          title: '設定',
          text: 'サービスの設定を行います。',
          link: { text: '設定', to: 'setting' },
          image: require('@/assets/images/menu_icons/setting.png'),
          color: 'current'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

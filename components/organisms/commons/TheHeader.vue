<template>
  <header class="bg-white shadow-md h-12">
    <div class="flex justify-between h-full items-center max-w-screen-lg box-border p-1 m-auto">
      <nuxt-link class="flex items-center h-full" to="/">
        <div class="h-full mr-1">
          <img class="h-full" :src="siteLogo.src" :alt="siteLogo.alt">
        </div>
        <app-heading :level="1" :size="'2xl'">
          ユメタヨリ
        </app-heading>
      </nuxt-link>
      <div class="sm:block hidden">
        <the-global-nav />
      </div>
      <div class="h-full block sm:hidden">
        <app-hamburger-button @click="changeSmMenuState" />
      </div>
      <transition>
        <the-sm-global-nav v-show="activeSmMenu" @click="changeSmMenuState" />
      </transition>
    </div>
  </header>
</template>

<script>
import TheGlobalNav from '@/components/molecules/commons/TheGlobalNav'
import AppHeading from '@/components/atoms/headings/AppHeading'
import AppHamburgerButton from '@/components/atoms/forms/AppHamburgerButton'
import TheSmGlobalNav from '@/components/molecules/commons/TheSmGlobalNav'

export default {
  name: 'TheHeader',
  components: {
    TheSmGlobalNav,
    AppHamburgerButton,
    AppHeading,
    TheGlobalNav
  },
  data () {
    return {
      activeSmMenu: false,
      siteLogo: {
        src: require('@/assets/images/icons/yumetayori-logo.svg'),
        alt: 'ユメタヨリ'
      }
    }
  },
  methods: {
    changeSmMenuState () {
      this.activeSmMenu = !this.activeSmMenu
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 150ms
}

.v-enter, .v-leave-to {
  opacity: 0
}

</style>

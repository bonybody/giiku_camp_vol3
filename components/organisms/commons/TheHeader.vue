<template>
  <header class="bg-white shadow-md h-12">
    <div class="flex h-full justify-between items-center max-w-screen-lg box-border p-1 m-auto">
      <app-heading :level="1" :size="'2xl'">
        <nuxt-link class="flex items-center h-full" to="/">
          <div class="mr-1">
            <img class="h-logo" :src="siteLogo.src" :alt="siteLogo.alt">
          </div>
          ユメタヨリ
        </nuxt-link>
      </app-heading>
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

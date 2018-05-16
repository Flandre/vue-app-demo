<template>
  <div class="main-menu">
    <div class="menu-item" v-for="i in navData">
      <router-link class="a" :to="i.url">
        {{i.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        navData: [
          {
            name: '首页',
            url: '/',
            disabled: false
          },
          {
            name: '学习',
            url: '/study',
            disabled: false
          },
          {
            name: '发现',
            url: '/find',
            disabled: false
          },
          {
            name: '我的',
            url: '/home',
            disabled: false
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>

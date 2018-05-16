<template>
  <div class="main-menu">
    <div class="menu-item" v-for="i in navData">
      <template v-if="i.type === 'menu'">
        <router-link class="item-box" :to="i.url">
          {{i.name}}
        </router-link>
      </template>
      <template v-else>
        {{i.name}}
      </template>
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
            url: '/index',
            disabled: false,
            type: 'menu'
          },
          {
            name: '学习',
            url: '/study',
            disabled: false,
            type: 'menu'
          },
          {
            name: '主按钮',
            type: 'button'
          },
          {
            name: '发现',
            url: '/find',
            disabled: false,
            type: 'menu'
          },
          {
            name: '我的',
            url: '/home',
            disabled: false,
            type: 'menu'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .main-menu {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #B2B2B2;
    display: flex;
    justify-content: space-around;
  }

</style>

<style>
  #app {
    margin-bottom: 50px;
  }
</style>

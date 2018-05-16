<template>
  <div class="main-menu">
    <div class="menu-item" v-for="i in navData">
      <template v-if="i.type === 'menu'">
        <router-link :class="['item-box', i.showClass]" active-class="active" :to="i.url">
          <span>{{i.name}}</span>
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
            type: 'menu',
            showClass: 'index'
          },
          {
            name: '学习',
            url: '/study',
            disabled: false,
            type: 'menu',
            showClass: 'study'
          },
          {
            name: '主按钮',
            type: 'button'
          },
          {
            name: '发现',
            url: '/find',
            disabled: false,
            type: 'menu',
            showClass: 'find'
          },
          {
            name: '我的',
            url: '/home',
            disabled: false,
            type: 'menu',
            showClass: 'home'
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
    align-items: center;
  }
  .main-menu .item-box{
    display: block;
    width: 48px;
    height: 40px;
    text-align: center;
    padding-top: 26px;
    font-size: 10px;
    line-height: 14px;
    color: #A4B2C3;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: center 2px;
  }
  .main-menu .item-box.active {
    color: #45A4F7;
  }
  .main-menu .item-box.index {
    background-image:url('../assets/MenuSelect/index.png')
  }
  .main-menu .item-box.study {
    background-image:url('../assets/MenuSelect/study.png')
  }
  .main-menu .item-box.find {
    background-image:url('../assets/MenuSelect/find.png')
  }
  .main-menu .item-box.home {
    background-image:url('../assets/MenuSelect/home.png')
  }
  .main-menu .item-box.active.index {
    background-image:url('../assets/MenuSelect/index-a.png')
  }
  .main-menu .item-box.active.study {
    background-image:url('../assets/MenuSelect/study-a.png')
  }
  .main-menu .item-box.active.find {
    background-image:url('../assets/MenuSelect/find-a.png')
  }
  .main-menu .item-box.active.home {
    background-image:url('../assets/MenuSelect/home-a.png')
  }


</style>

<style>
  #app {
    margin-bottom: 50px;
  }
</style>

<template>
  <div class="credit-know">
    <NavigatorBar title="了解分数" bgColor="#45A4F7"/>
    <div class="menu-item" v-for="i in creditType">
      <router-link :class="['item-box', i.showClass]" active-class="active" :to="i.url" replace>
        <span>{{i.name}}</span>
      </router-link>
    </div>
    <div >当前状态：？？？</div>
    <router-view/>
    <p>了解分数页面</p>
  </div>
</template>

<script>
  import router from '@/router/index'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "credit-know",
    data() {
      return {
        creditType: [
          {
            name: '身份',
            url: '/creditKnow/identity',
            showClass: 'identity'
          },
          {
            name: '守法',
            url: '/creditKnow/lawAbiding',
            showClass: 'lawAbiding'
          },
          {
            name: '履约',
            url: '/creditKnow/appointment',
            showClass: 'appointment'
          },
          {
            name: '学习',
            url: '/creditKnow/learn',
            showClass: 'study'
          },
          {
            name: '行为',
            url: '/creditKnow/conduct',
            showClass: 'conduct'
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
      })
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    components: {
      NavigatorBar
    },
    beforeRouteUpdate (to, from, next) {
      console.log(to)
      console.log(from)
      next()
    }
  }
</script>

<style scoped>
  .credit-know {
    margin-top: 44px;
  }
</style>

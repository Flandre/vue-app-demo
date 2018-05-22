<template>
  <div class="credit-know">
    <NavigatorBar title="了解分数" bgColor="#45A4F7"/>
    <div class="know-container">
      <div class="know-info-container">

      </div>
      <img src="../assets/pages/creditKnow/bg-border.png" alt="">
    </div>
    <div class="menu-item" v-for="i in creditType">
      <router-link :class="['item-box', i.showClass]" active-class="active" :to="i.url" replace>
        <span>{{i.name}}</span>
      </router-link>
    </div>
    <div >{{type}}</div>
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
        ],
        type: 'identity'
      }
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    components: {
      NavigatorBar
    },
    beforeRouteUpdate (to, from, next) {
      this.creditType.forEach(val => {
        if(to.fullPath == val.url)
          this.type =  val.showClass
      })
      console.log(this.type)
      next()
    }
  }
</script>
<style lang="less" scoped>
  .credit-know {
    margin-top: 44px;
    .know-container {
      background: #fff;
      .know-info-container {
        height: 144px;
        background: #45A4F7
      }
    }
  }
</style>

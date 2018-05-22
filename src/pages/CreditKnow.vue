<template>
  <div class="credit-know">
    <NavigatorBar title="了解分数" bgColor="#45A4F7"/>
    <div class="know-container">
      <div class="know-info-container">
        <img src="../assets/pages/creditKnow/credit-num.png" class="credit-num">
        <div :class="['radar-main', showType]">
          <div class="icon identity"></div>
          <div class="icon lawAbiding"></div>
          <div class="icon appointment"></div>
          <div class="icon learn"></div>
          <div class="icon conduct"></div>
        </div>
      </div>
      <img src="../assets/pages/creditKnow/bg-border.png" class="border">
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
            showClass: 'learn'
          },
          {
            name: '行为',
            url: '/creditKnow/conduct',
            showClass: 'conduct'
          }
        ],
        showType: 'show-identity'
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
          this.showType =  `show-${val.showClass}`
      })
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
        background: #45A4F7;
        position: relative;
        .credit-num {
          width: 137px;
          height: 61px;
          position: absolute;
          top: 30px;
          left: 30px;
        }
        .radar-main {
          width: 106px;
          height: 100px;
          position: absolute;
          right: 30px;
          top: 16px;
          background: url("../assets/pages/creditKnow/radar.png") center no-repeat;
          background-size: 78px 74px;
          .icon {
            width: 15px;
            height: 15px;
            background-size: 15px 15px;
            background-repeat: no-repeat;
            background-position: center center;
            position: absolute;
            &.identity {
              background-image: url("../assets/pages/creditKnow/identity.png");
              right: 45px;
              top: -3px;
            }
            &.lawAbiding {
              background-image: url("../assets/pages/creditKnow/lawAbiding.png");
              right: 95px;
              top: 34px;
            }
            &.appointment {
              background-image: url("../assets/pages/creditKnow/appointment.png");
              right: -2px;
              top: 34px;
            }
            &.learn {
              background-image: url("../assets/pages/creditKnow/learn.png");
              right: 13px;
              top: 87px;
            }
            &.conduct {
              background-image: url("../assets/pages/creditKnow/conduct.png");
              right: 79px;
              top: 87px;
            }
          }
          &.show-identity > .icon.identity {
            background-image: url("../assets/pages/creditKnow/identity-a.png");
          }
          &.show-lawAbiding > .icon.lawAbiding {
            background-image: url("../assets/pages/creditKnow/lawAbiding-a.png");
          }
          &.show-appointment > .icon.appointment {
            background-image: url("../assets/pages/creditKnow/appointment-a.png");
          }
          &.show-learn > .icon.learn {
            background-image: url("../assets/pages/creditKnow/learn-a.png");
          }
          &.show-conduct > .icon.conduct {
            background-image: url("../assets/pages/creditKnow/conduct-a.png");
          }
        }
      }
      .border {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
</style>

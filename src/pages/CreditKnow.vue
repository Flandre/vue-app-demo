<template>
  <div class="credit-know">
    <NavigatorBar title="了解分数" bgColor="#45A4F7"/>
    <div class="know-container">
      <div class="know-info-container">
        <img src="../assets/pages/creditKnow/credit-num.png" class="credit-num">
        <div :class="['radar-main', activeClass]">
          <div class="icon identity"></div>
          <div class="icon lawAbiding"></div>
          <div class="icon appointment"></div>
          <div class="icon learn"></div>
          <div class="icon conduct"></div>
        </div>
      </div>
      <img src="../assets/pages/creditKnow/bg-border.png" class="border">
      <div class="menu-box">
        <template v-for="i in creditType">
          <router-link :class="['menu-item', i.showClass]" active-class="active" :to="i.url" replace @click.native="tapClick">
            <div class="icon"></div>
            <span>{{i.name}}</span>
          </router-link>
        </template>
        <div class="arrow-container">
          <div class="arrow-line">
            <img src="../assets/pages/creditKnow/arrow.png" class="arrow-main" :style="{left : arrowLeft}"/>
          </div>
        </div>
      </div>
      <div class="credit-type">
        <router-view/>
      </div>
    </div>
    <div class="chart-container">
      <h3 class="title">近6个月您的驾驶信用</h3>
      <div class="chart-box">
        <img src="../assets/pages/creditKnow/chart.png">
      </div>
    </div>
    <div class="credit-up" @click="tapUpscore">
      <span>提升驾驶信用</span>
    </div>
  </div>
</template>

<script>
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
        activeClass: 'show-identity',
        arrowLeft: '25px'
      }
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 固定箭头位置 */
      this.$nextTick(function () {
        this.arrowLeft = `${document.querySelector('a.active').offsetLeft - 18}px`
      })
    },
    methods: {
      tapClick(e){
        this.arrowLeft = `${e.target.offsetLeft - 18}px`
      },
      tapUpscore() {
        this.$router.push('/creditUp')
      }
    },
    components: {
      NavigatorBar
    },
    beforeRouteUpdate (to, from, next) {
      this.creditType.forEach(val => {
        if(to.fullPath == val.url)
          this.activeClass =  `show-${val.showClass}`
      })
      next()
    }
  }
</script>
<style lang="less" scoped>
  .credit-know {
    padding-top: 44px;
    margin-bottom: 50px;
    .know-container {
      background: #fff;
      margin-bottom: 10px;
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
      .menu-box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: relative;
        bottom: 0;
        padding-bottom: 17px;
        .menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .icon {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 2px 4px #DBDBDB;
            background-size: 24px 24px;
            background-repeat: no-repeat;
            background-position: center center;
          }
          &.identity {
            margin-top: -30px;
            .icon {
              background-image: url("../assets/pages/creditKnow/identityIcon.png");
            }
          }
          &.lawAbiding {
            margin-top: -20px;
            .icon {
              background-image: url("../assets/pages/creditKnow/lawAbidingIcon.png");
            }
          }
          &.appointment {
            margin-top: -15px;
            .icon {
              background-image: url("../assets/pages/creditKnow/appointmentIcon.png");
            }
          }
          &.learn {
            margin-top: -20px;
            .icon {
              background-image: url("../assets/pages/creditKnow/learnIcon.png");
            }
          }
          &.conduct {
            margin-top: -30px;
            .icon {
              background-image: url("../assets/pages/creditKnow/conductIcon.png");
            }
          }
          &.active {
            .icon {
              background-color: #79CEFF;
            }
            &.identity {
              .icon {
                background-image: url("../assets/pages/creditKnow/identityIcon-a.png");
              }
            }
            &.lawAbiding {
              .icon {
                background-image: url("../assets/pages/creditKnow/lawAbidingIcon-a.png");
              }
            }
            &.appointment {
              .icon {
                background-image: url("../assets/pages/creditKnow/appointmentIcon-a.png");
              }
            }
            &.learn {
              .icon {
                background-image: url("../assets/pages/creditKnow/learnIcon-a.png");
              }
            }
            &.conduct {
              .icon {
                background-image: url("../assets/pages/creditKnow/conductIcon-a.png");
              }
            }
          }
          span {
            font-size: 12px;
            line-height: 17px;
            color: #4A4A4A;
            margin-top: 5px;
          }
        }
        .arrow-container {
          position: absolute;
          width: 100%;
          height: 20px;
          bottom: 0;
          left: 0;
          padding: 0 25px;
          .arrow-line {
            width: 100%;
            height: 13px;
            position: relative;
            overflow: hidden;
            &:before {
              content: '';
              display: block;
              width: 100%;
              height: 1px;
              background: #79CEFF;
              position: absolute;
              bottom: 0;
            }
            .arrow-main {
              position: absolute;
              transition: .3s;
              top: 1px;
              width: 27px;
              height: 13px;
            }
          }
        }
      }
    }
    .chart-container {
      background: #fff;
      padding: 15px;
      padding-right: 30px;
      .title {
        color: #4A4A4A;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 30px;
        font-weight: normal;
      }
      .chart-box {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .credit-type {
      padding: 15px 25px 20px
    }
    .credit-up {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: #45A4F7;
      text-align: center;
      span {
        line-height: 50px;
        color: #fff;
        font-size: 17px;
        background: url("../assets/pages/creditKnow/upIcon.png") left center no-repeat;
        background-size: 28px 16px;
        padding-left: 43px
      }
    }
  }
</style>

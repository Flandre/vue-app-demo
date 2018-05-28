<template>
  <div class="insurance-info">
    <NavigatorBar title="保险提醒" bgColor="#fff" navType="light" menuRightText="我的保单" menuRightPath="/"/>
    <div class="insurance-panel" :style="{backgroundColor: panelColor}">
      <div class="insurance-group">
        <div class="insurance-item">
          <p class="info">距交强险到期还剩</p>
          <p class="num">{{remainingDay}}<em>天</em></p>
        </div>
        <div class="insurance-item">
          <p class="info">商业险到期还剩</p>
          <p class="num">{{remainingDay}}<em>天</em></p>
        </div>
      </div>
      <span class="tel">一键报险</span>
    </div>
    <div class="reminding-switch" @click="tapSwitch">
      <div class="info">
        <p class="title">主动提醒</p>
        <p class="desc">到期前90天/30天/10天/3天会提醒您</p>
      </div>
      <div :class="['choose-btn', switchActive? 'active': '']"></div>
    </div>
    <img src="../assets/pages/InsuranceInfo/banner.png" class="banner">
    <div class="link-list">
      <div class="list-item">保险种类 <img src="../assets/pages/InsuranceInfo/Arrow-right.png" class="icon"></div>
      <div class="list-item">理赔流程 <img src="../assets/pages/InsuranceInfo/Arrow-right.png" class="icon"></div>
      <div class="list-item">理赔原则 <img src="../assets/pages/InsuranceInfo/Arrow-right.png" class="icon"></div>
    </div>
    <div class="active-bar">
      <div class="add-button" @click="addInsurance">添加保单</div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "insurance-info",
    data() {
      return {
        panelColor: '#45A4F7',
        remainingDay: 100,
        switchActive: true,
      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.type == 2){
        this.panelColor = '#FBCB61'
        this.remainingDay = 24
      }
    },
    methods: {
      tapSwitch() {
        this.switchActive = !this.switchActive
      },
      addInsurance() {
        this.$router.push({path: '/addInsurance', query: {lsNum: this.$route.query.lsNum}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .insurance-info {
    margin-top: 44px;
    .insurance-panel {
      padding: 30px 0;
      color: #fff;
      text-align: center;
      .insurance-group {
        display: flex;
        justify-content: space-around;
        margin-bottom: 15px;
        .insurance-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .info {
            font-size: 13px;
            margin-bottom: 20px;
          }
          .num {
            font-size: 48px;
            line-height: 48px;
            em {
              font-style: normal;
              font-size: 15px;
              line-height: 15px;
              margin-left: 5px;
            }
          }
        }
      }
      .tel {
        display: inline-block;
        font-size: 13px;
        line-height: 30px;
        padding-left: 35px;
        padding-right: 12px;
        border: 1px solid #FFF;
        border-radius: 30px;
        background: url("../assets/pages/InsuranceInfo/phoneIcon.png") 10px center no-repeat;
        background-size: 16px 16px;
      }
    }
    .reminding-switch {
      background: #fff;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .info {
        .title {
          font-size: 13px;
          line-height: 13px;
          color: #333;
          margin-bottom: 10px;
        }
        .desc {
          font-size: 11px;
          line-height: 11px;
          color: #666;
        }
      }
      .choose-btn {
        box-shadow: #ccc 0 0 0 1px;
        width: 40px;
        height: 20px;
        border-radius: 20px;
        position: relative;
        background-color: #bdbdbd;
        overflow: hidden;
        float: right;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          background-color: #fff;
          z-index: 20;
          transition: all 0.5s;
        }
        &.active {
          background-color: #45A4F7;
          &:before {
            left: 20px;
          }
        }
      }
    }
    .banner {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    .link-list {
      padding-left: 15px;
      background: #fff;
      .list-item {
        font-size: 13px;
        color: #333;
        line-height: 48px;
        border-bottom: 1px solid #dbdbdb;
        padding-right: 15px;
        position: relative;
        .icon {
          position: absolute;
          right: 15px;
          top: 50%;
          width: 8px;
          height: 13px;
          margin-top: -6px;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    .active-bar {
      padding: 30px 25px 0;
      .add-button {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
      }
    }

  }

</style>

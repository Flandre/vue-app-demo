<template>
  <div class="credit-detail">
    <NavigatorBar title="安全出行，驾有所值！" bgColor="#45A4F7"/>
    <div class="credit-container">
      <div class="credit-eval">
        <img src="../assets/pages/creditDetail/eval.png" class="eval">
        <div class="button-box">
          <span class="btn know" @click="tapKnow">了解分数</span>
          <span class="btn up" @click="tapUpscore">提升分数</span>
        </div>
      </div>
      <img src="../assets/pages/creditDetail/bg-border.png" style="width: 100%; display: block;">
      <img src="../assets/pages/creditDetail/explain.png" class="explain">
      <p class="desc">您的驾驶信用已满足VIP会员要求（700分）</p>
    </div>
    <div class="privilege-container">
      <div class="title">
        <h3>好司机特权</h3>
      </div>
      <div class="link-groups">
        <div class="row top-row">
          <div class="link-item" @click="tapView(1)">
            <img src="../assets/pages/creditDetail/icon1.png" class="icon">
            <p class="name">维修折扣</p>
            <p class="desc">享受8.5折优惠</p>
          </div>
          <div class="link-item" @click="tapView(2)">
            <img src="../assets/pages/creditDetail/icon2.png" class="icon">
            <p class="name">免费洗车</p>
            <p class="desc">每月1次免费洗车</p>
          </div>
          <div class="link-item" @click="tapView(3)">
            <img src="../assets/pages/creditDetail/icon3.png" class="icon">
            <p class="name">道路救援</p>
            <p class="desc">专享VIP救援通道</p>
          </div>
        </div>
        <div class="row bottom-row">
          <div class="link-item" @click="tapView(4)">
            <img src="../assets/pages/creditDetail/icon4.png" class="icon">
            <p class="name">车品商城钜惠</p>
            <p class="desc">精选车品9折优惠</p>
          </div>
          <div class="link-item" @click="tapView(5)">
            <img src="../assets/pages/creditDetail/icon5.png" class="icon">
            <p class="name">闪电车贷</p>
            <p class="desc">专享极速服务</p>
          </div>
          <div class="link-item" @click="tapView(6)">
            <img src="../assets/pages/creditDetail/icon6.png" class="icon">
            <p class="name">免费国际驾照</p>
            <p class="desc">一键免费领取</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router/index'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "credit-detail",
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapKnow() {
        router.push('/creditKnow')
      },
      tapUpscore() {
        router.push('/creditUp')
      },
      tapView(id) {
        this.$router.push({path: '/web_view', query: {pid: id}})
      }
    },
    components: {
      NavigatorBar
    }
  }
</script>

<style lang="less" scoped>
  .credit-detail {
    padding-top: 44px;
  }
  .credit-container {
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .credit-eval {
    background: #45A4F7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:  center
  }
  .credit-eval .eval{
    width: 220px;
    height: 168px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .credit-eval .button-box {
    margin-bottom: 8px;
  }
  .credit-eval .button-box .btn{
    display: inline-block;
    border: 1px solid #fff;
    color: #fff;
    padding: 8px 12px 8px 36px;
    font-size: 13px;
    line-height: 13px;
    border-radius: 20px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 13px 4px;
  }
  .credit-eval .button-box .btn.know{
    background-image: url("../assets/pages/creditDetail/knowIcon.png");
    margin-right: 40px;
  }
  .credit-eval .button-box .btn.up{
    background-image: url("../assets/pages/creditDetail/upIcon.png");
  }
  .credit-container .explain {
    display: block;
    margin: 20px auto;
    width: 90%;
  }
  .credit-container .desc {
    text-align: center;
    margin-bottom: 20px;
    color: #45A4F7;
    font-size: 15px;
  }
  .privilege-container {
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    padding: 0 16px;
    .title {
      height: 46px;
      line-height: 46px;
      position: relative;
      h3{
        color: #4A4A4A;
        font-size: 15px;
        font-weight: normal;
      }
      .more{
        display: inline-block;
        color: #666666;
        font-size: 11px;
        line-height: 16px;
        background: url("../assets/pages/creditDetail/moreIcon.png") right center no-repeat;
        background-size: 7px 12px;
        padding-right: 12px;
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
    .link-groups {
      padding-bottom: 35px;
      .row {
        display: flex;
        &.top-row {
          border-bottom: 1px solid #dbdbdb;
          .link-item {
            padding-bottom: 20px;
          }
        }
        &.bottom-row {
          .link-item {
            padding-top: 17px;
          }
        }
        .link-item {
          flex-shrink: unset;
          width: 33.33%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid #dbdbdb;
          &:last-child {
            border-right: 0;
          }
          .icon {
            width: 50px;
            height: 50px;
            margin-bottom: 5px;
          }
          .name {
            font-size: 13px;
            line-height: 13px;
            margin-bottom: 5px;
          }
          .desc {
            color: #666666;
            font-size: 12px;
            line-height: 12px;
          }
        }

      }

    }
  }
</style>

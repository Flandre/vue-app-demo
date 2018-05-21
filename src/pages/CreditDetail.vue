<template>
  <div class="credit-detail">
    <NavigatorBar title="安全出行，驾有所值！" bgColor="#45A4F7"/>
    <div class="credit-container">
      <div class="credit-eval">
        <img src="../assets/pages/creditDetail/eval.png" class="eval">
        <div class="button-box">
          <span class="btn know" @click="tapKnow">了解分数</span>
          <span class="btn up">提升分数</span>
        </div>
      </div>
      <img src="../assets/pages/creditDetail/bg-border.png" style="width: 100%; display: block;">
      <img src="../assets/pages/creditDetail/explain.png" class="explain">
      <p class="desc">您的驾驶信用已满足VIP会员要求（700分）</p>
    </div>
    <div class="privilege-container">
      <div class="title">
        <h3>好司机特权</h3>
        <span class="more">更多特权</span>
      </div>
      <img src="../assets/pages/creditDetail/privilege-list.png" class="privilege-list">
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
      }
    },
    components: {
      NavigatorBar
    }
  }
</script>

<style scoped>
  .credit-detail {
    margin-top: 44px;
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
  }
  .privilege-container .title {
    height: 46px;
    line-height: 46px;
    position: relative;
  }
  .privilege-container .title h3{
    color: #4A4A4A;
    font-size: 15px;
    font-weight: normal;
  }
  .privilege-container .title .more{
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
  .privilege-container .privilege-list{
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
</style>

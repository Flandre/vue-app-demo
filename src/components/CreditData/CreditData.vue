<template>
  <div class="credit-data">
    <div class="credit-num" @click="tapCreditNum">
      <span>{{creditNum}}</span>
    </div>
    <div class="credit-info">
      <span class="info-title">{{creditTitle}}</span>
      <span class="info-desc">{{creditDesc}}</span>
    </div>
    <img src="./images/driver_license.png" class="driver-license" @click="tapLicense">
  </div>
</template>

<script>
  import router from '@/router/index'
  export default {
    name: "credit-data",
    data() {
      return {
        creditNum: 732,
        creditTitle: '信用极好',
        creditDesc: '让良好的驾驶行为带来更多价值！'
      }
    },
    methods: {
      tapCreditNum(e) {
        router.push('/creditDetail')
      },
      tapLicense(e) {
        router.push('/edit_license')
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "HanziPen SC";
    src: url("../../fonts/HanzipenSC-Regular.ttf");
  }
  @font-face {
    font-family: "DIN Condensed";
    src: url("../../fonts/DINCondensedC.ttf");
  }
  .credit-data {
    height: 56px;
    background: #fff;
    margin-top: 3px;
    position: relative;
    padding-left: 93px;
  }
  .credit-data .credit-num {
    width: 68px;
    height: 68px;
    background: url("./images/credit-num.png") center no-repeat;
    background-size: 68px 68px;
    position: absolute;
    top: -16px;
    left: 15px;
  }
  .credit-data .credit-num span{
    display: block;
    font-family: "DIN Condensed";
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    margin-top: 18px;
    text-align: center;
  }
  .credit-data .credit-info {
    overflow: hidden;
  }
  .credit-data .credit-info span{
    text-align: left;
    display: block;
  }
  .credit-data .credit-info .info-title {
    font-family: "HanziPen SC";
    color: #45A4F7;
    font-size: 15px;
    height: 15px;
    margin-top: 9px;
  }
  .credit-data .credit-info .info-desc {
    color: #666666;
    font-size: 10px;
    height: 15px;
    margin-top: 4px;
  }
  .credit-data .driver-license {
    width: 68px;
    height: 52px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>

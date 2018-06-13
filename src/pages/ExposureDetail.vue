<template>
  <div class="exposure-detail">
    <NavigatorBar title="违法曝光" bgColor="#fff" navType="light"/>
    <img src="../assets/pages/ExposureDetail/submitSuccessIcon.png" class="icon">
    <span class="status">提交成功</span>
    <span class="info">等待交管部门审核，审核通过后您将获得<em>200</em>积分奖励。</span>
    <span class="tip">感谢您为维持良好交通秩序、共建交通安全文明作出的贡献！</span>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "exposure-detail",
    components: {
      NavigatorBar
    },
  }
</script>

<style lang="less" scoped>
  .exposure-detail {
    padding-top: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: -1
    }
    .icon {
      width: 39px;
      height: 42px;
      margin-top: 42px;
      margin-bottom: 22px;
    }
    .status {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 30px;
      color: #333;
    }
    .info {
      font-size: 13px;
      line-height: 13px;
      margin-bottom: 20px;
      color: #333;
      em {
        font-style: normal;
        color: #45A4F7;
      }
    }
    .tip {
      font-size: 11px;
      line-height: 11px;
    }

  }
</style>

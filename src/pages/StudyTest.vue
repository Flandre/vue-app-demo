<template>
  <div class="study-test">
    <NavigatorBar title="申请考试成功" bgColor="#fff" navType="light"/>
    <img src="../assets/pages/StudyTest/submitSuccessIcon.png" class="icon">
    <span class="status">申请成功</span>
    <span class="info">考试安排将通过app通知给您，您也可在学习界面中查看。</span>
    <span class="tip"></span>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "study-test",
    components: {
      NavigatorBar
    },
  }
</script>

<style lang="less" scoped>
  .study-test {
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

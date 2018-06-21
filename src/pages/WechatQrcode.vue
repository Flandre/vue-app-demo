<template>
  <div class="wechat-qrcode">
    <NavigatorBar title="官方微信" navType="light" bgColor="#fff"/>
    <div class="qrcode-container">
      <img src="../assets/pages/WechatQrcode/qrcode.png" class="qrcode">
      <p>请将页面截图保存至手机相册</p>
      <p>然后在微信中长按识别二维码添加</p>

    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "wechat-qrcode",
    components: {
      NavigatorBar,
    },
  }
</script>

<style lang="less" scoped>
  .wechat-qrcode {
    padding-top: 44px;
    .qrcode-container {
      margin: 80px auto 0;
      padding: 50px 0;
      background: #fff;
      width: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .qrcode {
        width: 180px;
        height: 180px;
        margin-bottom: 40px;
      }
      p {
        color: #666666;
        font-size: 12px;
        line-height: 17px;
      }
    }

  }
</style>

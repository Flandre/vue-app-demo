<template>
  <div class="my-qrcode">
    <NavigatorBar title="我的二维码" navType="light" bgColor="#fff"/>
    <div class="qrcode-container">
      <div class="license-info">
        <img src="../assets/pages/MyQrcode/avatar.png" class="avatar">
        <div class="info-box">
          <p class="name">汪喵</p>
          <p class="code">2017-07-01 加入 好司机日记</p>
        </div>
      </div>
      <div class="qrcode-box">
        <img src="../assets/pages/LicenseQrcode/qrcode.png">
      </div>
      <p class="desc">扫一扫二维码，和我一起好好开车！</p>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "my-qrcode",
    components: {
      NavigatorBar,
    },
  }
</script>

<style lang="less" scoped>
  .my-qrcode {
    padding-top: 44px;
    .qrcode-container {
      width: 295px;
      padding: 15px 15px 50px;
      margin: 40px auto;
      background: #fff;
      .license-info {
        display: flex;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-right: 15px;
        }
        .info-box {
          .name {
            font-size: 15px;
            line-height: 21px;
            margin-bottom: 2px;
            color: #333;
          }
          .code {
            font-size: 11px;
            line-height: 16px;
            color: #ABABAB;
          }
        }


      }
      .qrcode-box {
        width: 150px;
        height: 150px;
        margin: 50px auto 10px;
        img{
          width: 100%;
          height: auto;
        }
      }
      .desc {
        color: #666666;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
      }
    }
  }
</style>

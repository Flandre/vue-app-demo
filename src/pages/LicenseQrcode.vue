<template>
  <div class="license-qrcode">
    <NavigatorBar title="驾照二维码" bgColor="#45A4F7"/>
    <div class="qrcode-container">
      <div class="license-info">
        <img src="../assets/pages/LicenseQrcode/avatar.png" class="avatar">
        <div class="info-box">
          <p class="name">李明明</p>
          <p class="code">******   ******   **3482</p>
        </div>
      </div>
      <div class="qrcode-box">
        <img src="../assets/pages/LicenseQrcode/qrcode.png">
      </div>
      <p class="desc">扫描二维码查看我的驾驶证信息</p>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-qrcode",
    components: {
      NavigatorBar,
    },
  }
</script>

<style lang="less" scoped>
  .license-qrcode {
    margin-top: 44px;
    &:before {
      content: '';
      min-height: 100%;
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #45A4F7;
      z-index: -1;
    }
    .qrcode-container {
      width: 295px;
      padding: 30px 30px 20px;
      margin: 60px auto;
      background: #fff;
      .license-info {
        display: flex;
        .avatar {
          width: 60px;
          height: 60px;
          margin-right: 15px;
        }
        .info-box {
          .name {
            font-size: 17px;
            line-height: 24px;
            margin-bottom: 10px;
            color: #333;
          }
          .code {
            font-size: 13px;
            line-height: 18px;
            color: #666;
            margin-bottom: 10px;
          }
        }


      }
      .qrcode-box {
        padding: 10px;
        margin-bottom: 10px;
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

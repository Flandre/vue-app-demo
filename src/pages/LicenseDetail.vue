<template>
  <div class="license-detail">
    <NavigatorBar title="驾照详情" navType="light" bgColor="#fff"/>
    <div class="cell-title">证件照片</div>
    <div class="avatar-container">
      <img src="../assets/pages/LicenseDetail/avatar.png">
    </div>
    <div class="cell-title">证件信息</div>
    <div class="info-list">
      <div class="info-item">
        <p class="title">证号</p>
        <p class="info">110100119900101999x</p>
      </div>
      <div class="info-item">
        <p class="title">准驾车型</p>
        <p class="info">C1</p>
      </div>
      <div class="info-item">
        <p class="title">初次领证日期</p>
        <p class="info">2012-01-13</p>
      </div>
      <div class="info-item">
        <p class="title">有效期限</p>
        <p class="info">2012-01-13 至 2018-01-13</p>
      </div>
      <div class="info-item">
        <p class="title">档案编号</p>
        <p class="info">110100000000</p>
      </div>
    </div>
    <div class="cell-title">个人资料</div>
    <div class="info-list">
      <div class="info-item">
        <p class="title">姓名</p>
        <p class="info">李明明</p>
      </div>
      <div class="info-item">
        <p class="title">性别</p>
        <p class="info">女</p>
      </div>
      <div class="info-item">
        <p class="title">国籍</p>
        <p class="info">中国</p>
      </div>
      <div class="info-item">
        <p class="title">住址</p>
        <p class="info">北京市朝阳区小庄金台西路188号</p>
      </div>
      <div class="info-item">
        <p class="title">出生日期</p>
        <p class="info">1990-01-01</p>
      </div>
    </div>

  </div>

</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-detail",
    components: {
      NavigatorBar
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="less" scoped>
  .license-detail {
    margin-top: 44px;
    .cell-title{
      color: #6D6D72;
      font-size: 13px;
      line-height: 30px;
      padding: 0 15px;
      border-bottom: 1px solid #C8C7CC;
    }
    .avatar-container {
      width: 100%;
      height: 160px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .info-list {
      padding-left: 15px;
      background: #fff;
      .info-item {
        padding-right: 15px;
        border-bottom: 1px solid #dbdbdb;
        color: #333;
        font-size: 13px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border-bottom: 0;
        }
      }
    }

  }
</style>

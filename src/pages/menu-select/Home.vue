<template>
  <div class="home">
    <div class="top-panel">
      <div class="top-control">
        <div class="add-friends">
          <img src="../../assets/pages/home/addFriendsIcon.png">
        </div>
        <div class="message">
          <img src="../../assets/pages/home/messageIcon.png">
        </div>
      </div>
      <div class="account-info">
        <div class="avatar-box">
          <img src="../../assets/pages/home/defaultAvatar.png"/>
        </div>
        <div class="account-content">
          <p class="name">汪喵</p>
          <span class="coin">5658积分</span>
        </div>
        <div class="credit-info">
          <p class="title">信用极好</p>
          <p class="num">732</p>
        </div>
      </div>
    </div>
    <div class="entry-list">
      <div class="entry-item card">
        我的驾照
      </div>
      <div class="entry-item car">
        车辆管家
      </div>
      <div class="entry-item study">
        在线学习
      </div>
      <div class="entry-item eval">
        驾评数据
      </div>
    </div>
    <h3>This is home page</h3>
  </div>
</template>

<script>
  export default {
    name: "Home",
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  .home {
    .top-panel {
      background: #45A4F7;
      overflow: hidden;
      .top-control {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        .add-friends,
        .message{
          img {
            width: 22px;
            height: 22px;
          }
        }

      }
      .account-info {
        padding: 10px 15px 20px;
        display: flex;
        position: relative;
        color: #fff;
        .avatar-box {
          width: 60px;
          height: 60px;
          border: 4px solid #fff;
          border-radius: 30px;
          overflow: hidden;
          margin-right: 15px;
          img {
            width: 100%;
            height: auto;
          }
        }
        .account-content {
          padding-top: 10px;
          .name {
            font-size: 15px;
            line-height: 21px;
            font-weight: bold;
            margin-bottom: 3px;
          }
          .coin {
            display: inline-block;
            color: rgba(255, 255, 255, .7);
            font-size: 13px;
            line-height: 18px;
            padding: 0 9px;
            border: 1px solid rgba(255, 255, 255, .7);
            border-radius: 10px;
          }
        }
        .credit-info {
          width: 120px;
          height: 44px;
          background: url("../../assets/pages/home/credit-bg.png") center no-repeat;
          background-size: 120px 44px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -22px;
          padding: 6px 32px 6px 30px;
          .title {
            text-align: right;
            font-size: 10px;
            line-height: 10px;
            margin-bottom: 3px;
          }
          .num {
            text-align: right;
            font-size: 22px;
            line-height: 22px;
          }
        }
      }
    }
    .entry-list {
      padding: 10px 0 16px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      .entry-item {
        display: block;
        min-width: 32px;
        font-size: 12px;
        line-height: 12px;
        color: #4A4A4A;
        padding-top: 37px;
        background-size: 32px 32px;
        background-repeat: no-repeat;
        background-position: center top;
        &.card {
          background-image: url("../../assets/pages/home/cardIcon.png");
        }
        &.car {
          background-image: url("../../assets/pages/home/carIcon.png");
        }
        &.study {
          background-image: url("../../assets/pages/home/studyIcon.png");
        }
        &.eval {
          background-image: url("../../assets/pages/home/evalIcon.png");
        }
      }
    }
  }

</style>

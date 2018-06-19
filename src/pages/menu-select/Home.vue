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
          <img src="../../assets/pages/home/avatar.png"/>
        </div>
        <div class="account-content">
          <p class="name">汪喵</p>
          <span class="coin">5658积分</span>
        </div>
        <div class="credit-info" @click="tapCredit">
          <p class="title">信用极好</p>
          <p class="num">732</p>
        </div>
      </div>
    </div>
    <div class="entry-list">
      <div class="entry-item card" @click="tapLicense">
        我的驾照
      </div>
      <div class="entry-item car" @click="tapCar">
        车辆管家
      </div>
      <!--<div class="entry-item study">-->
        <!--在线学习-->
      <!--</div>-->
      <div class="entry-item eval" @click="tapEval">
        驾评数据
      </div>
    </div>
    <div class="func-list">
      <div class="list-item">
        <img src="../../assets/pages/home/friendIcon.png">
        <span>我的好友</span>
        <img src="../../assets/pages/home/arrow-right.png" class="arrow">
      </div>
      <div class="list-item">
        <img src="../../assets/pages/home/questionIcon.png">
        <span>常见问题</span>
        <img src="../../assets/pages/home/arrow-right.png" class="arrow">
      </div>
      <div class="list-item">
        <img src="../../assets/pages/home/repeatIcon.png">
        <span>推荐给好友</span>
        <img src="../../assets/pages/home/arrow-right.png" class="arrow">
      </div>
      <div class="list-item">
        <img src="../../assets/pages/home/settingIcon.png">
        <span>设置</span>
        <img src="../../assets/pages/home/arrow-right.png" class="arrow">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapCredit() {
        this.$router.push('/creditDetail')
      },
      tapLicense() {
        if(sessionStorage.getItem('license')){
          this.$router.push('/license_info')
        } else {
          this.$router.push('/license_edit')
        }
      },
      tapCar() {
        this.$router.push({path: '/manager', query: {lsNum: 'N627M9', carType: '广汽 欧蓝德', inspection: 2, insurance: 2}})
      },
      tapEval() {
        this.$router.push('/driving_list')
      }
    }
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
      margin-bottom: 10px;
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
    .func-list {
      padding-left: 15px;
      background: #fff;
      .list-item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        padding-left: 0;
        border-bottom: 1px solid #dbdbdb;
        font-size: 13px;
        color: #4A4A4A;
        img {
          width: 20px;
          height: 20px;
          margin-right: 15px;
          &.arrow {
            width: 7px;
            height: 12px;
            margin-right: 0;
          }
        }
        span {
          flex-grow: 1
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }

</style>

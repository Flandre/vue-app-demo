<template>
  <div class="driving-evaluation">
    <div class="top-control">
      <div class="switch-box">
        <div :class="['choose-btn', isAuto? 'active': '']" @click="tapSwitch"></div>
        <span>自动记录</span>
      </div>
      <img src="../assets/pages/DrivingEvaluation/closeBtn.png" class="close" @click="tapClose">
    </div>
    <div :class="['main-control', status == 2? 'active': '']">
      <img src="../assets/pages/DrivingEvaluation/status0-outer.png" class="outer" v-if="status == 0">
      <img src="../assets/pages/DrivingEvaluation/status1-outer.png" class="outer" v-if="status == 1">
      <img src="../assets/pages/DrivingEvaluation/status2-outer.png" class="outer" v-if="status == 2">
      <img src="../assets/pages/DrivingEvaluation/status-center.png" class="center">
      <img src="../assets/pages/DrivingEvaluation/status0-inner.png" class="inner" v-if="status == 0">
      <img src="../assets/pages/DrivingEvaluation/status1-inner.png" class="inner" v-if="status == 1">
      <img src="../assets/pages/DrivingEvaluation/status2-inner.png" class="inner" v-if="status == 2">
      <img src="../assets/pages/DrivingEvaluation/status0.png" class="btn" v-if="status == 0" @click="tapButton">
      <img src="../assets/pages/DrivingEvaluation/status1.png" class="btn" v-if="status == 1" @click="tapButton">
      <img src="../assets/pages/DrivingEvaluation/status2.png" class="btn" v-if="status == 2" @click="tapButton">
    </div>
    <img src="../assets/pages/DrivingEvaluation/Triangle.png" class="triangle" v-if="!isAuto">
    <p class="manual-info" v-if="!isAuto">点击{{status ? '结束' : '开始'}}记录行程</p>
    <div class="fix-bottom">
      <p class="feedback">行程路线记录不准？</p>
      <div class="driving-info" v-if="status == 2">
        <p class="title">安全起见，请保持专注</p>
        <p class="desc">行车中使用手机，将大幅增加驾车危险系数！</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "driving-evaluation",
    data() {
      return {
        status: 0,
        isAuto: false,
      }
    },
    beforeMount() {
      if(sessionStorage.getItem('drivingIsAuto')){
        this.isAuto = sessionStorage.getItem('drivingIsAuto')
      }
      if(sessionStorage.getItem('drivingStatus')){
        this.status = parseInt(sessionStorage.getItem('drivingStatus'))
      }
    },
    watch: {
      'status' (to, from){
        if(to == 1){
          setTimeout(() => {
            if(this.status == 1){
              this.status = 2
            }
          }, 1000)
        }
        sessionStorage.setItem('drivingStatus', to)
      }
    },
    methods: {
      tapSwitch() {
        if(this.isAuto){
          this.isAuto = false
          this.status = 0
          sessionStorage.removeItem('drivingIsAuto')
        } else {
          this.isAuto = true
          if(this.status == 0){
            this.status = 1
          }
          sessionStorage.setItem('drivingIsAuto', true)
        }
      },
      tapClose() {
        this.$router.goBack()
      },
      tapButton() {
        if(!this.isAuto){
          switch (this.status){
            case 0:
              this.status = 1
              break
            case 1:
            case 2:
              this.status = 0
              break
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .driving-evaluation {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:before {
      display: block;
      background: #fff;
      content: '';
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1
    }
    .top-control {
      width: 100%;
      padding: 30px 30px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .switch-box {
        display: flex;
        align-items: center;
        .choose-btn {
          border: 2px solid rgba(0, 0, 0, .1);
          width: 50px;
          height: 30px;
          border-radius: 30px;
          position: relative;
          background-color: #fff;
          margin-right: 10px;
          &:before {
            content: '';
            position: absolute;
            left: -2px;
            top: -2px;
            width: 28px;
            height: 28px;
            border-radius: 30px;
            background-color: #fff;
            z-index: 20;
            transition: all 0.5s;
            border: 1px solid rgba(0, 0, 0, .1);
            box-shadow: 0 2px 1px rgba(0, 0, 0, .2);
          }
          &.active {
            background-color: #617792;
            &:before {
              left: 20px;
            }
          }
        }
        span {
          color: #666666;
          font-size: 13px;
        }
      }
      .close {
        width: 12px;
        height: 12px;
      }
    }
    .main-control {
      width: 316px;
      height: 316px;
      position: relative;
      .outer {
        width: 316px;
        height: 316px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .center {
        width: 266px;
        height: 266px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -133px;
        margin-top: -133px;
      }
      .inner {
        width: 216px;
        height: 216px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -108px;
        margin-top: -108px;
      }
      .btn {
        width: 116px;
        height: 116px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -58px;
        margin-top: -58px;
      }
      &.active {
        .outer {
          animation: rotateCW 16s linear infinite;
        }
        .center {
          animation: rotateAC 8s linear infinite;
        }
        .inner {
          animation: rotateCW 4s linear infinite;
        }
      }
    }
    .triangle {
      margin-top: 40px;
      width: 20px;
      height: 12px;
      margin-bottom: 5px;
    }
    .manual-info {
      color: #617792;
      font-size: 15px;
      line-height: 21px;
    }
    .fix-bottom {
      position: fixed;
      width: 100%;
      bottom: 0;
      .feedback {
        color: #617792;
        font-size: 12px;
        line-height: 17px;
        margin-bottom: 20px;
        text-align: center;
      }
      .driving-info {
        background: #D84040;
        padding: 15px 10px;
        color: #fff;
        .title {
          font-size: 17px;
          line-height: 24px;
          margin-bottom: 5px;
          text-align: center;
        }
        .desc {
          font-size: 12px;
          line-height: 17px;
          text-align: center;
        }
      }
    }
  }
  @keyframes rotateCW {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes rotateAC {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>

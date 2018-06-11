<template>
  <div class="driving-detail">
    <NavigatorBar title="行程详情" bgColor="#45A4F7"/>
    <div class="top-panel">
      <img src="../assets/pages/DrivingDetail/question.png" class="question" @click="tapQuestion">
      <div class="radar">
        <div class="radar-main">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="150" height="150" viewbox="0 0 150 150">
            <path stroke-width="0" fill="#FFF" :d="svgData"></path>
          </svg>
        </div>
        <div class="radar-info info1">
          <span class="num">{{driveingData.dimension[0]}}</span>
          <span class="desc">操控</span>
        </div>
        <div class="radar-info info2">
          <span class="num">{{driveingData.dimension[1]}}</span>
          <span class="desc">专注</span>
        </div>
        <div class="radar-info info3">
          <span class="num">{{driveingData.dimension[2]}}</span>
          <span class="desc">环境</span>
        </div>
        <div class="radar-info info4">
          <span class="num">{{driveingData.dimension[3]}}</span>
          <span class="desc">疲劳</span>
        </div>
        <div class="radar-info info5">
          <span class="num">{{driveingData.dimension[4]}}</span>
          <span class="desc">速控</span>
        </div>
        <p class="main-score">{{driveingData.score}}</p>
      </div>
    </div>
    <div class="data-container">
      <div class="time">{{driveingData.time}}</div>
      <div class="location">
        <p class="start">{{driveingData.start}}</p>
        <p class="end">{{driveingData.end}}</p>
      </div>
    </div>
    <div class="info-box">
      <div class="info-row">
        <div class="info-item">
          <span class="num">{{driveingData.distance}}<em>km</em></span>
          <span class="desc icon1">行驶里程</span>
        </div>
        <div class="info-item">
          <span class="num">{{(driveingData.distance / driveingData.timeCount * 60).toFixed(1)}}<em>km/h</em></span>
          <span class="desc icon2">平均驾速</span>
        </div>
        <div class="info-item">
          <span class="num">{{driveingData.maxSpeed}}<em>km</em></span>
          <span class="desc icon3">最高驾速</span>
        </div>
      </div>
      <div class="info-row">
        <div class="info-item">
          <span class="num">{{driveingData.timeCount}}<em>min</em></span>
          <span class="desc icon4">行驶时长</span>
        </div>
        <div class="info-item">
          <span class="num">{{driveingData.stopCount}}<em>次</em></span>
          <span class="desc icon5">停车次数</span>
        </div>
        <div class="info-item">
          <span class="num">{{driveingData.stopTime}}<em>min</em></span>
          <span class="desc icon6">停车时长</span>
        </div>
      </div>
    </div>
    <div class="active-bar" @click="tapActionBar">
      <span>查看行车轨迹</span>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "driving-detail",
    data() {
      return {
        dataSource: [
          {
            start: '北辰时代大厦',
            end: '北四环东路辅路',
            time: '2017-07-04 09:31',
            distance: 8.1,
            timeCount: 14,
            score: 72,
            id: 1,
            dimension: [90, 60, 100, 80, 70],
            maxSpeed: 52,
            stopCount: 3,
            stopTime: 2,
          },
          {
            start: '北四环东路辅路',
            end: '南锣鼓巷',
            time: '2017-07-03 20:30',
            distance: 10.4,
            timeCount: 28,
            score: 98,
            id: 2,
            dimension: [100, 100, 100, 90, 100],
            maxSpeed: 52,
            stopCount: 3,
            stopTime: 2,
          },
          {
            start: '花园东路',
            end: '奥林匹克森林公园',
            time: '2017-07-02 08:05',
            distance: 7.6,
            timeCount: 15,
            score: 68,
            id: 3,
            dimension: [40, 80, 80, 70, 70],
            maxSpeed: 52,
            stopCount: 3,
            stopTime: 2,
          },
        ],
        driveingData: {},
        svgData: 'M0,0',
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 格式化数据 */
      this.dataSource.forEach(val => {
        if(val.id == this.$route.query.id){
          this.driveingData = val
        }
      })
      /* 生成svg数据 */
      let data = this.driveingData.dimension, svgD = ''
      data.forEach((val, index) => {
        if(index){
          svgD += ' L'
        } else {
          svgD += 'M'
        }
        svgD += (75 * (val / 100) * Math.sin(72 * index / 180 * Math.PI) + 75)
        svgD += ','
        svgD += (75 * (val / 100) * Math.cos(72 * index / 180 * Math.PI) * -1 + 75)
      })
      this.svgData = svgD
    },
    methods: {
      tapQuestion() {
        this.$router.push('/driving_question')
      },
      tapActionBar() {
        this.$router.push({path: '/driving_map', query: {id: this.driveingData.id}})
      }
    }
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../fonts/DINCondensedC.ttf");
  }
  .driving-detail {
    padding-top: 44px;
    padding-bottom: 50px;
    .top-panel {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #45A4F7;
      margin-bottom: 10px;
      position: relative;
      .question {
        position: absolute;
        width: 16px;
        height: 16px;
        right: 15px;
        top: 15px;
      }
      .radar {
        padding: 45px 32px 21px;
        position: relative;
        .radar-main {
          width: 150px;
          height: 150px;
          background: url("../assets/pages/DrivingDetail/radar-bg.png") center center no-repeat;
          background-size: 150px 150px;
          svg {
            opacity: 0.3;
          }
        }
        .radar-info {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          width: 30px;
          .num {
            font-size: 20px;
            font-family: "DIN Condensed";
            line-height: 20px;
          }
          .desc {
            font-size: 12px;
            line-height: 12px;
          }
          &.info1 {
            top: 0;
            left: 50%;
            margin-left: -15px
          }
          &.info2 {
            top: 78px;
            right: 0;
          }
          &.info5 {
            top: 78px;
            left: 0;
          }
          &.info4 {
            bottom: 0;
            left: 30px;
          }
          &.info3 {
            bottom: 0;
            right: 30px;
          }
        }
        .main-score {
          display: block;
          width: 100%;
          position: absolute;
          top: 96px;
          left: 0;
          font-size: 64px;
          line-height: 64px;
          font-family: "DIN Condensed";
          text-align: center;
          color: #fff;
        }
      }
    }
    .data-container {
      padding: 15px;
      background: #fff;
      .time {
        color: #ABABAB;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 5px;
      }
      .location {
        padding-left: 18px;
        position: relative;
        &:before {
          content: '';
          display: block;
          width: 1px;
          height: 30px;
          border-radius: 8px;
          background: #DBDBDB;
          position: absolute;
          left: 4px;
          top: 5px;
        }
        p {
          color: #333;
          font-size: 13px;
          line-height: 18px;
          margin-bottom: 5px;
          position: relative;
          &:after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 8px;
            background: #45A4F7;
            position: absolute;
            left: -18px;
            top: 5px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

    }
    .info-box{
      padding: 20px 0;
      background: #fff;
      .info-row {
        display: flex;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .info-item {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          .num {
            font-family: "DIN Condensed";
            color: #333333;
            font-size: 28px;
            em {
              font-family: sans-serif;
              font-size: 12px;
              font-style: normal;
            }
          }
          .desc {
            color: #666666;
            font-size: 11px;
            line-height: 16px;
            padding-left: 20px;
            background-size: 16px 16px;
            background-repeat: no-repeat;
            background-position: left center;
            &.icon1 {
              background-image: url("../assets/pages/DrivingDetail/lc_blue.png");
            }
            &.icon2 {
              background-image: url("../assets/pages/DrivingDetail/speed_a.png");
            }
            &.icon3 {
              background-image: url("../assets/pages/DrivingDetail/speed-h.png");
            }
            &.icon4 {
              background-image: url("../assets/pages/DrivingDetail/time_blue.png");
            }
            &.icon5 {
              background-image: url("../assets/pages/DrivingDetail/parking.png");
            }
            &.icon6 {
              background-image: url("../assets/pages/DrivingDetail/time_blue.png");
            }
          }
        }

      }
    }
    .active-bar {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: #45A4F7;
      text-align: center;
      line-height: 50px;
      span{
        font-size: 17px;
        color: #fff;
        background: url("../assets/pages/DrivingDetail/Arrow-right.png") right center no-repeat;
        background-size: 7px 12px;
        padding-right: 17px;
      }
    }
  }
</style>

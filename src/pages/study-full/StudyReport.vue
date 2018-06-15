<template>
  <div class="study-report">
    <div class="report-panel">
      <p class="desc">您已经达到线上学习学分要求，可申请考试</p>
      <div class="panel-box">
        <div class="panel-info">
          <p class="num">{{compulsoryPoint}}</p>
          <p class="text">必学学分</p>
        </div>
        <div class="panel-info">
          <p class="num">{{electivePoint}}</p>
          <p class="text">选学学分</p>
        </div>
        <div class="panel-info">
          <p class="num">{{maxPoint}}</p>
          <p class="text">总学分</p>
        </div>
      </div>
    </div>
    <div class="apply-test">
      <div class="active-bar">
        申请考试
      </div>
    </div>
    <div class="study-logs">
      <p class="title">详细学习记录</p>
      <div class="log-info" v-for="i in classList">
        <div class="info-container">
          <img :src="i.titleImage" class="title-image">
          <div class="info-content">
            <div class="name">{{i.name}}</div>
            <div class="type">{{i.type}}</div>
          </div>
          <div class="point-box">
            <p class="point">{{i.print}}</p>
            <p class="desc">学分</p>
          </div>
        </div>
        <img src="./images/successIcon.png" class="success"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "study-report",
    data() {
      return {
        compulsoryPoint: 8,
        electivePoint: 4,
        maxPoint: 12,
        classList: [
          {
            name: '分心驾驶',
            titleImage: require('./images/titleImge1.png'),
            progress: 60,
            isComplete: false,
            print: 1,
            type: '必学',
          },
          {
            name: '疲劳驾驶',
            titleImage: require('./images/titleImge2.png'),
            progress: 0,
            isComplete: false,
            print: 1,
            type: '必学',
          },
          {
            name: '超速',
            titleImage: require('./images/titleImge3.png'),
            progress: 100,
            isComplete: true,
            print: 2,
            type: '必学',
          },
          {
            name: '闯红灯',
            titleImage: require('./images/titleImge4.png'),
            progress: 0,
            isComplete: false,
            print: 2,
            type: '必学',
          },
          {
            name: '酒驾',
            titleImage: require('./images/titleImge5.png'),
            progress: 80,
            isComplete: false,
            print: 2,
            type: '必学',
          },
          {
            name: '高速公路行车',
            titleImage: require('./images/titleImge6.png'),
            progress: 60,
            isComplete: false,
            print: 1,
            type: '选修',
          },
          {
            name: '道路通行权',
            titleImage: require('./images/titleImge7.png'),
            progress: 0,
            isComplete: false,
            print: 1,
            type: '选修',
          },
          {
            name: '应急处置',
            titleImage: require('./images/titleImge8.png'),
            progress: 100,
            isComplete: true,
            print: 1,
            type: '选修',
          },
          {
            name: '安全文明驾驶',
            titleImage: require('./images/titleImge9.png'),
            progress: 0,
            isComplete: false,
            print: 1,
            type: '选修',
          }
        ]
      }
    },

  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../../fonts/DINCondensedC.ttf");
  }
  .study-report {
    padding-top: 40px;
    .report-panel {
      padding: 20px;
      padding-bottom: 25px;
      background: #45A4F7;
      color: #fff;
      .desc {
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        margin-bottom: 25px;
      }
      .panel-box {
        display: flex;
        justify-content: space-around;
        .panel-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .num {
            font-size: 32px;
            font-family: "DIN Condensed";
            margin-bottom: 4px;
          }
          .text {
            font-size: 11px;
            line-height: 17px;
          }
        }
      }
    }
    .apply-test {
      padding: 15px 35px;
      background: #fff;
      margin-bottom: 10px;
      .active-bar {
        width: 100%;
        height: 40px;
        border: 1px solid #45A4F7;
        color: #45A4F7;
        line-height: 40px;
        text-align: center;
        border-radius: 4px;
      }
    }
    .study-logs {
      background: #fff;
      .title {
        padding: 15px;
        font-size: 15px;
      }
      .log-info {
        margin-left: 20px;
        border-left: 1px solid #dbdbdb;
        padding-left: 25px;
        position: relative;
        .success {
          width: 18px;
          height: 19px;
          position: absolute;
          top: 29px;
          left: -9px;
        }
        .info-container {
          padding: 15px;
          padding-left: 0;
          border-bottom: 1px solid #dbdbdb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title-image {
            width: 80px;
            height: 45px;
            border-radius: 4px;
            margin-right: 15px;
          }
          .info-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            .name {
              font-size: 13px;
              line-height: 15px;
              margin-bottom: 8px;
            }
            .type {
              font-size: 11px;
              padding: 0 10px;
              line-height: 16px;
              background: #45A4F7;
              color: #fff;
              border-radius: 8px;
              display: inline-block;
            }
          }
          .point-box {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .point {
              font-family: "DIN Condensed";
              font-size: 32px;
              line-height: 32px;
              color: #45A4F7;
            }
            .desc {
              font-size: 10px;
              line-height: 10px;
              color: #ABABAB;
            }
          }
        }
      }
    }

  }
</style>

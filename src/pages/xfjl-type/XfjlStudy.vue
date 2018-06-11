<template>
  <div class="xfjl-study">
    <div class="study-list">
      <div class="list-item" v-for="s in studyData">
        <div class="title-image">
          <img :src="s.titleImage">
        </div>
        <div class="info-msg">
          <p class="title">{{s.title}}</p>
          <p class="progress-info">学分进度：{{s.progress}}%</p>
          <div class="progress-box">
            <div class="progress-main" :style="{width: s.progress + '%'}"></div>
          </div>
          <p class="time-count">剩余学习时间：{{s.timeCount}}天</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xfjl-study",
    data() {
      return {
        studyData: [
          {
            titleImage: require('./images/titleImage1.png'),
            title: '故意污损机动车号牌的',
            progress: 60,
            timeCount: 2,
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .xfjl-study {
    .study-list {
      padding-left: 15px;
      background: #fff;
      .list-item {
        padding: 15px;
        padding-left: 0;
        min-height: 98px;
        position: relative;
        border-bottom: 1px solid #dbdbdb;
        &:last-child {
          border-bottom: 0;
        }
        .title-image {
          width: 120px;
          height: 68px;
          position: absolute;
          img {
            width: 100%;
            height: auto;
          }
        }
        .info-msg {
          padding-left: 135px;
          .title {
            font-size: 13px;
            line-height: 13px;
            margin-bottom: 10px;
            color: #333333;
            margin-top: 3px;
          }
          .progress-info {
            font-size: 10px;
            line-height: 10px;
            margin-bottom: 5px;
            color: #666666;
          }
          .progress-box {
            width: 162px;
            height: 4px;
            background: #DBDBDB;
            overflow: hidden;
            border-radius: 4px;
            margin-bottom: 10px;
            position: relative;
            .progress-main {
              position: absolute;
              width: 0;
              height: 4px;
              background: #45A4F7;
              transition: .3s
            }
          }
          .time-count {
            color: #666666;
            font-size: 10px;
            line-height: 10px;
          }
        }
      }
    }

  }
</style>

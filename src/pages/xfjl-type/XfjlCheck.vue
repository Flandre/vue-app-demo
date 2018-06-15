<template>
  <div class="xfjl-complete">
    <div class="xfjl-study">
      <div class="study-list">
        <div class="list-item" v-for="s in studyData">
          <div class="title-image">
            <img :src="s.titleImage">
          </div>
          <div class="info-msg">
            <p class="title">{{s.title}}</p>
            <p class="check-time">申请时间: {{s.checkTime}}</p>
            <span class="status">{{s.status}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xfjl-check",
    data() {
      return {
        studyData: [
          {
            titleImage: require('./images/titleImage2.png'),
            title: '驾驶中型以上载客汽车在城市快速路上行驶超过规定时速未达20％的',
            checkTime: '2017-11-10 10:31',
            status: '交管局受理申请'
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .xfjl-complete {
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
          .check-time {
            font-size: 10px;
            line-height: 10px;
            color: #666666;
            margin-bottom: 12px;
          }
          .status {
            display: inline-block;
            font-size: 10px;
            line-height: 20px;
            padding: 0 10px;
            border-radius: 10px;
            color: #fff;
            background: #45A4F7;
          }
        }
      }
    }
  }
</style>

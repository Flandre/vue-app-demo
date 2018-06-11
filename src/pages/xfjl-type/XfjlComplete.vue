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
            <p class="end-time">完成时间: {{s.endTime}}</p>
            <span class="total">销{{s.total}}分</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xfjl-complete",
    data() {
      return {
        studyData: [
          {
            titleImage: require('./images/titleImage1.png'),
            title: '故意污损机动车号牌的',
            endTime: '2017-08-10 9:00',
            total: 3
          },
          {
            titleImage: require('./images/titleImage1.png'),
            title: '故意污损机动车号牌的',
            endTime: '2017-08-10 9:00',
            total: 3
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
          .end-time {
            font-size: 10px;
            line-height: 10px;
            color: #666666;
            margin-bottom: 12px;
          }
          .total {
            display: block;
            padding-left: 20px;
            color: #45A4F7;
            font-size: 10px;
            line-height: 14px;
            background: url("./images/checkmark.png") left center no-repeat;
            background-size: 14px 14px;
          }
        }
      }
    }
  }
</style>

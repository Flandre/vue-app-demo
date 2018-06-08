<template>
  <div class="driving-list">
    <NavigatorBar title="我的行程" bgColor="#45A4F7"/>
    <div class="top-panel">
      <div class="now-score">
        <p>当前驾值</p>
        <p class="score">{{score}}</p>
        <p>每月1日重新计算</p>
      </div>
      <div class="score-info">
        <div class="info-row">
          <div class="info-item">
            <p class="name">平均得分</p>
            <p class="num">{{averageScore.toFixed(0)}}</p>
          </div>
          <div class="info-item">
            <p class="name">平均驾速</p>
            <p class="num">{{averageSpeed.toFixed(1)}}<em class="small">km/h</em></p>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <p class="name">总行驶里程</p>
            <p class="num">{{distanceCount.toFixed(1)}}<em class="small">km</em></p>
          </div>
          <div class="info-item">
            <p class="name">总行驶时长</p>
            <p class="num">{{timeCount}}<em class="small">min</em></p>
          </div>
        </div>
      </div>
    </div>
    <div class="rank-list">
      <div class="info">
        <p class="title">好友排名</p>
        <p class="desc">7名好友超过了你，加油啊！</p>
      </div>
      <div class="avatar-box">
        <div class="avatar-item">
          <span>第1名</span>
          <img src="../assets/pages/DrivingList/avatar1.png">
        </div>
        <div class="avatar-item">
          <span>第2名</span>
          <img src="../assets/pages/DrivingList/avatar2.png">
        </div>
        <div class="avatar-item">
          <span>第3名</span>
          <img src="../assets/pages/DrivingList/avatar3.png">
        </div>
        <div class="avatar-item">
          <span>第8名</span>
          <img src="../assets/pages/DrivingList/avatar4.png">
        </div>
      </div>
      <img src="../assets/pages/DrivingList/arrow-bottom.png" class="arrow-bottom">
    </div>
    <div class="trip-list">
      <div class="trip-item" v-for="i in dataList" @click="tapItem(i.id, $event)">
        <div class="trip-info">
          <p class="start-time">{{i.time}}</p>
          <p class="location">
            <span>{{i.start}} - {{i.end}}</span>
          </p>
          <div class="trip-data">
            <span class="distance">{{i.distance}}</span>
            <span class="trip-time">{{i.timeCount}}</span>
          </div>
          <span class="trip-score">{{i.score}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "driving-list",
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
          },
          {
            start: '北四环东路辅路',
            end: '南锣鼓巷',
            time: '2017-07-03 20:30',
            distance: 10.4,
            timeCount: 28,
            score: 98,
            id: 2,
          },
          {
            start: '花园东路',
            end: '奥林匹克森林公园',
            time: '2017-07-02 08:05',
            distance: 7.6,
            timeCount: 15,
            score: 68,
            id: 3,
          },
        ],
        dataList: [],
        score: 0,
        timeCount: 0,
        distanceCount: 0,
        averageScore: 0,
        averageSpeed: 0,
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 初始化数据 */
      let source = '012012', scoreCount = 0, allTimeCount = 0, distanceCount = 0, data = []
      source.split('').forEach(index => {
        if(this.dataSource[index]){
          data.push(this.dataSource[index])
          scoreCount += this.dataSource[index].score
          allTimeCount += this.dataSource[index].timeCount
          distanceCount += this.dataSource[index].distance
        }
      })
      this.dataList = data
      this.score = scoreCount
      this.timeCount = allTimeCount
      this.distanceCount = distanceCount
      this.averageScore = scoreCount / source.length
      this.averageSpeed = distanceCount / (allTimeCount / 60)
    },
    methods: {
      tapItem(id, $event){
        this.$router.push({path: '/driving_detail', query: {id: id}})
      }
    }
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../fonts/DINCondensedC.ttf");
  }
  .driving-list {
    margin-top: 44px;
    .top-panel {
      padding: 20px 30px 25px;
      background: #45A4F7;
      color: #fff;
      display: flex;
      justify-content: space-between;
      .now-score {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 12px;
          line-height: 12px;
          opacity: .7;
          &.score {
            opacity: 1;
            font-family: "DIN Condensed";
            font-size: 64px;
            line-height: 64px;
            margin-top: 15px;
            letter-spacing: -5px;
          }
        }
      }
      .score-info {
        display: flex;
        flex-direction: column;
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          .info-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
            .name {
              font-size: 11px;
              line-height: 11px;
              opacity: .7;
              margin-bottom: 5px;
            }
            .num {
              font-size: 28px;
              font-family: "DIN Condensed";
              em {
                font-family: sans-serif;
                font-style: normal;
                font-size: 12px;
                margin-left: 3px;
              }
            }
          }
        }
      }
    }
    .rank-list {
      padding: 10px 15px;
      margin-bottom: 10px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      position: relative;
      .info {
        .title {
          font-size: 12px;
          line-height: 17px;
          margin-bottom: 10px;
          color: #333;
        }
        .desc {
          font-size: 11px;
          line-height: 16px;
          color: #666;
        }
      }
      .avatar-box {
        overflow: hidden;
        .avatar-item {
          float: left;
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:last-child {
            margin-right: 0;
          }
          span {
            font-size: 11px;
            line-height: 16px;
            color: #666;
          }
          img {
            width: 28px;
            height: 28px;
            border-radius: 28px;
          }
        }
      }
      .arrow-bottom {
        display: block;
        width: 24px;
        height: 8px;
        position: absolute;
        top: 0;
        right: 18px;
      }
    }
    .trip-list {
      background: #fff;
      .trip-item {
        padding-left: 60px;
        .trip-info {
          padding: 15px 30px 15px 0;
          border-bottom: 1px solid #ececec;
          position: relative;
          .start-time {
            color: #ababab;
            font-size: 10px;
            line-height: 14px;
            margin-bottom: 10px;
            position: relative;
            &:after {
              content: '';
              display: block;
              width: 9px;
              height: 9px;
              border-radius: 50%;
              position: absolute;
              top: 0px;
              left: -29px;
              background: #45A4F7;
              z-index: 10;
            }
          }
          .location {
            font-size: 13px;
            line-height: 18px;
            color: #333;
            padding-left: 13px;
            padding-right: 56px;
            margin-bottom: 8px;
            background-position: left center;
            background-size: 8px 12px;
            background-repeat: no-repeat;
            background-image: url("../assets/pages/DrivingList/locationIcon.png");
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .trip-data {
            font-size: 11px;
            line-height: 16px;
            span {
              color: #ababab;
              padding-left: 17px;
              margin-right: 20px;
              background-position: left center;
              background-size: 12px 12px;
              background-repeat: no-repeat;
              &.distance {
                background-image: url("../assets/pages/DrivingList/lc_gray.png");
              }
              &.trip-time {
                background-image: url("../assets/pages/DrivingList/time_gray.png");
              }
            }
          }
          .trip-score {
            font-family: "DIN Condensed";
            margin-top: -14px;
            margin-bottom: 0;
            font-size: 48px;
            line-height: 1;
            position: absolute;
            right: 30px;
            top: 50%;
            color: #45A4F7;
          }
          &:after {
            content: '';
            display: block;
            width: 1px;
            height: 100px;
            position: absolute;
            left: -25px;
            bottom: -1px;
            background: #dbdbdb;
          }
        }
        &:first-child {
          .trip-info {
            &:after {
              height: 80px;
            }
          }
        }
        &:last-child {
          .trip-info {
            border-bottom: 0;
          }
        }
      }
    }
  }
</style>

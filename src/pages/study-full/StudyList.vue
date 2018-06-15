<template>
  <div class="study-list">
    <div class="list-group" v-for="g in allData">
      <div class="group-title">
        <h3 class="title">
          {{g.title}}
        </h3>
        <span class="desc">累计学分： <em>{{g.userPrint}}</em>/{{g.maxPrint}}</span>
      </div>
      <div class="item-container">
        <div class="list-item" v-for="i in g.items">
          <div class="item-box" @click="tapVideo(i.linkVideo)">
            <img :src="i.titleImage" class="title-image">
            <img src="./images/successIcon.png" class="success" v-if="i.isComplete">
            <div class="info-msg">
              <p class="name">
                {{i.name}}
              </p>
              <p class="progress-info">
                学分进度：{{i.progress}}%
              </p>
              <div class="progress-box">
                <div class="progress-main" :style="{width: i.progress + '%'}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "study-list",
    data() {
      return {
        allData: [
          {
            title: '必学课程',
            userPrint: 2,
            maxPrint: 8,
            items: [
              {
                name: '分心驾驶',
                titleImage: require('./images/titleImge1.png'),
                progress: 60,
                isComplete: false,
                print: 1,
                type: '必学',
                linkVideo: 0,
              },
              {
                name: '疲劳驾驶',
                titleImage: require('./images/titleImge2.png'),
                progress: 0,
                isComplete: false,
                print: 1,
                type: '必学',
                linkVideo: 0,
              },
              {
                name: '超速',
                titleImage: require('./images/titleImge3.png'),
                progress: 100,
                isComplete: true,
                print: 2,
                type: '必学',
                linkVideo: 0,
              },
              {
                name: '闯红灯',
                titleImage: require('./images/titleImge4.png'),
                progress: 0,
                isComplete: false,
                print: 2,
                type: '必学',
                linkVideo: 0,
              },
              {
                name: '酒驾',
                titleImage: require('./images/titleImge5.png'),
                progress: 80,
                isComplete: false,
                print: 2,
                type: '必学',
                linkVideo: 0,
              },
            ]
          },
          {
            title: '选修课程',
            userPrint: 1,
            maxPrint: 4,
            items: [
              {
                name: '高速公路行车',
                titleImage: require('./images/titleImge6.png'),
                progress: 60,
                isComplete: false,
                print: 1,
                type: '选修',
                linkVideo: 0,
              },
              {
                name: '道路通行权',
                titleImage: require('./images/titleImge7.png'),
                progress: 0,
                isComplete: false,
                print: 1,
                type: '选修',
                linkVideo: 0,
              },
              {
                name: '应急处置',
                titleImage: require('./images/titleImge8.png'),
                progress: 100,
                isComplete: true,
                print: 1,
                type: '选修',
                linkVideo: 0,
              },
              {
                name: '安全文明驾驶',
                titleImage: require('./images/titleImge9.png'),
                progress: 0,
                isComplete: false,
                print: 1,
                type: '选修',
                linkVideo: 0,
              }
            ]
          },
        ]
      }
    },
    methods: {
      tapVideo(vid) {
        this.$router.push({path: '/class_simple', query: {vid: vid}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .study-list {
    padding: 0 20px;
    .list-group {
      .group-title {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 15px;
          line-height: 15px;
          padding-left: 12px;
          border-left: 2px solid #45A4F7;
        }
        .desc {
          font-size: 12px;
          color: #ABABAB;
          em {
            font-style: normal;
            color: #45A4F7;
          }
        }
      }
      .item-container {
        margin-left: -10px;
        margin-right: -10px;
        overflow: hidden;
        .list-item {
          width: 50%;
          padding: 0 10px;
          float: left;
          margin-bottom: 15px;
          .item-box {
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
            .success {
              width: 18px;
              height: 19px;
              position: absolute;
              top: 5px;
              right: 5px;
            }
            .title-image {
              width: 100%;
              height: auto;
              display: block;
            }
            .info-msg {
              padding: 10px;
              .name {
                color: #4A4A4A;
                font-size: 13px;
                line-height: 13px;
                margin-bottom: 10px;
              }
              .progress-info {
                color: #666;
                font-size: 10px;
                line-height: 10px;
                margin-bottom: 5px;
              }
              .progress-box {
                width: 100%;
                height: 4px;
                background: #DBDBDB;
                position: relative;
                overflow: hidden;
                border-radius: 4px;
                .progress-main {
                  height: 4px;
                  background: #45A4F7;
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
            }
          }
        }
      }
    }

  }
</style>

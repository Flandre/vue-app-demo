<template>
  <div class="message-center">
    <NavigatorBar title="消息中心" navType="light" bgColor="#fff"/>
    <div class="message-container">
      <div class="message-item" v-for="m in messageData">
        <div class="time">
          {{m.time}}
        </div>
        <div class="activity-panel" @click="tapDetail(m.pageId, m.title)" v-if="m.type == 'activity'">
          <p class="title">{{m.title}}</p>
          <img :src="m.thumb" class="thumb">
        </div>
        <div class="message-panel" @click="tapMessage" v-else>
          <p>{{m.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "message-center",
    components: {
      NavigatorBar,
    },
    data() {
      return {
        messageData: [
          {
            time: '08:43',
            title: '一张图看懂交通违法处罚细则',
            thumb: require('../assets/pages/MessageCenter/activitypic1.png'),
            type: 'activity',
            pageId: 7
          },
          {
            time: '昨天 13:25',
            title: '您有一条新的交通违法记录！',
            type: 'info',
          },
          {
            time: '2017-12-21 19:02',
            title: '注意！这七种错误的儿童乘车方法很危险',
            thumb: require('../assets/pages/MessageCenter/activitypic2.png'),
            type: 'activity',
            pageId: 8
          },

        ],
        activityData: [
          {
            title: '一张图看懂交通违法处罚细则',
            thumb: require('../assets/pages/MessageCenter/activitypic1.png'),
            pageId: 7
          },
          {
            title: '注意！这七种错误的儿童乘车方法很危险',
            thumb: require('../assets/pages/MessageCenter/activitypic2.png'),
            pageId: 8
          },
          {
            title: '如何挑选合适的儿童安全座椅',
            thumb: require('../assets/pages/MessageCenter/activitypic3.png'),
            pageId: 9
          },
        ]
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapDetail(pid, title) {
        this.$router.push({path: '/web_view', query: {pid: pid, title: title}})
      },
      tapMessage() {
        this.$router.push({path: '/endorsement_more', query: {aid: 0}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .message-center {
    padding-top: 44px;
    .message-container {
      padding: 0 15px;
      .message-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        .time {
          font-size: 11px;
          line-height: 18px;
          background: #A4B2C3;
          color: #fff;
          border-radius: 4px;
          padding: 0 5px;
          margin-bottom: 10px;
        }
        .activity-panel {
          padding: 15px;
          margin-bottom: 10px;
          background: #fff;
          border-radius: 4px;
          .title {
            color: #4A4A4A;
            font-size: 13px;
            margin-bottom: 15px;
          }
          .thumb {
            display: block;
            width: 100%;
            height: auto;
          }
        }
        .message-panel {
          padding: 15px;
          background: #fff;
          font-size: 13px;
          line-height: 20px;
          color: #333333;
          width: 100%;
          text-align: left;
          border-radius: 4px;
        }
      }
    }
  }
</style>

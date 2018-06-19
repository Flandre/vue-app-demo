<template>
  <div class="activity">
    <div class="activity-panel" v-for="i in activityData" @click="tapDetail(i.pageId, i.title)">
      <p class="title">{{i.title}}</p>
      <img :src="i.thumb" class="thumb">
    </div>
  </div>
</template>

<script>
  export default {
    name: "activity",
    data() {
      return {
        activityData: [
          {
            title: '一张图看懂交通违法处罚细则',
            thumb: require('./images/activitypic/activitypic1.png'),
            pageId: 7
          },
          {
            title: '注意！这七种错误的儿童乘车方法很危险',
            thumb: require('./images/activitypic/activitypic2.png'),
            pageId: 8
          },
          {
            title: '如何挑选合适的儿童安全座椅',
            thumb: require('./images/activitypic/activitypic3.png'),
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .activity {
    .activity-panel {
      padding: 15px;
      margin-bottom: 10px;
      background: #fff;
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

  }
</style>

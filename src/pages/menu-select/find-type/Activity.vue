<template>
  <div class="activity">
    <div class="activity-panel" v-for="i in activityData">
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
            title: '文明礼让斑马线，一起来选最美司机',
            thumb: require('./images/activitypic/activitypic1.png')
          },
          {
            title: '小手拉大手 我与家长共答题',
            thumb: require('./images/activitypic/activitypic2.png')
          },
          {
            title: '冬季养护爱车都有什么神操作？',
            thumb: require('./images/activitypic/activitypic3.png')
          },
        ]
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
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

<template>
  <div class="community">
    <div class="community-item" v-for="(c, index) in groupData" @click="tapItem(c.tid)">
      <img :src="c.thumb" class="thumb">
      <span class="name">{{c.name}}</span>
      <span :class="['btn', c.isFollow ? 'follow' : '']" @click="tapFollow(index, $event)">{{c.isFollow ? '已关注': '+ 关注'}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "community",
    data() {
      return {
        groupData: [
          {
            name: '道路正能量',
            thumb: require('./images/groupIcons/groupIcon1.png'),
            isFollow: false,
            tid: 0
          },
          {
            name: '车主互助',
            thumb: require('./images/groupIcons/groupIcon2.png'),
            isFollow: false,
            tid: 1
          },
          {
            name: '路况分享',
            thumb: require('./images/groupIcons/groupIcon3.png'),
            isFollow: false,
            tid: 2
          },
          {
            name: '自驾游',
            thumb: require('./images/groupIcons/groupIcon4.png'),
            isFollow: false,
            tid: 3
          },
          {
            name: '维修保养',
            thumb: require('./images/groupIcons/groupIcon5.png'),
            isFollow: false,
            tid: 4
          },
          {
            name: '新能源车',
            thumb: require('./images/groupIcons/groupIcon6.png'),
            isFollow: false,
            tid: 5
          },
          {
            name: '道路正能量',
            thumb: require('./images/groupIcons/groupIcon1.png'),
            isFollow: false,
            tid: 0
          },
          {
            name: '车主互助',
            thumb: require('./images/groupIcons/groupIcon2.png'),
            isFollow: false,
            tid: 1
          },
          {
            name: '路况分享',
            thumb: require('./images/groupIcons/groupIcon3.png'),
            isFollow: false,
            tid: 2
          },
          {
            name: '自驾游',
            thumb: require('./images/groupIcons/groupIcon4.png'),
            isFollow: false,
            tid: 3
          },
          {
            name: '维修保养',
            thumb: require('./images/groupIcons/groupIcon5.png'),
            isFollow: false,
            tid: 4
          },
          {
            name: '新能源车',
            thumb: require('./images/groupIcons/groupIcon6.png'),
            isFollow: false,
            tid: 5
          },
        ]
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapFollow(index, $event) {
        $event.preventDefault()
        $event.stopPropagation()
        this.groupData[index].isFollow = !this.groupData[index].isFollow
      },
      tapItem(tid){
        this.$router.push({path: '/community_detail', query: {tid: tid}})
      }
    },
  }
</script>

<style lang="less" scoped>
  .community {
    background: #fff;
    padding: 15px 8px;
    overflow: hidden;
    .community-item {
      width: 33.3%;
      float: left;
      padding: 0 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .thumb {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
      .name {
        color: #4A4A4A;
        font-size: 13px;
        line-height: 13px;
        margin-bottom: 10px;
      }
      .btn {
        color: #45A4F7;
        font-size: 11px;
        line-height: 20px;
        border: 1px solid #45A4F7;
        padding: 0 5px;
        margin-bottom: 15px;
        border-radius: 4px;
        &.follow {
          color: #fff;
          background: #45A4F7;
        }
      }
    }
  }
</style>

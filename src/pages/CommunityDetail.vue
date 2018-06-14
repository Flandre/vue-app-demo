<template>
  <div class="community-detail">
    <NavigatorBar :title="group" bgColor="#fff" navType="light"/>
    <div class="card-list">
      <div class="card-item" v-for="(i, index) in cardData">
        <div class="user-info">
          <img :src="i.userInfo.avatar" class="avatar">
          <div class="info-content">
            <p class="name">{{i.userInfo.name}}</p>
            <p class="time">{{i.time}}</p>
          </div>
        </div>
        <div class="msg-info">
          <p class="desc"><em v-if="group !== ''">{{group}}</em>{{i.desc}}</p>
          <img :src="i.thumb" class="thumb">
        </div>
        <div class="info-source">
          <div class="source-item">
            <span class="transmit">{{i.transmit}}</span>
          </div>
          <div class="source-item">
            <span class="comment">{{i.comment}}</span>
          </div>
          <div class="source-item" @click="tapLike(index, $event)">
            <span :class="['like', i.isLike ? 'active' : '']">{{i.like}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "community-detail",
    components: {
      NavigatorBar
    },
    data() {
      return {
        cardData: [
          {
            userInfo: {
              avatar: require('../assets/pages/CommunityDetail/avatars/avatar1.png'),
              name: '在远方的阿伦'
            },
            time: '刚刚',
            group: '',
            desc: '你觉得汽车上最有用的一个设计是什么？',
            thumb: require('../assets/pages/CommunityDetail/infopic/infopic1.png'),
            transmit: 12,
            comment: 200,
            like: 10,
            isLike: false,
          },
          {
            userInfo: {
              avatar: require('../assets/pages/CommunityDetail/avatars/avatar6.png'),
              name: '小新'
            },
            time: '1小时前',
            group: '',
            desc: '京NC1111违法堵塞出入口，素质太差！',
            thumb: require('../assets/pages/CommunityDetail/infopic/infopic2.png'),
            transmit: 7,
            comment: 21,
            like: 3,
            isLike: false,
          }
        ],
        group: ''
      }
    },
    beforeMount(){
      this.group = ['#道路正能量#', '#车主互助#', '#路况分享#', '#自驾游#', '#维修保养#', '#新能源车#'][this.$route.query.tid || 0]
    }
  }
</script>

<style lang="less" scoped>
  .community-detail {
    padding-top: 44px;
    .card-list {
      .card-item {
        padding: 15px 0 0 15px;
        margin-bottom: 10px;
        background: #fff;
        .user-info {
          display: flex;
          margin-bottom: 10px;
          padding-right: 15px;
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 16px;
            margin-right: 16px;
          }
          .info-content {
            .name {
              color: #4A4A4A;
              font-size: 11px;
              line-height: 11px;
              margin-bottom: 7px;
            }
            .time {
              color: #ABABAB;
              font-size: 10px;
              line-height: 10px;
            }
          }
        }
        .msg-info {
          padding-right: 15px;
          border-bottom: 1px solid #dbdbdb;
          .desc {
            color: #4A4A4A;
            font-size: 13px;
            line-height: 18px;
            margin-bottom: 15px;
            em {
              font-style: normal;
              color: #45A4F7;
              margin-right: 5px;
            }
          }
          .thumb {
            display: block;
            width: 100%;
            height: auto;
            margin-bottom: 15px;
          }
        }
        .info-source {
          display: flex;
          padding-right: 15px;
          .source-item {
            flex-grow: 1;
            text-align: center;
            span {
              color: #ABABAB;
              font-size: 11px;
              line-height: 34px;
              padding-left: 17px;
              background-size: 12px 13px;
              background-position: left center;
              background-repeat: no-repeat;
              &.transmit {
                background-image: url("../assets/pages/CommunityDetail/icons/transmitIcon.png");
              }
              &.comment {
                background-image: url("../assets/pages/CommunityDetail/icons/commentIcon.png");
              }
              &.like {
                background-image: url("../assets/pages/CommunityDetail/icons/likeIcon.png");
                &.active {
                  background-image: url("../assets/pages/CommunityDetail/icons/likeIcon-active.png");
                  color: #45A4F7
                }
              }
            }
          }
        }
      }
    }
  }
</style>

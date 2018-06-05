<template>
  <div class="follow">
    <div class="follow-users">
      <swiper :options="swiperOption" ref="userSwiper">
        <!-- slides -->
        <swiper-slide v-for="i in userData" :key="i.id">
          <img :src="i.avatar" class="avatar">
          <span class="name">{{i.name}}</span>
        </swiper-slide>
      </swiper>
    </div>
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
          <p class="desc"><em v-if="i.group !== ''">{{i.group}}</em>{{i.desc}}</p>
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
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "follow",
    data() {
      return {
        swiperOption :{
          // slidesPerView :'auto',
          slidesPerView : 5,
        },
        userData: [
          {
            avatar: require('./images/avatars/avatar1.png'),
            name: '在远方的阿伦'
          },
          {
            avatar: require('./images/avatars/avatar2.png'),
            name: 'SUV大咖'
          },
          {
            avatar: require('./images/avatars/avatar3.png'),
            name: '映璇'
          },
          {
            avatar: require('./images/avatars/avatar4.png'),
            name: '车威威'
          },
          {
            avatar: require('./images/avatars/avatar5.png'),
            name: '胖哥'
          },
          {
            avatar: require('./images/avatars/avatar6.png'),
            name: '小新'
          },
        ],
        cardData: [
          {
            userInfo: {
              avatar: require('./images/avatars/avatar1.png'),
              name: '在远方的阿伦'
            },
            time: '刚刚',
            group: '',
            desc: '你觉得汽车上最有用的一个设计是什么？',
            thumb: require('./images/infopic/infopic1.png'),
            transmit: 12,
            comment: 200,
            like: 10,
            isLike: false,
          },
          {
            userInfo: {
              avatar: require('./images/avatars/avatar6.png'),
              name: '小新'
            },
            time: '1小时前',
            group: '#违章举报#',
            desc: '京NC1111违法堵塞出入口，素质太差！',
            thumb: require('./images/infopic/infopic2.png'),
            transmit: 7,
            comment: 21,
            like: 3,
            isLike: false,
          }
        ]
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      tapLike(index, $event) {
        if(!this.cardData[index].isLike){
          this.cardData[index].like = this.cardData[index].like + 1
        } else {
          this.cardData[index].like = this.cardData[index].like - 1
        }
        this.cardData[index].isLike = !this.cardData[index].isLike
      }
    }
  }
</script>

<style lang="less" scoped>
  .follow {
    .follow-users {
      padding: 15px 8px;
      .swiper-container {
        .swiper-slide {
          /*margin-left: 15px;*/
          padding: 0 8px;
          width: 60px;
          .avatar {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 50%;
            margin-bottom: 6px;
          }
          .name {
            display: block;
            width: 100%;
            height: 13px;
            font-size: 13px;
            line-height: 13px;
            color: #4A4A4A;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
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
                background-image: url("./images/icons/transmitIcon.png");
              }
              &.comment {
                background-image: url("./images/icons/commentIcon.png");
              }
              &.like {
                background-image: url("./images/icons/likeIcon.png");
                &.active {
                  background-image: url("./images/icons/likeIcon-active.png");
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

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
    <div class="info-list">

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
        infoData: [
          {
            userData: this.userData[0],
            time: '刚刚',
            desc: '你觉得汽车上最有用的一个设计是什么？'

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

  }
</style>

<template>
  <div class="class-card">
    <div class="title">
      推荐学习
    </div>
    <swiper :options="swiperOption" ref="classSwiper">
      <swiper-slide v-for="cls in classData" :key="cls.id">
        <img :src="cls.image" class="class-thumb">
        <p class="class-title">{{cls.title}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "class-card",
    data() {
      return {
        swiperOption: {
          slidesPerView :'auto',
        },
        classData: [
          {
            title: '你了解你的车吗？',
            image: require('../assets/components/ClassCard/classBanners/class1.png'),
            id: 1
          },
          {
            title: '防御性驾驶技巧',
            image: require('../assets/components/ClassCard/classBanners/class2.png'),
            id: 2
          },
          {
            title: '海外自驾新手指南',
            image: require('../assets/components/ClassCard/classBanners/class3.png'),
            id: 3
          },
          {
            title: '你了解你的车吗？',
            image: require('../assets/components/ClassCard/classBanners/class1.png'),
            id: 4
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .class-card {
    height: 164px;
    background: #fff;
    margin-top: 15px;
    padding: 15px;
  }
  .class-card .title {
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 15px;
  }
  .class-card .swiper-container {
    margin-left: -15px;
    margin-right: -15px;
  }
  .class-card .swiper-container .swiper-slide {
    width: 45%;
    padding-left: 15px;
  }
  .class-card .swiper-container .swiper-slide:last-child {
    margin-right: 15px;
  }
  .class-card .swiper-container .swiper-slide .class-thumb{
    width: 100%;
    height: auto;
    display: block;
  }
  .class-card .swiper-container .swiper-slide .class-title{
    font-size: 12px;
    line-height: 12px;
    color: #4A4A4A;
    text-align: center;
    margin-top: 10px;
  }
</style>

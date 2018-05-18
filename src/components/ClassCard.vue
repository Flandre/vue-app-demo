<template>
  <div class="class-card">
    <div class="title">
      推荐学习
    </div>
    <swiper :options="swiperOption" ref="classSwiper">
      <swiper-slide>001</swiper-slide>
      <swiper-slide>001</swiper-slide>
      <swiper-slide>001</swiper-slide>
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
        swiperOption :{
          slidesPerView :'auto',
          centeredSlides : true,
        },
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
</style>

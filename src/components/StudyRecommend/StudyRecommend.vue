<template>
  <div class="study-recommend">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "study-recommend",
    data(){
      return {
        swiperOption: {
          slidesPerView :'auto',
          centeredSlides : true,
        },
        studyData: [
          {

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

<style lang="less" scoped>

</style>

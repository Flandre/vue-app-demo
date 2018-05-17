<template>
  <div class="class-card">
    <div class="title">
      推荐学习
    </div>
    <swiper :options="swiperOption" ref="classSwiper">
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

</style>

<template>
  <div class="class-card">
    <div class="title" v-if="title">
      {{title}}
    </div>
    <swiper :options="swiperOption" ref="classSwiper">
      <swiper-slide v-for="cls in classData" :key="cls.id" @click.native="tapCard(cls.type)">
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
            title: '变更车道隐患多，正确方法学起来！',
            image: require('./images/classBanners/class1.png'),
            id: 1,
            type: 'simple'
          },
          {
            title: '请慢一点，平安是福！',
            image: require('./images/classBanners/class2.png'),
            id: 2,
            type: 'simple'
          },
          {
            title: '防御性驾驶宝典',
            image: require('./images/classBanners/class3.png'),
            id: 3,
            type: 'group'
          },
        ]
      }
    },
    methods: {
      tapCard(type){
        if(type == 'simple'){
          this.$router.push('/class_simple')
        } else {
          this.$router.push('/class_group')
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    props: {
      title: {
        default: ''
      }
    }
  }
</script>

<style scoped>
  .class-card {
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

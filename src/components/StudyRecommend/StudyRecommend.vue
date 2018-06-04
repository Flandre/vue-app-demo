<template>
  <div class="study-recommend">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide v-for="i in studyData" :key="i.id">
        <div class="card-item" @click="tapClick(i.pathType)">
          <img :src="i.img"/>
        </div>
      </swiper-slide>
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
          initialSlide: 1,
        },
        studySource: [
          {
            img: require('./images/theme1.png'),
            pathType: 'simple',
            id: 1
          },
          {
            img: require('./images/theme2.png'),
            pathType: 'group',
            id: 2
          },
          {
            img: require('./images/theme3.png'),
            pathType: 'simple',
            id: 3
          },
        ],
        studyData: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        /* 初始化数据 */
        let ds = this.dataSource + ''
        ds.split('').forEach((val, index) => {
          this.$set(this.studyData, index, this.studySource[val])
        })
      })
    },
    methods: {
      tapClick(type) {
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
      dataSource: {
        default: '012'
      }
    }
  }
</script>

<style lang="less" scoped>
  .study-recommend {
    .swiper-container {
      height: 148px;
      padding: 25px 0;
      .swiper-slide {
        width: 176px;
        margin: 0 20px;
        .card-item {
          width: 100%;
          transition: .3s;
          img {
            display: block;
            width: 100%;
          }
        }
        &.swiper-slide-active {
          .card-item {
            transform-origin: center center;
            transform: scale(1.2, 1.2);
          }
        }
      }
    }
  }

</style>

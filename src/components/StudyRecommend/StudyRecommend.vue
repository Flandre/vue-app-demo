<template>
  <div class="study-recommend">
    <swiper :options="swiperOption" ref="recommendSwiper">
      <!-- slides -->
      <swiper-slide v-for="i in studyData" :key="i.id">
        <div :class="['card-item', swiperAnime? 'hasAnime': '']" @click="tapClick(i.pathType, i.linkVideo)">
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
          initialSlide: 1
        },
        studySource: [
          {
            img: require('./images/theme1.png'),
            pathType: 'simple',
            id: 1,
            linkVideo: 0
          },
          {
            img: require('./images/theme2.png'),
            pathType: 'simple',
            id: 2,
            linkVideo: 1
          },
          {
            img: require('./images/theme3.png'),
            pathType: 'group',
            id: 3,
            linkVideo: 1
          },
          {
            img: require('./images/theme4.png'),
            pathType: 'simple',
            id: 3,
            linkVideo: 1
          },
          {
            img: require('./images/theme5.png'),
            pathType: 'simple',
            id: 3,
            linkVideo: 1
          },
          {
            img: require('./images/theme6.png'),
            pathType: 'group',
            id: 3,
            linkVideo: 0
          },
          {
            img: require('./images/theme7.png'),
            pathType: 'simple',
            id: 3,
            linkVideo: 0
          },
          {
            img: require('./images/theme8.png'),
            pathType: 'simple',
            id: 3,
            linkVideo: 1
          },
          {
            img: require('./images/theme9.png'),
            pathType: 'group',
            id: 3,
            linkVideo: 1
          },
        ],
        studyData: [],
        swiperAnime: false
      }
    },
    computed: {
      swiper() {
        return this.$refs.recommendSwiper.swiper
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
      this.swiper.on('progress', () => {
        if(!this.swiperAnime){
          this.swiperAnime = true
        }
      })
    },
    methods: {
      tapClick(type, vid) {
        if(type == 'simple'){
          this.$router.push({path: '/class_simple', query: {vid: vid}})
        } else {
          this.$router.push('/class_group')
        }
      },
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
          &.hasAnime {
            transition: .3s;
          }
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

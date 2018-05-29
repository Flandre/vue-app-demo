<template>
  <div class="study-group">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide class="card-group" v-for="group in studyData" :key="group.index">
        <div class="card-item" v-for="i in group" :key="i._id">
          <img :src="i.img" class="thumb-img"/>
          <div class="info-box">
            <p class="title">{{i.title}}</p>
            <p class="info">{{i.info}}</p>
            <p class="desc">{{i.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "study-group",
    data() {
      return {
        swiperOption: {
          slidesPerView :'auto'
        },
        studySource: [
          {
            img: require('./images/theme1.png'),
            pathType: 'group',
            title: '道路标识标线的识别',
            info: '1008人在学',
            desc: '学完+200积分'
          },
          {
            img: require('./images/theme2.png'),
            pathType: 'simple',
            title: '道路标识标线的识别',
            info: '1008人在学',
            desc: '学完+200积分'
          },
          {
            img: require('./images/theme3.png'),
            pathType: 'simple',
            title: '道路标识标线的识别',
            info: '1008人在学',
            desc: '学完+200积分'
          },
        ],
        studyData: []

      }
    },
    mounted() {
      this.$nextTick(() => {
        /* 初始化数据 */
        let ds = this.dataSource + ''
        ds.split('_').forEach((val, gid) => {
          let gs = val + ''
          let data = []
          gs.split('').forEach((d, index) => {
            data[index] = Object.assign({}, {_id: `${gid}_${index})`}, this.studySource[d])
          })
          this.$set(this.studyData, gid, data)
        })
      })
    },
    components: {
      swiper,
      swiperSlide
    },
    props: {
      dataSource: {
        default: '01212_12011_210'
      }
    }
  }
</script>

<style lang="less" scoped>
  .study-group {
    .swiper-container {
      background: #fff;
      .card-group {
        width: 90%;
        padding-left: 15px;
        .card-item {
          width: 100%;
          min-height: 90px;
          padding: 15px 0;
          position: relative;
          .thumb-img {
            width: 110px;
            height: 60px;
            position: absolute;
            left: 0;
            top: 15px;
          }
          .info-box {
            padding-left: 125px;
            color: #4A4A4A;
            .title {
              font-size: 13px;
              line-height: 13px;
              margin-bottom: 5px;
              margin-top: 5px;
            }
            .info {
              font-size: 10px;
              line-height: 10px;
              margin-bottom: 10px;
            }
            .desc {
              color: #FF8D47;
              font-size: 11px;
              line-height: 11px;
            }
          }
        }
        &:last-child {
          width: 100%;
        }
      }
    }
  }

</style>

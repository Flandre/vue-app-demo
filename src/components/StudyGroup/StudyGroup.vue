<template>
  <div class="study-group">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide class="card-group" v-for="group in studyData" :key="group.index">
        <div class="card-item" v-for="i in group" :key="i._id" @click="tapClick(i.pathType, i.linkVideo)">
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
            pathType: 'simple',
            title: '你了解你的车吗？',
            info: '1008人在学',
            desc: '学完+200积分',
            linkVideo: 0
          },
          {
            img: require('./images/theme2.png'),
            pathType: 'group',
            title: '防御性安全驾驶宝典',
            info: '981人在学',
            desc: '学完+400积分'
          },
          {
            img: require('./images/theme3.png'),
            pathType: 'group',
            title: '海外自驾安全指南',
            info: '305人在学',
            desc: '学完+200积分'
          },
          {
            img: require('./images/theme4.png'),
            pathType: 'simple',
            title: '儿童安全座椅选购指南',
            info: '574人在学',
            desc: '学完+200积分',
            linkVideo: 1
          },
          {
            img: require('./images/theme5.png'),
            pathType: 'group',
            title: '交通安全大讲堂',
            info: '1376人在学',
            desc: '学完+400积分',
            linkVideo: 0
          },
          {
            img: require('./images/theme6.png'),
            pathType: 'simple',
            title: '雨季行车安全指南',
            info: '972人在学',
            desc: '学完+200积分',
            linkVideo: 0
          },
          {
            img: require('./images/theme7.png'),
            pathType: 'simple',
            title: '疲劳驾驶的危害',
            info: '302人在学',
            desc: '学完+200积分',
            linkVideo: 1
          },
          {
            img: require('./images/theme8.png'),
            pathType: 'simple',
            title: '随意变更车道',
            info: '86人在学',
            desc: '学完+200积分',
            linkVideo: 0
          },
          {
            img: require('./images/theme9.png'),
            pathType: 'simple',
            title: '超速的影响及危害',
            info: '2338人在学',
            desc: '学完+200积分',
            linkVideo: 1
          },
        ],
        studyData: []
      }
    },
    beforeMount() {
      let ds = this.dataSource + '', allData = []
      ds.split('_').forEach((val, gid) => {
        let gs = val + ''
        let data = []
        gs.split('').forEach((d, index) => {
          data[index] = Object.assign({}, {_id: `${gid}_${index})`}, this.studySource[d])
        })
        allData[gid] = data
        this.studyData = allData
      })
    },
    methods: {
      tapClick(type, vid) {
        if(type == 'simple'){
          this.$router.push({path: '/class_simple', query: {vid: vid}})
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

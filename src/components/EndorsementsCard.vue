<template>
  <div class="endorsements-card">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide  v-for="endorsement in endorsementsData" :key="endorsement.id">
        <div class="card-item" @click="tapEndorsementPanel(endorsement.id, $event)">
          <div class="endorsement-box">
            <div class="car-info">
              <p class="car-num"><span>{{endorsement.lsPrefix}}{{endorsement.lsNum}}</span><span class="edit-car"></span></p>
              <p class="car-type">{{endorsement.carType}}</p>
            </div>
            <p class="last-query">{{endorsement.lastQueryText}}</p>
            <div :class="['endorsement-info', endorsement.endorsementInfoType]">
              <span v-for="info in endorsement.endorsementInfo">
                {{info}}
              </span>
            </div>
            <div class="car-img">
              <div class="img-box">
                <img :src="endorsement.carStyle"/>
              </div>
            </div>
            <img src="../assets/components/EndorsementsCard/restriction.png" class="is-restriction" v-if="endorsement.restriction === true" />
          </div>
          <div class="more-service-box">
            <div class="more-service-info">
              <p class="title">{{endorsement.serviceTitle}}</p>
              <p :class="['desc', endorsement.serviceDescType]">{{endorsement.serviceDesc}}</p>
              <div class="more">更多服务</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-item">
          <div class="endorsement-box">
            <img src="../assets/components/EndorsementsCard/add.png" class="add-newcar">
          </div>
          <div class="more-service-box">
            <div class="more-service-info">
              <p class="title">车辆管家，更多贴心服务</p>
              <p class="desc">轻松设置，及时提醒</p>
              <div class="more">更多服务</div>
            </div>
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
    name: "endorsements-card",
    data() {
      return {
        swiperOption :{
          slidesPerView :'auto',
          centeredSlides : true,
        },
        endorsementsData: [
          {
            id: 100,
            lsNum: "QY96N0",
            lsPrefix: "京",
            carType: "广汽 欧蓝德",
            lastQueryText: "上次查询：12分钟前",
            endorsementInfo: ["暂无新的违章记录"],
            endorsementInfoType: 'safe',
            carStyle: require('../assets/components/EndorsementsCard/carStyle/default.png'),
            restriction: true,
            serviceTitle: '保险即将到期',
            serviceDesc: '还剩24天，请及时续保',
            serviceDescType: 'highlight',
            totalCount: 0,
            totalPrice: 0,
            totalScore: 0,
          },
          {
            id: 398,
            lsNum: "QY96N0",
            lsPrefix: "京",
            carType: "广汽 欧蓝德",
            lastQueryText: "上次查询：20分钟前",
            endorsementInfo: ["违章 4", "罚款 800", "扣分 8"],
            endorsementInfoType: 'warning',
            carStyle: require('../assets/components/EndorsementsCard/carStyle/default.png'),
            restriction: false,
            serviceTitle: '年检即将到期',
            serviceDesc: '还剩12天，请及时年检',
            serviceDescType: 'highlight',
            totalCount: 4,
            totalPrice: 800,
            totalScore: 8,
          },
          {
            id: 400,
            lsNum: "QY96N0",
            lsPrefix: "京",
            carType: "广汽 欧蓝德",
            lastQueryText: "上次查询：27分钟前",
            endorsementInfo: ["违章 4", "罚款 800", "扣分 8"],
            endorsementInfoType: 'warning',
            carStyle: require('../assets/components/EndorsementsCard/carStyle/default.png'),
            restriction: true,
            serviceTitle: '年检即将到期',
            serviceDesc: '还剩12天，请及时年检',
            serviceDescType: 'highlight',
            totalCount: 4,
            totalPrice: 800,
            totalScore: 8,
          }
        ]
      }
    },
    methods : {
      tapEndorsementPanel(val, e){
        console.log('111')
        console.log(val)
        console.log(e)
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .endorsements-card {
    margin-top: 15px;
    height: 210px;
  }
  .swiper-slide {
    width: 92%;
    height: 210px;
    padding: 0 5px;
  }
  .card-item {
    width: 100%;
    height: 210px;
    background: #fff;
    border-radius: 8px;
    position: relative;
  }
  .card-item .endorsement-box {
    width: 100%;
    height: 140px;
    padding: 15px;
  }
  .card-item .endorsement-box .car-info{
    text-align: left;
    color: #333
  }
  .card-item .endorsement-box .car-info .car-num{
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
  }
  .card-item .endorsement-box .car-info .car-num span {
    vertical-align: middle;
  }
  .card-item .endorsement-box .car-info .car-num .edit-car {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../assets/components/EndorsementsCard/edit.png") center no-repeat;
    background-size: 16px 16px;
    margin-left: 10px;
    vertical-align: middle;
  }
  .card-item .endorsement-box .car-info .car-type{
    font-size: 12px;
    line-height: 16px;
    margin-top: 5px;
  }
  .card-item .endorsement-box .last-query {
    font-size: 12px;
    line-height: 16px;
    color: #ABABAB;
    margin-top: 19px;
    text-align: left;
  }
  .card-item .endorsement-box .endorsement-info {
    width: 190px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 98px;
    border-radius: 0 16px 16px 0;
    padding-left: 15px;
    text-align: left;
  }
  .card-item .endorsement-box .endorsement-info.safe {
    background: #45A4F7;
  }
  .card-item .endorsement-box .endorsement-info.warning {
    background: #FBCB61;
  }
  .card-item .endorsement-box .endorsement-info span {
    color: #fff;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin-right: 15px;
  }
  .card-item .endorsement-box .car-img {
    width: 120px;
    height: 80px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .card-item .endorsement-box .car-img .img-box{
    width: 120px;
    height: 80px;
    position: relative;
  }
  .card-item .endorsement-box .car-img .img-box img{
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .card-item .endorsement-box .is-restriction {
    width: 61px;
    height: 33px;
    position: absolute;
    top: 39px;
    right: 44px;
  }
  .card-item .endorsement-box .add-newcar {
    width: 100%;
    height: auto;
  }
  .card-item .more-service-box {
    padding: 0 15px;
  }
  .card-item .more-service-box .more-service-info {
    height: 68px;
    border-top: 1px solid #DBDBDB;
    position: relative;
  }
  .card-item .more-service-box .more-service-info .title {
    font-size: 13px;
    height: 13px;
    line-height: 13px;
    margin-top: 15px;
    text-align: left;
  }
  .card-item .more-service-box .more-service-info .desc {
    font-size: 11px;
    height: 11px;
    line-height: 11px;
    margin-top: 15px;
    text-align: left;
  }
  .card-item .more-service-box .more-service-info .desc.highlight {
    color: #FEAB34
  }
  .card-item .more-service-box .more-service-info .more {
    font-size: 11px;
    display: block;
    width: 55px;
    padding-top: 30px;
    position: absolute;
    right: 0;
    top: 8px;
    background: url("../assets/components/EndorsementsCard/more.png") center 3px  no-repeat;
    background-size: 20px 21px;
  }
</style>

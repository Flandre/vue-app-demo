<template>
  <div class="endorsements-card">
    <swiper :options="swiperOption" ref="endorsementSwiper">
      <!-- slides -->
      <swiper-slide  v-for="endorsement in endorsementsData" :key="endorsement.id">
        <div class="card-item">
          <div class="endorsement-box" @click="tapEndorsementPanel(endorsement.hasPeccancy, endorsement.lsNum, $event)">
            <div class="car-info">
              <p class="car-num">
                <span>{{endorsement.lsPrefix}}{{endorsement.lsNum}}</span>
                <span class="edit-car" @click="tapEdit(endorsement.lsNum, endorsement.carType, $event)"></span></p>
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
            <img src="./images/restriction.png" class="is-restriction" v-if="endorsement.restriction === true" />
          </div>
          <div class="more-service-box" @click="tapService(endorsement.serviceType, endorsement.lsNum, endorsement.carType, $event)">
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
          <div class="endorsement-box" @click="tapAdd">
            <img src="./images/add.png" class="add-newcar">
          </div>
          <div class="more-service-box" @click="tapAdd">
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
            carStyle: require('./images/carStyle/default.png'),
            restriction: true,
            serviceTitle: '保险即将到期',
            serviceDesc: '还剩24天，请及时续保',
            serviceType: 1,
            serviceDescType: 'highlight',
            totalCount: 0,
            totalPrice: 0,
            totalScore: 0,
            hasPeccancy: false
          },
          {
            id: 398,
            lsNum: "AK3326",
            lsPrefix: "京",
            carType: "奥迪 奥迪A4L",
            lastQueryText: "上次查询：20分钟前",
            endorsementInfo: ["违章 4", "罚款 600", "扣分 6"],
            endorsementInfoType: 'warning',
            carStyle: require('./images/carStyle/default.png'),
            restriction: false,
            serviceTitle: '年检即将到期',
            serviceDesc: '还剩12天，请及时年检',
            serviceType: 2,
            serviceDescType: 'highlight',
            totalCount: 4,
            totalPrice: 600,
            totalScore: 6,
            hasPeccancy: true
          },
          {
            id: 400,
            lsNum: "N627M9",
            lsPrefix: "京",
            carType: "广汽 欧蓝德",
            lastQueryText: "上次查询：27分钟前",
            endorsementInfo: ["违章 4", "罚款 600", "扣分 6"],
            endorsementInfoType: 'warning',
            carStyle: require('./images/carStyle/default.png'),
            restriction: true,
            serviceTitle: '你有多条提醒即将到期',
            serviceDesc: '车辆年检、车辆保险',
            serviceType: 3,
            serviceDescType: 'highlight',
            totalCount: 4,
            totalPrice: 600,
            totalScore: 6,
            hasPeccancy: true
          }
        ]
      }
    },
    methods : {
      tapEndorsementPanel(hasPeccancy, lsNum, $event){
        if(hasPeccancy){
          this.$router.push({path: '/endorsement_detail', query: {backlength: 1, lsNum: lsNum}})
        } else {
          this.$router.push({path: '/endorsement_empty', query: {backlength: 1, lsNum: lsNum}})
        }
      },
      tapAdd() {
        this.$router.push('/edit_car')
      },
      tapEdit(lsNum, carType, $event) {
        $event.preventDefault()
        $event.stopPropagation()
        this.$router.push({path: '/edit_car', query: {edit: true, lsNum: lsNum, carType: carType}})
      },
      tapService(serviceType, lsNum, carType, $event) {
        console.log(serviceType)
        this.$router.push({path: '/manager', query: { lsNum: lsNum, carType: carType, serviceType: serviceType}}, () => {

        })
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
    background: url("./images/edit.png") center no-repeat;
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
    background: url("./images/more.png") center 3px  no-repeat;
    background-size: 20px 21px;
  }
</style>

<template>
  <div class="manager-index">
    <NavigatorBar title="车辆管家" :bgColor="bgColor"/>
    <div class="car-panel-bg" :style="{backgroundColor: bgColor}">
      <div class="car-panel">
        <p class="car-num">{{lsNum}}</p>
        <p class="car-type">{{carType}}</p>
        <img src="../assets/pages/ManagerIndex/carType.png" class="car-thumb">
      </div>
    </div>
    <div class="violation-reminding panel-item">
      <p class="title">违章提醒</p>
      <template v-if="violationArr.length == 0">
        <p class="info">暂无新的违章或尚未录入</p>
      </template>
      <template v-else>
        <div class="info-main">
          <div class="info-item">
            <p class="num">{{violationArr[0]}}</p>
            <p class="proj">违章</p>
          </div>
          <div class="info-item">
            <p class="num">{{violationArr[1]}}</p>
            <p class="proj">罚款</p>
          </div>
          <div class="info-item">
            <p class="num">{{violationArr[2]}}</p>
            <p class="proj">扣分</p>
          </div>
        </div>
      </template>
      <p class="last-time">上次查询时间：2018-03-01 09:00</p>
    </div>
    <div class="inspection panel-item">
      <p class="title">年检提醒</p>
      <div class="info-main" v-if="inspection > 0" @click="tapInspection">
        <div class="info-item">
          <p class="num" v-if="inspection == 1">373<em>天</em></p>
          <p class="num warn" v-else-if="inspection == 2">12<em>天</em></p>
          <p class="proj">下次领标日期：2019-03-11</p>
        </div>
      </div>
      <div class="info-main" v-else @click="tapAddInspection">
        <div class="info-item">
          <img src="../assets/pages/ManagerIndex/add.png" class="add">
          <p class="proj">轻松设置，年检及时办</p>
        </div>
      </div>
    </div>
    <div class="insurance panel-item">
      <p class="title">保险提醒</p>
      <div class="info-main" v-if="insurance > 0" @click="tapInsurance">
        <div class="info-item">
          <p class="num" v-if="insurance == 1">100<em>天</em></p>
          <p class="num warn" v-else-if="insurance == 2">24<em>天</em></p>
          <p class="proj">交强险到期日：2019-09-01</p>
        </div>
        <div class="info-item">
          <p class="num" v-if="insurance == 1">100<em>天</em></p>
          <p class="num warn" v-else-if="insurance == 2">24<em>天</em></p>
          <p class="proj">商业险到期日：2019-09-01</p>
        </div>
      </div>
      <div class="info-main" v-else @click="tapAddInsurance">
        <div class="info-item">
          <img src="../assets/pages/ManagerIndex/add.png" class="add">
          <p class="proj">到期提醒，一键报案</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "manager-index",
    data() {
      return {
        bgColor: '#45A4F7',
        lsNum: '京QY96N0',
        carType: '广汽 欧蓝德',
        violationArr: [],
        inspection: 0,
        insurance: 0,
      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.lsNum){
        this.lsNum = `京${this.$route.query.lsNum}`
        if(this.$route.query.lsNum != 'QY96N0'){
          this.violationArr = [4, 600, 6]
        }
      }
      if(this.$route.query.carType){
        this.carType = this.$route.query.carType
      }
      if(this.$route.query.inspection){
        this.inspection = this.$route.query.inspection
      }
      if(this.$route.query.insurance){
        this.insurance = this.$route.query.insurance
      }
    },
    methods: {
      tapInspection() {
        let query = {type: 1}
        if(this.$route.query.inspection > 0){
          query.type = this.$route.query.inspection
        }
        this.$router.push({path: '/inspection', query: query})
      },
      tapInsurance() {
        let query = {type: 1}
        if(this.$route.query.insurance > 0){
          query.type = this.$route.query.insurance
        }
        this.$router.push({path: '/insurance', query: query})
      },
      tapAddInspection() {
        let query = {}
        if(this.$route.query.lsNum){
          query.lsNum = this.$route.query.lsNum
        }
        if(this.$route.query.carType){
          query.carType = this.$route.query.carType
        }
        if(this.$route.query.inspection){
          query.inspection = this.$route.query.inspection
        }
        if(this.$route.query.insurance){
          query.insurance = this.$route.query.insurance
        }
        this.$router.push({path: '/addInspection', query: query})
      },
      tapAddInsurance() {
        let query = {}
        if(this.$route.query.lsNum){
          query.lsNum = this.$route.query.lsNum
        }
        if(this.$route.query.carType){
          query.carType = this.$route.query.carType
        }
        if(this.$route.query.inspection){
          query.inspection = this.$route.query.inspection
        }
        if(this.$route.query.insurance){
          query.insurance = this.$route.query.insurance
        }
        this.$router.push({path: '/addInsurance', query: query})
      }
    }
  }
</script>

<style lang="less" scoped>
  .manager-index {
    margin-top: 44px;
    .car-panel-bg {
      height: 110px;
      background: #45A4F7;
      padding: 15px 20px;
      margin-bottom: 30px;
      .car-panel {
        height: 110px;
        background: #fff;
        border-radius: 8px;
        padding: 30px 20px;
        position: relative;
        .car-num {
          color: #333333;
          font-size: 22px;
          line-height: 22px;
          margin-bottom: 17px;
        }
        .car-type {
          color: #333333;
          font-size: 13px;
          line-height: 13px;
        }
        .car-thumb {
          width: 101px;
          height: 46px;
          position: absolute;
          top: 40px;
          right: 30px;
        }
      }
    }
    .panel-item {
      background: #fff;
      padding: 10px 15px 25px;
      margin-bottom: 10px;
      .title {
        font-size: 13px;
        line-height: 16px;
        color: #333;
        padding-left: 26px;
        margin-bottom: 25px;
        background-size: 14px 14px;
        background-repeat: no-repeat;
        background-position: left center;
      }
      .info-main {
        display: flex;
        justify-content: space-around;
        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    .violation-reminding {
      .title {
        background-image: url("../assets/pages/ManagerIndex/violation.png");
      }
      .info {
        font-size: 13px;
        line-height: 13px;
        text-align: center;
        color: #333;
        margin-bottom: 16px;
      }
      .info-main {
        margin-bottom: 16px;
        .info-item {
          .num {
            font-size: 20px;
            line-height: 20px;
            color: #333;
            margin-bottom: 10px;
          }
          .proj {
            font-size: 12px;
            line-height: 12px;
            color: #666666;
          }
        }
      }
      .last-time {
        font-size: 12px;
        text-align: center;
        color: #666;
      }
    }
    .inspection,
    .insurance {
      .title {
        background-image: url("../assets/pages/ManagerIndex/inspection.png");
      }
      .info-main {
        .info-item {
          .num {
            font-size: 20px;
            line-height: 20px;
            color: #333;
            margin-bottom: 10px;
            em {
              font-size: 12px;
              font-style: normal;
              margin-left: 5px;
            }
            &.warn {
              color: #D84040;
            }
          }
          .proj {
            font-size: 12px;
            line-height: 12px;
            color: #666666;
          }
          .add {
            width: 36px;
            height: 36px;
            margin-bottom: 15px;
          }
        }
      }
    }
    .insurance {
      .title {
        background-image: url("../assets/pages/ManagerIndex/inspection.png");
      }
    }
  }
</style>

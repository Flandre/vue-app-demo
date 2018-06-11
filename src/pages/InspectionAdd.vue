<template>
  <div class="inspection-add">
    <NavigatorBar title="开通年检提醒" bgColor="#fff" navType="light"/>
    <div class="car-info">
      <p class="carLsNum">{{lsNum}}</p>
      <p class="desc">开通年检提醒，及时办理年检</p>
    </div>
    <div class="form-group">
      <div class="form-row">
        <span class="label">车辆类型</span>
        <select class="main">
          <option>小型、微型非营运载客汽车</option>
          <option>营运载客汽车</option>
          <option>载货汽车和大、中型非营运载客汽车</option>
        </select>
      </div>
      <div class="form-row">
        <span class="label">注册日期</span>
        <input type="text" class="main" placeholder="选择注册日期"/>
      </div>
    </div>
    <div class="active-bar">
      <div class="add-button" @click="tapSave">保存</div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "inspection-add",
    data() {
      return {
        lsNum: '京QY96N0',
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
      }
      if(this.$route.query.inspection){
        this.inspection = this.$route.query.inspection
      }
      if(this.$route.query.insurance){
        this.insurance = this.$route.query.insurance
      }
    },
    methods: {
      tapSave() {
        let query = {inspection : 1, backlength: 3}
        if(this.$route.query.lsNum){
          query.lsNum = this.$route.query.lsNum
        }
        if(this.$route.query.carType){
          query.carType = this.$route.query.carType
        }
        if(this.$route.query.insurance){
          query.insurance = this.$route.query.insurance
        }
        this.$router.push({path: '/manager', query: query}, () => {
          this.$router.push({path: '/inspection', query: {type: 1}})
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  .inspection-add {
    padding-top: 44px;
    .car-info {
      padding: 25px 0;
      background: #fff;
      text-align: center;
      .carLsNum {
        font-size: 17px;
        display: inline-block;
        line-height: 17px;
        padding-left: 24px;
        margin-bottom: 10px;
        background: url("../assets/pages/InspectionAdd/icon.png") left center no-repeat;
        background-size: 14px 14px;
      }
      .desc {
        color: #666666;
        font-size: 12px;
      }
    }
    .form-group {
      padding-left: 15px;
      background: #fff;
      margin-bottom: 10px;
      .form-row {
        height: 50px;
        border-bottom: 1px solid #DBDBDB;
        line-height: 50px;
        position: relative;
        padding-left: 96px;
        .label {
          display: block;
          width: 96px;
          position: absolute;
          top: 0;
          left: 0;
          color: #333333;
          font-size: 13px;
        }
        .main {
          width: 100%;
          display: flex;
          overflow: hidden;
          select {
            flex-grow: 0;
          }
        }
        select,
        input {
          height: 48px;
          border: 0;
          outline: 0;
          background: #fff;
          flex-grow: 1;
          font-size: 13px;
          padding: 0 10px;
          outline: none;
          -webkit-appearance: none;
        }
        input::-webkit-input-placeholder{
          color:#C7C7CD;
        }
        input::-moz-placeholder {
          color:#C7C7CD;
        }
        input:-moz-placeholder {
          color:#C7C7CD;
        }
        input:-ms-input-placeholder {
          color:#C7C7CD;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
      .automatic {
        height: 48px;
        text-align: center;
        span {
          font-size: 13px;
          line-height: 48px;
          color: #45A4F7;
          vertical-align: middle;
        }
        .automatic-left {
          width: 16px;
          height: 14px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .automatic-right {
          width: 7px;
          height: 12px;
          vertical-align: middle;
          margin-left: 5px;
        }
      }
    }
    .active-bar {
      padding: 30px 25px 0;
      .add-button {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
      }
    }
  }

</style>

<template>
  <div class="insurance-add">
    <NavigatorBar title="添加保险提醒" bgColor="#fff" navType="light"/>
    <div class="car-info">
      <p class="carLsNum">{{lsNum}}</p>
      <p class="desc">开通保险提醒，轻松设置，一键报案</p>
    </div>
    <div class="form-group">
      <div class="form-row">
        <span class="label">险种类别</span>
        <input type="text" class="main" placeholder="请选择险种类别"/>
      </div>
      <div class="form-row">
        <span class="label">保险公司</span>
        <input type="text" class="main" placeholder="请选择保险公司"/>
      </div>
      <div class="form-row">
        <span class="label">保险单号</span>
        <input type="text" class="main" placeholder="请输入保险单号"/>
      </div>
      <div class="form-row">
        <span class="label">保险到期时间</span>
        <input type="text" class="main" placeholder="请选择保险到期时间"/>
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
    name: "insurance-add",
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
    },
    methods: {
      tapSave() {
        if(this.$route.query.firstInput){
          let query = {insurance : 1, backlength: 3}
          if(this.$route.query.lsNum){
            query.lsNum = this.$route.query.lsNum
          }
          if(this.$route.query.carType){
            query.carType = this.$route.query.carType
          }
          if(this.$route.query.inspection){
            query.inspection = this.$route.query.inspection
          }
          this.$router.push({path: '/manager', query: query}, () => {
            let query = {insurance : 1, type: 1}
            if(this.$route.query.lsNum){
              query.lsNum = this.$route.query.lsNum
            }
            if(this.$route.query.carType){
              query.carType = this.$route.query.carType
            }
            if(this.$route.query.inspection){
              query.inspection = this.$route.query.inspection
            }
            this.$router.push({path: '/insurance', query: query})
          })
        } else {
          history.go(-1)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .insurance-add {
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
        background: url("../assets/pages/InsuranceAdd/icon.png") left center no-repeat;
        background-size: 16px 16px;
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

<template>
  <div class="edit-car">
    <NavigatorBar :title="showTitle" navType="light" bgColor="#fff"/>
    <div class="top-tip">
      <span>请对照《机动车行驶证》认真填写以下信息</span>
    </div>
    <div class="form-group">
      <div class="automatic" @click="tapAutomatic">
          <img src="../assets/pages/EditCar/automatic-left.png" class="automatic-left">
          <span>自动识别行驶证</span>
          <img src="../assets/pages/EditCar/automatic-right.png" class="automatic-right">
      </div>
      <div class="form-row">
        <span class="label">号牌类型</span>
        <select class="main">
          <option>小型汽车</option>
          <option>大型汽车</option>
        </select>
      </div>
      <div class="form-row">
        <span class="label">车牌号</span>
        <div class="main">
          <select>
            <option>京</option>
            <option>津</option>
            <option>冀</option>
            <option>渝</option>
            <option>粤</option>
          </select>
          <input type="text" placeholder="请输入车牌号" :value="automatic.lsNum">
        </div>
      </div>
      <div class="form-row">
        <span class="label">发动机号</span>
        <input type="text" class="main" placeholder="请输入全部发动机号" :value="automatic.engineType"/>
      </div>
      <div class="form-row">
        <span class="label">车架号码</span>
        <input type="text" class="main" placeholder="请输入全部车架号" :value="automatic.vin"/>
      </div>
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
        <input type="text" class="main" placeholder="选择注册日期开通年检提醒（选填）" :value="automatic.time"/>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row">
        <span class="label">车系</span>
        <input type="text" class="main" placeholder="请选择车型（选填）" :value="automatic.carType"/>
      </div>
    </div>
    <div class="active-bar">
      <div class="button" @click="tapSubmit(automatic.lsNum, $event)">保存</div>
    </div>
    <p class="prompt">所填信息为当地交管局查询必需信息，我们将严格保密，敬请放心。<br/>点击开始查询，即表示您同意我们将您的个人信息用于违章查询。</p>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "edit-car",
    data() {
      return {
        showTitle: "添加车辆",
        automatic: {
          lsNum: '',
          engineType: '',
          vin: '',
          time: '',
          carType: '',
        }
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount(){
      /* 返回顶部 */
      window.scrollTo(0, 0)
      let self = this
      if(window.AppCall){
        window.AppCall.automaticSuccess = function(){
          self.$router.push({path: '/endorsement_detail', query: {backlength: 2, lsNum: 'QY96N0'}})
        }
      }
    },
    mounted() {
      if(this.$route.query.edit){
        this.automatic = {
          lsNum: 'QY96N0',
          vin: '1G1BL52P7TR115520',
          engineType: '238763',
          time: '2013-03-15',
          carType: '广汽 欧蓝德',
        }
        this.showTitle = '编辑车辆'
        if(this.$route.query.lsNum){
          this.automatic.lsNum = this.$route.query.lsNum
        }
        if(this.$route.query.carType){
          this.automatic.carType = this.$route.query.carType
        }
      }
    },
    methods: {
      tapSubmit(lsNum, $event) {
        if(lsNum == 'QY96N0'){
          this.$router.push({path: '/endorsement_empty', query: {backlength: 2, lsNum: lsNum}})
        } else {
          this.$router.push({path: '/endorsement_detail', query: {backlength: 2, lsNum: lsNum}})
        }
      },
      tapAutomatic(){
        try{
          window.AppCall.automatic("driving")
        } catch (err){
          alert(err)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .edit-car {
    padding-top: 44px;
    .top-tip {
      height: 34px;
      background: rgba(69, 164, 247, .2);
      text-align: center;
      margin-bottom: 10px;
      span {
        font-size: 12px;
        color: #333;
        line-height: 34px;
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
      .button {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
      }
    }
    .prompt {
      color: #ABABAB;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      margin-top: 15px;
    }
  }

</style>

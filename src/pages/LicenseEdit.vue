<template>
  <div class="license-edit">
    <NavigatorBar title="添加驾驶证" navType="light" bgColor="#fff"/>
    <div class="top-tip">
      <span>请对照《机动车驾驶证》认真填写以下信息</span>
    </div>
    <div class="form-group">
      <div class="automatic" @click="tapAutomatic">
        <img src="../assets/pages/LicenseEdit/automatic-left.png" class="automatic-left">
        <span>自动识别驾驶证</span>
        <img src="../assets/pages/LicenseEdit/automatic-right.png" class="automatic-right">
      </div>
      <div class="form-row">
        <span class="label">发证城市</span>
        <select class="main">
          <option>北京</option>
          <option>上海</option>
          <option>广东</option>
          <option>杭州</option>
        </select>
      </div>
      <div class="form-row">
        <span class="label">驾驶证号</span>
        <input type="text" class="main" placeholder="请输入完整的驾驶证号"/>
      </div>
      <div class="form-row">
        <span class="label">档案编号</span>
        <input type="text" class="main" placeholder="请输入完整的档案编号"/>
      </div>
      <div class="form-row">
        <span class="label">证件姓名</span>
        <input type="text" class="main" placeholder="请输入驾驶证上的姓名"/>
      </div>
      <div class="form-row">
        <span class="label">准驾车型</span>
        <select class="main">
          <option>C1</option>
          <option>C2</option>
          <option>B1</option>
          <option>B2</option>
          <option>A1</option>
          <option>A2</option>
          <option>A3</option>
          <option>D</option>
          <option>E</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row">
        <span class="label">是否长期</span>
        <div class="main">
          <p class="placeholder">驾驶证是否长期有效</p>
          <div :class="['choose-btn', switchActive? 'active': '']" @click="tapSwitch"></div>
        </div>
      </div>
      <div class="form-row" v-if="!switchActive">
        <span class="label">有效期至</span>
        <input type="text" class="main" placeholder="请选择有效截止日期"/>
      </div>
      <div class="form-row">
        <span class="label">初次领证时间</span>
        <input type="text" class="main" placeholder="请选择初次领证日期"/>
      </div>
    </div>
    <div class="active-bar">
      <div class="button" @click="tapSave">保存信息</div>
    </div>
    <p class="prompt">所填信息为当地交管局查询必需信息，我们将严格保密，敬请放心。<br/>保存信息即表示您同意我们将您的个人信息用于电子驾照相关业务。</p>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-edit",
    data() {
      return {
        switchActive:false
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
          self.$router.push({path: '/license_info', query: {backlength: 2}})
        }
      }
    },
    methods: {
      tapSwitch() {
        this.switchActive = !this.switchActive
      },
      tapSave() {
        if(this.$route.query.isEdit){
          history.go(-1)
        } else {
          sessionStorage.setItem('license', true)
          this.$router.push({path: '/license_info', query: {backlength: 2}})
        }
      },
      tapAutomatic(){
        alert('tap automatic')
        try {
          window.AppCall.automatic("driver")
        } catch (err) {
          alert(err)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .license-edit {
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
      .reminding-switch {
        background: #fff;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .info {
          .title {
            font-size: 13px;
            line-height: 13px;
            color: #333;
            margin-bottom: 10px;
          }
          .desc {
            font-size: 11px;
            line-height: 11px;
            color: #666;
          }
        }
      }
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
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          padding: 0 10px;
          select {
            flex-grow: 0;
          }
          .placeholder {
            color: #C7C7CD;
            font-size: 13px;
          }
          .choose-btn {
            box-shadow: #ccc 0 0 0 1px;
            width: 40px;
            height: 20px;
            border-radius: 20px;
            position: relative;
            background-color: #bdbdbd;
            overflow: hidden;
            float: right;
            &:before {
              content: '';
              position: absolute;
              left: 0;
              width: 20px;
              height: 20px;
              border-radius: 20px;
              background-color: #fff;
              z-index: 20;
              transition: all 0.5s;
            }
            &.active {
              background-color: #45A4F7;
              &:before {
                left: 20px;
              }
            }
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
      margin-bottom: 15px;
    }
  }
</style>

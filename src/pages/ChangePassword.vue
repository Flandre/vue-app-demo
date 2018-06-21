<template>
  <div class="change-password">
    <NavigatorBar title="修改密码" bgColor="#fff" navType="light"/>
    <div class="form-group">
      <div class="form-row">
        <span class="label">当前密码</span>
        <input type="text" class="main" placeholder="请输入当前密码"/>
      </div>
      <div class="form-row">
        <span class="label">密码</span>
        <input type="text" class="main" placeholder="请输入新密码（6-20位数字或字母）"/>
      </div>
      <div class="form-row">
        <span class="label">确认密码</span>
        <input type="text" class="main" placeholder="请再次输入密码确认"/>
      </div>
    </div>
    <div class="active-bar">
      <div class="add-button" @click="tapSave">保存</div>
    </div>
    <ToolTip ref="ToolTip" :showText="tooltipText"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "change-password",
    data() {
      return {
        tooltipText: '内测版本暂不开放此功能',
        timerArr: []
      }
    },
    components: {
      ToolTip,
      NavigatorBar
    },
    beforeDestroy() {
      this.timerArr.forEach(val => {
        clearTimeout(val)
      })
    },
    methods: {
      tapSave() {
        if(this.tooltipText != '修改成功'){
          this.tooltipText = '修改成功'
          this.bindTooltip()
          this.timerArr[0] = setTimeout(() => {
            this.tooltipText = '内测版本暂不开放此功能'
            this.$router.goBack()
          }, 2600)
        }
      },
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    }
  }
</script>

<style lang="less" scoped>
  .change-password {
    padding-top: 44px;
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

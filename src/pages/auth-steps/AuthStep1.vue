<template>
  <div class="auth-step1">
    <div class="top-tip">
      <span>拍摄时请确保证号、档案编号以及条形码清晰可识别</span>
    </div>
    <div class="form-group">
      <div class="form-row card-type">
        <div class="title">
          <p class="desc">驾驶证主页</p>
          <p class="case">查看示例</p>
        </div>
        <div class="id-card-container">
          <span class="empty">点击上传照片</span>
        </div>
      </div>
      <div class="form-row card-type">
        <div class="title">
          <p class="desc">驾驶证副页</p>
          <p class="case">查看示例</p>
        </div>
        <div class="id-card-container">
          <span class="empty">点击上传照片</span>
        </div>
      </div>
      <div class="form-row">
        <span class="label">手机号码</span>
        <input type="text" class="main" placeholder="请输入驾驶证登记时的手机号"/>
      </div>
    </div>
    <div class="active-bar">
      <div class="button" @click="tapSave">下一步</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "auth-step1",
    beforeMount(){
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapSave() {
        this.$router.push('/license_auth/step2')
      }
    }
  }
</script>

<style lang="less" scoped>
  .auth-step1 {
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
        &.card-type {
          height: auto;
          padding: 15px 0;
          padding-right: 15px;
          line-height: 1;
          .title {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            line-height: 18px;
            margin-bottom: 10px;
            .desc {
              color: #333;
            }
            .case {
              color: #45A4F7;
            }
          }
          .id-card-container {
            width: 100%;
            height: 194px;
            background: rgba(0, 0, 0, .4);
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            .empty {
              display: block;
              color: #fff;
              font-size: 13px;
              padding-top: 50px;
              background: url("../../assets/pages/LicenseAuth/empty-card-icon.png") center top no-repeat;
              background-size: 43px 38px;
            }
          }
        }
        &:last-child {
          border-bottom: 0;
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
        margin-bottom: 20px;
      }
    }
  }
</style>

<template>
  <div class="license-info">
    <NavigatorBar title="李明明" bgColor="#45A4F7"/>
    <div class="license-card">
      <div class="avatar-bg">
        <div class="avatar-box">
          <div class="avatar">
            <img src="../assets/pages/LicenseInfo/avatar.png" v-if="auth">
            <p v-else>未认证</p>
          </div>
        </div>
        <img src="../assets/pages/LicenseInfo/qrcode.png" class="qr-link" @click="tapQr" v-if="auth">
      </div>
      <div class="info-container">
        <div class="license-code">******   ******   **3482</div>
        <div class="record-container">
          <p class="record">档案编号：11010000****</p>
          <div class="auth-tag" v-if="auth">已认证</div>
          <div class="edit" @click="tapEdit" v-else>修改信息</div>
        </div>
        <div class="license-msg">
          <div class="msg-item">
            <p class="title">初次领证</p>
            <p class="desc">2013-01-13</p>
          </div>
          <div class="msg-item">
            <p class="title">有效期限</p>
            <p class="desc">2019-01-13</p>
          </div>
          <div class="msg-item">
            <p class="title">准驾车型</p>
            <p class="desc">C1</p>
          </div>
        </div>
        <div class="action-bar">
          <div class="button" v-if="auth" @click="tapDetail">驾照详情</div>
          <div class="button" v-else @click="tapAuth">申请认证</div>
        </div>
      </div>
    </div>
    <div class="func-list" v-if="auth">
      <div class="list-item" v-for="func in funcData" @click="tapList(func.path)">
        <img :src="func.icon">
        <span>{{func.name}}</span>
      </div>
    </div>
    <GlobalDialog
      ref="GlobalDialog"
      v-on:enter="enterCbk"
      :showText="dialogContent"
      :enterBtnName="dialogEnter"
      :cancelBtnName="dialogCancel"
      :cancelType="dialogCancelType"
    />
    <div :class="['loading-box', showLoading? 'active': '']">
      <div class="loading">
        <img src="../assets/pages/LicenseInfo/spinner.png" class="icon">
        <span>正在同步车辆信息，请稍候...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import GlobalDialog from '@/components/GlobalDialog/GlobalDialog'
  export default {
    name: "license-info",
    data() {
      return {
        funcData: [
          {
            name: '驾照查分',
            icon: require('@/assets/pages/LicenseInfo/funcIcon1.png'),
            path: '/license_jzcf',
          },
          // {
          //   name: '违法信息',
          //   icon: require('@/assets/pages/LicenseInfo/funcIcon2.png'),
          //   path: '/wfxx',
          // },
          {
            name: '销分记录',
            icon: require('@/assets/pages/LicenseInfo/funcIcon3.png'),
            path: '/license_xfjl',
          },
          {
            name: '满分学习',
            icon: require('@/assets/pages/LicenseInfo/funcIcon4.png'),
            path: '/study_entry',
          },
          // {
          //   name: '审验学习',
          //   icon: require('@/assets/pages/LicenseInfo/funcIcon5.png'),
          //   path: '/syxx',
          // },
          // {
          //   name: '业务办理',
          //   icon: require('@/assets/pages/LicenseInfo/funcIcon6.png'),
          //   path: '/ywbl',
          // },
        ],
        auth: false,
        dialogStep: 1,
        dialogEnter: '',
        dialogCancel: '',
        dialogContent: '',
        dialogCancelType: 'all',
        showLoading: false
      }
    },
    components: {
      NavigatorBar,
      GlobalDialog,
    },
    beforeMount() {
      if(sessionStorage.getItem('isAuth')){
        this.auth = true
      }
    },
    mounted() {
      if(sessionStorage.getItem('firstAuth')){
        sessionStorage.removeItem('firstAuth')
        this.dialogContent = '是否自动同步您的车辆信息'
        this.dialogEnter = '确定'
        this.dialogCancel = '取消'
        this.dialogCancelType = 'onlyDialog'

        this.$refs.GlobalDialog.showDialog()
      }
    },
    methods: {
      tapEdit() {
        this.$router.push({path: '/license_edit', query: {isEdit: true}})
      },
      tapQr() {
        this.$router.push('/license_qrcode')
      },
      tapAuth() {
        this.$router.push('/license_auth')
      },
      tapDetail() {
        this.$router.push('/license_detail')
      },
      tapList(path) {
        if(path == '/study_entry'){
          if(sessionStorage.getItem('entryStudy')){
            this.$router.push({path: '/study_full', query: {backlength: 1}})
          } else {
            this.$router.push({path: '/study_entry', query: {buttom: 'show'}})
          }
        } else {
          this.$router.push(path)
        }
      },
      enterCbk() {
        if(this.dialogStep == 1){
          console.log('enter 1st callback')

          this.showLoading = true;
          setTimeout(() => {
            this.showLoading = false;
            this.dialogStep = 2
            this.dialogContent = '车辆添加成功'
            this.dialogEnter = '去看看'
            this.dialogCancel = '稍后再说'
            this.dialogCancelType = 'all'

            this.$refs.GlobalDialog.showDialog()
          }, 1000)

        } else if (this.dialogStep == 2){
          this.$router.push({path: '/manager', query: {lsNum: 'N627M9', carType: '广汽 欧蓝德', inspection: 2, insurance: 2}})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .license-info {
    padding-top: 44px;
    .license-card {
      background: #fff;
      margin-bottom: 10px;
      .avatar-bg {
        width: 100%;
        height: 140px;
        background: url("../assets/pages/LicenseInfo/card-bg.png") center no-repeat;
        background-size: 100% 140px;
        position: relative;
        .avatar-box {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, .8);
          position: absolute;
          bottom: 14px;
          left: 50%;
          margin-left: -45px;
          padding: 5px;
          border-radius: 45px;
          overflow: hidden;
          .avatar {
            position: relative;
            border-radius: 40px;
            overflow: hidden;
            img{
              width: 100%;
              height: auto;
              border-radius: 40px;
            }
            p{
              display:block;
              width: 80px;
              height: 80px;
              background: #CDCDCC;
              line-height: 80px;
              text-align: center;
              font-size: 15px;
              color: #fff;
            }
          }
        }
        .qr-link {
          width: 32px;
          height: 32px;
          position: absolute;
          right: 15px;
          top: 15px;
        }
      }
      .info-container {
        padding: 0 15px;
        .license-code {
          font-size: 17px;
          line-height: 24px;
          text-align: center;
          color: #4A4A4A;
        }
        .record-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px 20px;
          border-bottom: 1px solid #dbdbdb;
          .record {
            font-size: 12px;
            line-height: 17px;
            color: #4A4A4A;
          }
          .edit {
            font-size: 12px;
            line-height: 17px;
            color: #45A4F7;
            padding-left: 17px;
            background: url("../assets/pages/LicenseInfo/editIcon.png") left center no-repeat;
            background-size: 13px 13px;
          }
          .auth-tag {
            font-size:12px;
            line-height: 18px;
            color: #45A4F7;
            padding: 0 5px 0 25px;
            border: 1px solid #45A4F7;
            border-radius: 4px;
            background: url("../assets/pages/LicenseInfo/successIcon.png") 7px center no-repeat;
            background-size: 12px 9px;
          }
        }
        .license-msg {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid #dbdbdb;
          .msg-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid #dbdbdb;
            .title {
              color: #4A4A4A;
              font-size: 12px;
              line-height: 12px;
              margin-bottom: 10px;
            }
            .desc {
              font-size: 15px;
              line-height: 15px;
              color: #45A4F7;
            }
            &:last-child {
              border-right: 0;
            }

          }

        }
        .action-bar {
          padding: 20px;
          .button {
            background: #45A4F7;
            color: #fff;
            height: 40px;
            font-size: 17px;
            line-height: 40px;
            text-align: center;
            border-radius: 4px;
          }
        }
      }
    }
    .func-list {
      padding-left: 15px;
      background: #fff;
      .list-item {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        padding-left: 0;
        border-bottom: 1px solid #dbdbdb;
        font-size: 13px;
        color: #4A4A4A;
        img {
          width: 24px;
          height: 24px;
          margin-right: 15px;
          &.arrow {
            width: 7px;
            height: 12px;
            margin-right: 0;
          }
        }
        span {
          flex-grow: 1;
          display: block;
          background-image: url("../assets/pages/LicenseInfo/arrow-right.png");
          background-position: right center;
          background-repeat: no-repeat;
          background-size: 7px 12px;
          padding-right: 22px;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    .loading-box {
      width: 100%;
      height: auto;
      position: fixed;
      top: 180px;
      text-align: center;
      display: none;
      z-index: 2020;
      &.active {
        display: block;
      }
      .loading {
        width: 200px;
        padding: 40px 15px;
        margin: 0 auto;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 56px;
          height: 59px;
          margin-bottom: 20px;
          display: block;
          animation: rot 3s linear infinite;
        }
        span {
          font-size: 13px;
          line-height: 18px;
          color: #fff;
          text-align: left;
        }
      }
    }
  }
  @keyframes rot {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
</style>

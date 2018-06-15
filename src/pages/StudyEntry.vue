<template>
  <div class="study-entry">
    <NavigatorBar title="学习安排" navType="light" bgColor="#fff"/>
    <div class="top-info">
      持有C类驾驶证，在一个记分周期内记满12分未达24分以上的驾驶人，应当在15日内参加交通管理部门组织的道路交通安全法律、法规和相关知识学习，以“线下+线上”学习相结合的方式在7日内完成，并在学习后申请进行考试。
    </div>
    <div class="info-main">
      <div class="info-item">
        <span class="badge">1</span>
        <span class="text">线上学习分为必学课程和选学课程：必学课程是基于满分驾驶人的违法行为生成的定制化教育课程，选学课程是为进一步提升交通安全意识的高阶驾驶技巧课程。</span>
      </div>
      <div class="info-item">
        <span class="badge">2</span>
        <span class="text">线上学习累计需拿到12学分，其中必学课程需全部拿到学分，选学课程可自行选择学习相应门数并达到总学分要求。</span>
      </div>
      <div class="info-item">
        <span class="badge">3</span>
        <span class="text">线上学习过程中，系统将随机进行身份验证，未通过的本次学习无效。学习过程中发现违规替代等情况，本次学习无效。</span>
      </div>
      <div class="info-item">
        <span class="badge">4</span>
        <span class="text">线上学习将从学时、学习内容覆盖度、知识点测评三个维度综合进行考评，学习时需达到每课时的学时和进度要求，并通过全部知识点测评，才能拿到学分（学分进度显示100%）</span>
      </div>
    </div>

    <div :class="['bottom-active', showBottomBar? 'active': '']">
      <div :class="['active-btn', canEntry? '' : 'disable']" @click="tapEntry">
        开始线上学习
      </div>
      <div class="enter-info" @click="tapChange">
        <span :class="[canEntry? 'active' : '']">我已仔细阅读学习须知，确认相关学习要求</span>
      </div>
    </div>
    <div :class="['loading-bg', showLoading? 'active': '']"></div>
    <div :class="['loading-box', showLoading? 'active': '']">
      <div class="loading">
        <img src="../assets/pages/StudyEntry/spinner.png" class="icon">
        <span>正在基于您的违法行为生成定制化教育课程，请稍候...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "study-entry",
    data() {
      return {
        showBottomBar: false,
        canEntry: true,
        showLoading: false
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {
      if(this.$route.query.buttom == 'show'){
        this.showBottomBar = true
      }
    },
    methods: {
      tapChange() {
        this.canEntry = !this.canEntry
      },
      tapEntry() {
        this.showLoading = true;
        setTimeout(() => {
          sessionStorage.setItem('entryStudy', true)
          this.$router.push({path: '/study_full', query: {backlength: 2}})
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  @keyframes rot {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
  .study-entry {
    padding-top: 44px;
    .top-info {
      padding: 15px;
      background: #E0EEFF;
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 10px;
    }
    .info-main {
      padding: 15px;
      background: #fff;
      .info-item {
        display: flex;
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
        .badge {
          flex-shrink: 0;
          display: block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          margin-right: 10px;
          background: #45A4F7;
          color: #fff;
          font-size: 10px;
          border-radius: 4px;
        }
        .text {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
    .bottom-active {
      display: none;
      width: 100%;
      position: fixed;
      bottom: 0;
      padding: 10px 15px 15px;
      background: #fff;
      &.active {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .active-btn {
        width: 300px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        &.disable {
          background: #dbdbdb;
        }
      }
      .enter-info {
        span {
          color: #666;
          font-size: 12px;
          line-height: 17px;
          background-size: 13px 14px;
          background-repeat: no-repeat;
          background-position: left center;
          background-image: url("../assets/pages/StudyEntry/ion.png");
          padding-left: 23px;
          &.active {
            background-image: url("../assets/pages/StudyEntry/ion-active.png");
          }
        }
      }
    }
    .loading-bg{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: 0.5;
      z-index: 1070;
      display: none;
      &.active {
        display: block;
      }
    }
    .loading-box {
      width: 100%;
      height: auto;
      position: fixed;
      top: 180px;
      text-align: center;
      z-index: 1070;
      display: none;
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
</style>

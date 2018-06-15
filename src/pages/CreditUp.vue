<template>
  <div class="credit-up">
    <NavigatorBar title="提升驾驶信用" bgColor="#fff" navType="light"/>
    <div class="main-panel">
      <div class="info">
        <span class="before">{{beforeScore}}</span>
        <span class="after">{{afterScore}}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-info" :style="{width: progress + '%'}"></div>
      </div>
      <span class="info-desc">你已完成3项，继续加油啊！</span>
    </div>
    <div class="panel-group">
      <div class="panel-item" v-for="panel in panelData" @click="tapGo(panel.goWhere)">
        <img :src="panel.icon" class="panel-icon"/>
        <div class="panel-info">
          <p class="title">{{panel.title}}</p>
          <p class="desc">{{panel.desc}}</p>
        </div>
        <div class="go-done" v-if="!panel.isComplete">
          <span>{{panel.goText}}</span>
        </div>
        <img src="../assets/pages/creditUp/complete.png" class="complete" v-else/>
      </div>
    </div>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "credit-up",
    data() {
      return {
        beforeScore: 732,
        afterScore: 800,
        progress: 0,
        panelData:[
          {
            icon: require('../assets/pages/creditUp/studyIcon.png'),
            title: '学习《防御性驾驶宝典》',
            desc: '全面提升驾驶技巧与安全意识',
            goText: '去学习',
            isComplete: false,
            goWhere: 'classGroup',
          },
          {
            icon: require('../assets/pages/creditUp/studyIcon.png'),
            title: '学习《请慢一点，平安是福！》',
            desc: '全面提升驾驶技巧与安全意识',
            goText: '去学习',
            isComplete: false,
            goWhere: 'video1',
          },
          {
            icon: require('../assets/pages/creditUp/repairIcon.png'),
            title: '完善车辆保养档案',
            desc: '及时保养爱车，行车更加安心！',
            goText: '去完成',
            isComplete: false,
            goWhere: 'carManager',
          },
          {
            icon: require('../assets/pages/creditUp/userIcon.png'),
            title: '实名认证',
            desc: '认证您的个人真实身份信息',
            goText: '去完成',
            isComplete: true,
            goWhere: false,
          },
          {
            icon: require('../assets/pages/creditUp/carIcon.png'),
            title: '补全车辆信息',
            desc: '添加并认证您的车辆信息',
            goText: '去完成',
            isComplete: true,
            goWhere: false,
          },
        ]
      }
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 增加数值 */
      this.$nextTick(function () {
        setTimeout(() => {
          this.progress = 80
        }, 500)
      })
    },
    methods: {
      tapGo(where){
        switch(where){
          case 'carManager':
            this.$router.push({path: '/manager', query: {lsNum: 'N627M9', carType: '广汽 欧蓝德', inspection: 2, insurance: 2}})
            break
          case 'video1':
            this.$router.push({path: '/class_simple', query: {vid: 1}})
            break
          case 'classGroup':
            this.$router.push('/class_group')
        }
      }
    },
    components: {
      NavigatorBar
    }
  }
</script>

<style lang="less" scoped>
  .credit-up {
    padding-top: 44px;
    .main-panel {
      height: 182px;
      padding: 0 50px;
      background-color: #45A4F7;
      display: flex;
      flex-direction: column;
      align-items: center;
      .info{
        width: 190px;
        overflow: hidden;
        margin-top: 30px;
        margin-bottom: 30px;
        background: url("../assets/pages/creditUp/up-arrow.png") center no-repeat;
        background-size: 41px 19px;
        span{
          font-size: 32px;
          line-height: 32px;
          color: #fff;
          &.before {
            float: left;
          }
          &.after {
            float: right;
          }
        }
      }
      .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, .2);
        overflow: hidden;
        border-radius: 4px;
        margin-bottom: 10px;
        .progress-info {
          float: left;
          height: 4px;
          background: #79CEFF;
          transition: .8s;
        }
      }
      .info-desc {
        color: #fff;
        font-size: 11px;
        line-height: 16px;
      }

    }
    .panel-group {
      padding: 0 25px;
      margin-top: -35px;
      .panel-item {
        width: 100%;
        height: 70px;
        background: #fff;
        margin-bottom: 15px;
        position: relative;
        padding-left: 70px;
        border-radius: 8px;
        .panel-icon {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 15px;
          left: 15px;
        }
        .panel-info {
          overflow: hidden;
          .title {
            color: #4A4A4A;
            font-size: 13px;
            line-height: 13px;
            margin-top: 20px;
            margin-bottom: 7px;
          }
          .desc {
            color: #666666;
            font-size: 11px;
            line-height: 11px;
          }
        }
        .go-done {
          font-size: 11px;
          color: #fff;
          line-height: 20px;
          padding: 0 14px;
          background: #45A4F7;
          border-radius: 20px;
          position: absolute;
          right: 15px;
          top: 25px;
        }
        .complete {
          width: 24px;
          height: 25px;
          position: absolute;
          right: 15px;
          top: 23px;
        }
      }
    }
  }

</style>

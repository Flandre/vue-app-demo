<template>
  <div class="my-insurance">
    <NavigatorBar title="我的保单" bgColor="#fff" navType="light"/>
    <div class="insurance-list">
      <div class="insurance-item" v-for="i in insuranceData">
        <p :class="['name', i.type]">{{i.name}}</p>
        <p class="code">保险单号：{{i.code}}</p>
        <p class="end-time">到期时间：{{i.endTime}}</p>
        <span v-if="!i.overTime" class="button" @click="bindTooltip">一键报险</span>
        <span class="over-time" v-else>已到期</span>
      </div>
    </div>
    <ToolTip ref="ToolTip"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "my-insurance",
    components: {
      NavigatorBar,
      ToolTip
    },
    data() {
      return {
        insuranceData: [
          {
            name: '平安产险',
            type: 'coercive',
            code: '1008000000000000',
            endTime: '2019-01-01',
            overTime: false
          },
          {
            name: '平安产险',
            type: 'business',
            code: '100000000000',
            endTime: '2019-01-01',
            overTime: false
          },
          {
            name: '平安产险',
            type: 'business',
            code: '1000002322',
            endTime: '2017-12-31',
            overTime: true
          }
        ]
      }
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.type == 2){
        this.panelColor = '#FBCB61'
        this.remainingDay = 24
      }
    },
    methods: {
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-insurance {
    padding-top: 44px;
    .insurance-list {
      .insurance-item {
        padding: 15px;
        background: #fff;
        font-size: 13px;
        line-height: 13px;
        color: #333;
        margin-bottom: 10px;
        position: relative;
        .name {
          line-height: 16px;
          padding-left: 24px;
          background-size: 14px 14px;
          background-position: left center;
          background-repeat: no-repeat;
          margin-bottom: 15px;
          &.coercive {
            background-image: url("../assets/pages/MyInsurance/coercive.png");
          }
          &.business {
            background-image: url("../assets/pages/MyInsurance/business.png");
          }
        }
        .code {
          margin-bottom: 10px;
        }
        .button {
          display: inline-block;
          font-size: 13px;
          line-height: 30px;
          padding-left: 35px;
          padding-right: 12px;
          border: 1px solid #45A4F7;
          color: #45A4F7;
          border-radius: 30px;
          background: url("../assets/pages/MyInsurance/phoneIcon.png") 10px center no-repeat;
          background-size: 16px 16px;
          position: absolute;
          right: 15px;
          top: 50%;
          margin-top: -15px;
        }
        .over-time {
          position: absolute;
          right: 15px;
          top: 50%;
          margin-top: -7px;
          color: #A4B2C3;
        }
      }
    }

  }

</style>

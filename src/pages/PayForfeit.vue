<template>
  <div class="pay-forfeit">
    <NavigatorBar title="缴纳罚款" navType="light" bgColor="#fff"/>
    <div class="panel-item">
      <div class="data-container">
        <div class="ls-box">
            <span class="ls-num">
              {{detailData.lsNum}}
            </span>
        </div>
        <p class="time">{{detailData.time}}</p>
      </div>
      <p class="title">{{detailData.title}}</p>
      <div class="info-box">
        <div class="danger-box">
          <b>危险指数</b>
          <img :src="detailData.dangerLevel" class="danger-level">
        </div>
        <span class="score">{{detailData.score}}</span>
        <span class="price">{{detailData.price}}</span>
      </div>
      <p class="desc">{{detailData.desc}}</p>
      <p class="code">决定书编号: {{detailData.code}}</p>
    </div>
    <div class="forfeit-info">
      <span class="title">罚款金额: </span>
      <span class="price">200元</span>
    </div>
    <div class="pay-type">
      <div class="title">银行卡支付</div>
      <div class="pay-group">
        <div class="pay-item" @click="changeType(1)">
          <img src="../assets/pages/PayForfeit/ICBClogo.png" class="type-logo">
          <div class="type-info">
            <div class="name">工商银行</div>
            <div class="desc">工商银行牡丹卡在线支付服务</div>
          </div>
          <img src="../assets/pages/PayForfeit/Reveal-active.png" class="select-icon" v-if="selectType == 1">
          <img src="../assets/pages/PayForfeit/Reveal.png" class="select-icon" v-else>
        </div>
      </div>
    </div>
    <div class="pay-type">
      <div class="title">其他支付方式</div>
      <div class="pay-group">
        <div class="pay-item" @click="changeType(2)">
          <img src="../assets/pages/PayForfeit/wechatlogo.png" class="type-logo">
          <div class="type-info">
            <div class="name">微信支付</div>
          </div>
          <img src="../assets/pages/PayForfeit/Reveal-active.png" class="select-icon" v-if="selectType == 2">
          <img src="../assets/pages/PayForfeit/Reveal.png" class="select-icon" v-else>
        </div>
        <div class="pay-item" @click="changeType(3)">
          <img src="../assets/pages/PayForfeit/alipaylogo.png" class="type-logo">
          <div class="type-info">
            <div class="name">支付宝</div>
          </div>
          <img src="../assets/pages/PayForfeit/Reveal-active.png" class="select-icon" v-if="selectType == 3">
          <img src="../assets/pages/PayForfeit/Reveal.png" class="select-icon" v-else>
        </div>
      </div>
    </div>
    <div class="action-bottom">
      <div class="button" @click="bindTooltip">
        <span>确认支付</span>
      </div>
    </div>
    <ToolTip ref="ToolTip"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "pay-forfeit",
    data() {
      return {
        detailData: {
          time: '2017-03-10 15:17',
          title: '北京市丰台区南三环辅路右安门南桥东侧地下停车场入口 全方向',
          desc: '驾驶中型以上载客汽车在城市快速路上行驶超过规定时速未达20％的',
          score: 6,
          price: 200,
          dangerLevel: require('../assets/pages/PayForfeit/danger-type-4.png'),
          moreColor: '#FF8D47',
          lsNum: '京N627M9',
          code: 1105041817264890,
        },
        selectType: 1
      }
    },
    components: {
      ToolTip,
      NavigatorBar,
    },
    beforeMount() {
      window.scrollTo(0, 0)
    },
    methods: {
      changeType(type) {
        this.selectType = type
      },
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    }
  }
</script>

<style lang="less" scoped>
  .pay-forfeit {
    padding-top: 44px;
    .panel-item {
      background: #fff;
      margin-bottom: 10px;
      position: relative;
      padding: 15px;
      .data-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 7px;
        .ls-box {
          padding: 1px;
          background: #45A4F7;
          border-radius: 4px;
          .ls-num {
            display: block;
            font-size: 11px;
            line-height: 20px;
            background: #45A4F7;
            border: 1px solid #fff;
            padding: 0 5px;
            color: #fff;
            border-radius: 4px;
          }
        }
        .time {
          color: #ABABAB;
          font-size: 11px;
          line-height: 11px;
        }
      }
      .title {
        color: #333333;
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 9px;
      }
      .info-box {
        overflow: hidden;
        margin-bottom: 10px;
        .danger-box {
          display: inline-block;
          margin-right: 20px;
          b {
            font-size: 13px;
            line-height: 18px;
            vertical-align: middle;
          }
          .danger-level {
            width: 40px;
            height: 14px;
            display: inline-block;
            vertical-align: middle;
          }
        }
        span {
          font-size: 11px;
          line-height: 16px;
          color: #A4B2C3;
          padding-left: 21px;
          margin-right: 20px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: left center;
          &.score {
            background-image: url("../assets/pages/PayForfeit/scoreIcon.png");
          }
          &.price {
            background-image: url("../assets/pages/PayForfeit/moneyIcon.png");
          }
        }
      }
      .desc {
        color: #333333;
        font-size: 12px;
        line-height: 17px;
        margin-bottom: 5px;
      }
      .code {
        font-size: 11px;
        line-height: 16px;
        color: #ABABAB;
      }
    }
    .forfeit-info {
      padding: 0 15px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 13px;
        line-height: 48px;
      }
      .price {
        color: #D84040;
        font-size: 17px;
        line-height: 48px;
      }
    }
    .pay-type {
      .title {
        color: #6D6D72;
        font-size: 13px;
        line-height: 30px;
        padding: 0 15px;
        border-bottom: 1px solid #C8C7CC;
      }
      .pay-group {
        padding-left: 15px;
        background: #fff;
        .pay-item {
          padding: 12px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #dbdbdb;
          &:last-child {
            border-bottom: 0;
          }
          .type-logo {
            width: 40px;
            height: 40px;
            flex-shrink:0;
            margin-right: 15px;
          }
          .type-info {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .name {
              font-size: 13px;
              line-height: 18px;
              color: #333;
            }
            .desc {
              color: #ABABAB;
              font-size: 11px;
              line-height: 16px;
              margin-top: 5px;
            }
          }
          .select-icon {
            width: 46px;
            height: 44px;
            flex-shrink:0;
          }
        }
      }

    }
    .action-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 10px 35px;
      background: #fff;
      border-top: 1px solid #dbdbdb;
      .button {
        background: #45A4F7;
        color: #fff;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 4px;
      }
    }

  }
</style>

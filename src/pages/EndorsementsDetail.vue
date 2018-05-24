<template>
  <div class="endorsements-detail">
    <NavigatorBar title="京QY96N0" bgColor="#FBCB61"/>
    <div class="endorsements-panel">
      <div class="panel-item">
        <span class="total">4</span>
        <span class="info count">未处理违章</span>
      </div>
      <div class="panel-item">
        <span class="total">6</span>
        <span class="info score">扣分</span>
      </div>
      <div class="panel-item">
        <span class="total">600</span>
        <span class="info price">罚款</span>
      </div>
    </div>
    <div class="detail-panel">
      <div class="panel-item" v-for="i in detailData">
        <p class="time">{{i.time}}</p>
        <p class="title">{{i.title}}</p>
        <div class="info-box">
          <span class="score">{{i.score}}</span>
          <span class="price">{{i.price}}</span>
        </div>
        <p class="desc">{{i.desc}}</p>
        <div class="danger-box">
          <b>危险指数</b>
          <img :src="i.dangerLevel" class="danger-level">
        </div>
        <div class="more" :style="{background: i.moreColor}">
          <span>更多内容</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "endorsements-detail",
    data() {
      return {
        detailData: [
          {
            time: '2017-03-10 15:17',
            title: '北京市丰台区南三环辅路右安门南桥东侧地下停车场入口 全方向',
            desc: '故意污损机动车号牌的',
            score: 3,
            price: 200,
            dangerLevel: require('../assets/pages/EndorsementsDetail/danger-type-3.png'),
            moreColor: '#FBCB61'
          },
          {
            time: '2017-02-20 13:07',
            title: '北京市怀柔区庙城镇其它道路 庙城镇至庙城镇路段',
            desc: '故意污损机动车号牌的',
            score: 3,
            price: 200,
            dangerLevel: require('../assets/pages/EndorsementsDetail/danger-type-3.png'),
            moreColor: '#FBCB61'
          },
          {
            time: '2016-07-15 14:41',
            title: '河北省大广高速承赤段赤峰方向1052公里处',
            desc: '驾驶中型以上载客载货汽车、危险物品运输车辆以外的机动车超过规定时速10%以下的',
            score: 0,
            price: 200,
            dangerLevel: require('../assets/pages/EndorsementsDetail/danger-type-2.png'),
            moreColor: '#A4B2C3'
          },
        ]
      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../fonts/DINCondensedC.ttf");
  }
  .endorsements-detail {
    margin-top: 44px;
    .endorsements-panel {
      position: fixed;
      width: 100%;
      height: 100px;
      top: 44px;
      background: #FBCB61;
      display: flex;
      justify-content: space-around;
      padding: 25px;
      z-index: 990;
      .panel-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 110px;
        color: #fff;
        .total {
          font-family: "DIN Condensed";
          font-size: 28px;
          line-height: 28px;
        }
        .info {
          font-size: 11px;
          line-height: 16px;
          padding-left: 20px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: left center;
          margin-top: 5px;
          &.count {
            background-image: url("../assets/pages/EndorsementsDetail/count.png");
          }
          &.score {
            background-image: url("../assets/pages/EndorsementsDetail/score.png");
          }
          &.price {
            background-image: url("../assets/pages/EndorsementsDetail/price.png");
          }
        }

      }
    }
    .detail-panel {
      margin-top: 110px;
      .panel-item {
        background: #fff;
        margin-bottom: 10px;
        position: relative;
        padding: 15px;
        .time {
          color: #ABABAB;
          font-size: 11px;
          line-height: 11px;
          margin-bottom: 5px;
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
              background-image: url("../assets/pages/EndorsementsDetail/scoreIcon.png");
            }
            &.price {
              background-image: url("../assets/pages/EndorsementsDetail/moneyIcon.png");
            }
          }
        }
        .desc {
          color: #333333;
          font-size: 12px;
          line-height: 17px;
          margin-bottom: 19px;
        }
        .danger-box {
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
        .more {
          display: block;
          position: absolute;
          right: 0;
          bottom: 10px;
          width: 110px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border-radius: 36px 0 0 36px;
          span {
            display: inline-block;
            font-size: 13px;
            color: #fff;
            line-height: 36px;
            height: 36px;
            padding-right: 21px;
            background-size: 12px 11px;
            background-repeat: no-repeat;
            background-position: right center;
            background-image: url("../assets/pages/EndorsementsDetail/moreIcon.png");
          }
        }
      }
    }
  }

  .slide-left-enter-active  .endorsements-panel,
  .slide-right-leave-active  .endorsements-panel,
  .slide-left-leave-active  .endorsements-panel,
  .slide-right-enter-active  .endorsements-panel {
    top: 0px !important;
  }
</style>

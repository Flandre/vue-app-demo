<template>
  <div class="jzcf-history">
    <div class="endorsement-panel">
      <div class="panel-item" v-for="i in detailData">
        <div class="data-container">
          <div class="ls-box">
            <span class="ls-num">
              {{i.lsNum}}
            </span>
          </div>
          <p class="time">{{i.time}}</p>
        </div>
        <p class="title">{{i.title}}</p>
        <div class="info-box">
          <div class="danger-box">
            <b>危险指数：</b>
            <img :src="i.dangerLevel" class="danger-level">
          </div>
          <span class="score">{{i.score}}</span>
          <span class="price">{{i.price}}</span>
        </div>
        <p class="desc">{{i.desc}}</p>
        <p class="code">决定书编号: {{i.code}}</p>
        <div class="active-bar">
          <div class="active-item" @click="tapMore(i.linkID)">
            <span class="more">更多内容</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jzcf-history",
    data() {
      return {
        detailData: [
          {
            time: '2017-02-20 13:07',
            title: '北京市怀柔区庙城镇其它道路 庙城镇至庙城镇路段',
            desc: '变更车道时影响正常行驶的机动车的',
            score: 0,
            price: 200,
            dangerLevel: require('./images/danger-type-1.png'),
            moreColor: '#617792',
            lsNum: '京N627M9',
            code: 1105034982759182,
            linkID: 0,
          },
          {
            time: '2017-03-10 15:17',
            title: '北京市丰台区南三环辅路右安门南桥东侧地下停车场入口 全方向',
            desc: '驾驶中型以上载客汽车在城市快速路上行驶超过规定时速未达20％的',
            score: 6,
            price: 200,
            dangerLevel: require('./images/danger-type-4.png'),
            moreColor: '#FF8D47',
            lsNum: '京N627M9',
            code: 1105041834353446,
            linkID: 1,
          },
        ]
      }
    },
    beforeMount() {
      window.scrollTo(0, 0)
    },
    methods: {
      tapMore(id) {
        this.$router.push({path: '/endorsement_more', query: {aid: id}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .jzcf-history {
    .endorsement-panel {
      .panel-item {
        background: #fff;
        margin-bottom: 10px;
        position: relative;
        padding: 15px;
        padding-bottom: 0;
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
              background-image: url("./images/scoreIcon.png");
            }
            &.price {
              background-image: url("./images/moneyIcon.png");
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
          margin-bottom: 15px;
        }
      }
      .active-bar {
        border-top: 1px solid #dbdbdb;
        display: flex;
        .active-item {
          flex-grow: 1;
          height: 46px;
          line-height: 46px;
          text-align: center;
          font-size: 13px;
          color: #333;
          .to-pay {
            padding-left: 23px;
            background: url("./images/cardIcon.png") left center no-repeat;
            background-size: 18px 14px;
          }
          .more {
            padding-right: 19px;
            background: url("./images/moreIcon.png") right center no-repeat;
            background-size: 14px 14px;
          }
        }
      }
    }

  }
</style>

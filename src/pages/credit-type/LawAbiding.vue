<template>
  <div class="type-container">
    <p class="desc">良好的交通守法记录将帮助你获得更高的驾驶信用，交通违法行为将给你的驾驶信用带来负面影响。</p>
    <p class="list-title">近期交通违法记录</p>
    <div class="list-group">
      <div class="list-item" v-for="item in recordData" @click="tapItem(item.type)">
        <p class="code">{{item.code}}</p>
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <div class="info">
          <span class="score">{{item.score}}</span>
          <span class="money">{{item.money}}</span>
          <span class="time">{{item.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "law-abiding",
    data() {
      return {
        recordData: [
          {
            code: '京N627M9',
            title: '变更车道时影响正常行驶的机动车的',
            desc: '北京市怀柔区庙城镇其它道路 庙城镇至庙城镇路段',
            score: 0,
            money: 200,
            time: '2017-02-20 13:07',
            type: 0
          },
        ]
      }
    },
    methods: {
      tapItem(type) {
        this.$router.push({path: '/endorsement_more', query: {aid: type}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .type-container {
    .desc {
      color: #333333;
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 15px;
    }
    .list-title {
      color: #333333;
      font-size: 13px;
      line-height: 43px;
    }
    .list-group {
      .list-item {
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: 1px solid #DBDBDB;
        .code {
          color: #45A4F7;
          font-size: 15px;
          line-height: 15px;
          margin-bottom: 10px;
        }
        .title {
          color: #333;
          font-size: 13px;
          line-height: 18px;
          margin-bottom: 9px;
        }
        .desc {
          font-size: 12px;
          line-height: 17px;
          color: #666666;
          margin-bottom: 10px;
        }
        .info {
          overflow: hidden;
          .score {
            color: #A4B2C3;
            font-size: 11px;
            line-height: 18px;
            padding-left: 23px;
            background: url("../../assets/pages/creditKnow/law-abiding/scoreIcon.png") left center no-repeat;
            background-size: 18px 18px;
            float: left;
            margin-right: 20px;
          }
          .money {
            color: #A4B2C3;
            font-size: 11px;
            line-height: 18px;
            padding-left: 23px;
            background: url("../../assets/pages/creditKnow/law-abiding/moneyIcon.png") left center no-repeat;
            background-size: 18px 18px;
            float: left;
          }
          .time {
            color: #ABABAB;
            font-size: 11px;
            float: right;
          }
        }
      }
    }
  }
</style>

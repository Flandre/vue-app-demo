<template>
  <div class="type-container">
    <p class="desc">丰富、真实的个人身份及实名信息，是驾驶信用的评估因素之一。</p>
    <div class="panel-group">
      <div class="panel-item" v-for="panel in panelData">
        <img :src="panel.icon" class="panel-icon"/>
        <div class="panel-info">
          <p class="title">{{panel.title}}</p>
          <p class="desc">{{panel.desc}}</p>
        </div>
        <div v-if="!panel.isComplete" class="go-done">
          <span>去完成</span>
        </div>
        <img src="../../assets/pages/creditKnow/identity/complete.png" class="complete" v-else/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "identity",
    data() {
      return {
        panelData:[
          {
            icon: require('@/assets/pages/creditKnow/identity/car.png'),
            title: '绑定车辆',
            desc: '添加您的车辆信息',
            isComplete: true,
          },
          {
            icon: require('@/assets/pages/creditKnow/identity/card.png'),
            title: '绑定驾驶证',
            desc: '添加您的驾驶证信息',
            isComplete: false,
          },
          {
            icon: require('@/assets/pages/creditKnow/identity/phone.png'),
            title: '绑定手机号',
            desc: '添加并验证您的手机号码',
            isComplete: true,
          },
        ]
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
    .panel-group {
      .panel-item {
        width: 100%;
        height: 70px;
        background: rgba(164, 178, 195, .1);
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

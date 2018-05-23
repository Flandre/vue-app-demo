<template>
  <div class="type-container">
    <p class="desc">履约情况：主要根据年审、年检、违法处理、保险、车贷等对你的履约情况进行综合评估。</p>
    <div class="list-group">
      <div class="list-item" v-for="ap in appointmentInfo">
        <span class="name">{{ap.name}}</span>
        <span class="count">{{ap.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appointment",
    data() {
      return {
        appointmentInfo: [
          {
            name: '按时守约',
            count: '2次',
          },
          {
            name: '违约行为',
            count: '0次',
          },
          {
            name: '近一年车贷还款',
            count: '6个月',
          },
          {
            name: '近一年出险次数',
            count: '1次',
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
    .list-title {
      color: #333333;
      font-size: 13px;
      line-height: 43px;
    }
    .list-group {
      .list-item {
        height: 45px;
        border-bottom: 1px solid #DBDBDB;
        span {
          line-height: 45px;
          font-size: 13px;
          &.count {
            float: right;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>

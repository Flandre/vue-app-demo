<template>
  <div class="type-container">
    <p class="desc">提取驾驶过程中的行为数据评估驾驶质量、交通安全意识与素养。</p>
    <p class="list-title">近期危险驾驶行为</p>
    <div class="list-group">
      <div class="list-item" v-for="danger in dangerType">
        <span class="name">{{danger.name}}</span>
        <span class="count">{{danger.count}}次</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "conduct",
    data() {
      return {
        dangerType: [
          {
            name: '超速',
            count: 0,
          },
          {
            name: '分心驾驶',
            count: 0,
          },
          {
            name: '急加速',
            count: 0,
          },
          {
            name: '急转弯',
            count: 1,
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
        border-top: 1px solid #DBDBDB;
        span {
          line-height: 45px;
          font-size: 13px;
          &.count {
            float: right;
          }
        }
      }
    }
  }
</style>

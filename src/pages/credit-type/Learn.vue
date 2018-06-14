<template>
  <div class="type-container">
    <p class="desc">通过在线学习，不断提升交通安全意识与素养，有助于提升信用。</p>
    <p class="list-title">近期学习积分：<em class="price">800</em><em class="desc">（最低积分要求：2000）</em></p>
    <div class="list-group">
      <div class="list-item" v-for="study in studyType">
        <span class="name">{{study.name}}</span>
        <span class="count">+{{study.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "learn",
    data() {
      return {
        studyType: [
          {
            name: '学完《超速的危害》',
            count: 200,
          },
          {
            name: '学完《分心驾驶的危害》',
            count: 200,
          },
          {
            name: '学完《急加速的危害》',
            count: 200,
          },
          {
            name: '学完《新手上路指南》',
            count: 200,
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
      em {
        font-style: normal;
        &.price {
          color: #FEAB34;
        }
        &.desc {
          color: #ABABAB;
        }
      }
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
            color: #FEAB34;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="endorsements-more">
    <NavigatorBar title="" bgColor="#fff" navType="dark" scrollType="fade" navTypeChange="change"/>
    <img src="../assets/pages/EndorsementsMore/banner.png" class="banner">
    <div class="endorsements-panel">
      <p class="title">故意污损机动车号牌的</p>
      <div class="info-box">
        <b>危险指数</b>
        <img src="../assets/pages/EndorsementsMore/danger-type-3.png" class="danger-level">
        <span class="score">3</span>
        <span class="price">200</span>
      </div>
    </div>
    <div class="endorsements-article">
      <p>故意污损号牌对道路交通安全畅通的危害性非常大。“故意”是一种明知故犯的心理态度，故意污损号牌者违反交通法规，令电子警察、电子雷达测试仪等监控设备形同虚设，从而肆意超速、逆向行驶、闯红灯等而不能及时得到处罚，严重扰乱道路交通安全秩序。</p>
      <img src="../assets/pages/EndorsementsMore/article-img.png">
    </div>
    <ArticleList title="行动指南" articleGroup="endorsement" articleType="endorsement-type"/>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "endorsements-more",
    components: {
      NavigatorBar,
      ArticleList
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  .endorsements-more {
    .banner {
      width: 100%;
      height: auto;
      display: block;
    }
    .endorsements-panel {
      padding: 15px;
      background: #fff;
      border-bottom: 1px solid #DBDBDB;
      .title {
        color: #333333;
        font-size: 17px;
        line-height: 30px;
        margin-bottom: 8px;
      }
      .info-box {
        overflow: hidden;
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
          margin-right: 20px;
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
            background-image: url("../assets/pages/EndorsementsDetail/scoreIcon.png");
          }
          &.price {
            background-image: url("../assets/pages/EndorsementsDetail/moneyIcon.png");
          }
        }
      }
    }
    .endorsements-article {
      padding: 15px;
      background: #fff;
      margin-bottom: 10px;
      p {
        font-size: 15px;
        line-height: 27px;
        color: #333;
        margin-bottom: 15px;
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 15px;
      }
    }
  }
</style>

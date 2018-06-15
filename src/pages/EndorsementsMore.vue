<template>
  <div class="endorsements-more">
    <NavigatorBar title="" bgColor="#fff" navType="dark" scrollType="fade" navTypeChange="change"/>
    <img :src="banner" class="banner">
    <div class="endorsements-panel">
      <p class="title">{{title}}</p>
      <div class="info-box">
        <b>危险指数</b>
        <img :src="dangerLevel" class="danger-level">
        <span class="score">{{score}}</span>
        <span class="price">{{price}}</span>
      </div>
    </div>
    <div class="endorsements-article">
      <p v-for="p in detail">{{p}}</p>
    </div>
    <div class="recommend-study">
      <div class="title">推荐学习</div>
      <div class="video-info">
        <img :src="videoThumb" class="thumb">
        <div class="info-box">
          <p class="video-title">{{videoTitle}}</p>
          <p class="desc">学习并通过测评可获得200积分</p>
        </div>
      </div>
    </div>
    <ArticleList title="行动指南" articleLimit="1" articleSort="5" articleType="endorsement-type" v-if="showArticle"/>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "endorsements-more",
    data() {
      return {
        dataSource: [
          {
            title: '变更车道时影响正常行驶的机动车的',
            banner: require('../assets/pages/EndorsementsMore/banner1.png'),
            dangerLevel: require('../assets/pages/EndorsementsMore/danger-type-1.png'),
            score: 0,
            price: 200,
            detail: [
              '违法变更车道极易引发交通事故，特别是压白色实线或不开启转向灯突然并线，将导致发生事故的几率倍增。违法变更车道把交通从有序变成无序，把接续行驶变成断续行驶，严重的干扰交通流、降低通行效率。数据表明，由违法变更车道造成的交通事故占全天交通事故的40%！',
              '您应当在变更车道前，提前开启转向灯，确认想要前往的相邻车道后方车辆与您有足够的安全距离时，缓打方向完成并线，动作一气呵成，不要长时间压线行驶。'
            ],
            videoThumb: require('../assets/pages/EndorsementsMore/video2.png'),
            videoTitle: '变更车道'
          },
          {
            title: '驾驶中型以上载客汽车在城市快速路上行驶超过规定时速未达20％的',
            banner: require('../assets/pages/EndorsementsMore/banner2.png'),
            dangerLevel: require('../assets/pages/EndorsementsMore/danger-type-4.png'),
            score: 6,
            price: 200,
            detail: [
              '限速规定是根据道路线型、车流量以及管理要求设计的科学合理的速度限值，超过限速规定允许的速度行驶会带来极大的安全隐患。',
              '随着车速的增加，您的有效视野会变窄、注视点变远、注意力转移变得困难，不能有效获取和分析足够的交通信息。一般城市道路设计的速度充分考虑了可视距离和交通流，如果超过限速规定的行驶速度，会对前方突然出现的险情难以做出及时、准确、妥善的处置，很可能出现反应滞后、判断失误或处置失当的状况，极易引发交通事故。',
              '另外，在车流中超过规定的行驶速度必然会导致超车行为的发生几率，无端产生更多的交织点和冲突点。',
              '如果您是无意间产生的轻微超速，这有可能是速度错觉引起的，所以请您养成经常观察车速表的习惯，控制好您的车速！'
            ],
            videoThumb: require('../assets/pages/EndorsementsMore/video1.png'),
            videoTitle: '超速'
          }
        ],
        banner: '',
        title: '',
        dangerLevel: '',
        score: 0,
        price: 0,
        detail: [],
        videoThumb: '',
        videoTitle: '',
        showArticle: false
      }
    },
    components: {
      NavigatorBar,
      ArticleList
    },
    beforeMount() {
      if(this.$route.query.aid == 0){
        this.showArticle = true
      }
      let aid = this.$route.query.aid || 0
      this.banner = this.dataSource[aid].banner
      this.title = this.dataSource[aid].title
      this.dangerLevel = this.dataSource[aid].dangerLevel
      this.score = this.dataSource[aid].score
      this.price = this.dataSource[aid].price
      this.detail = this.dataSource[aid].detail.concat([])
      this.videoThumb = this.dataSource[aid].videoThumb
      this.videoTitle = this.dataSource[aid].videoTitle
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
    .recommend-study {
      padding-left: 15px;
      background: #fff;
      margin-bottom: 10px;
      .title {
        font-size: 15px;
        line-height: 40px;
        border-bottom: 1px solid #dbdbdb;
      }
      .video-info {
        padding: 15px;
        padding-left: 0;
        display: flex;
        .thumb {
          width: 112px;
          height: 63px;
          margin-right: 15px;
        }
        .info-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          flex-grow: 1;
          background: url("../assets/pages/EndorsementsMore/arrowRight.png") right center no-repeat;
          background-size: 8px 13px;
          .video-title {
            margin-top: 5px;
            font-size: 13px;
            line-height: 17px;
          }
          .desc {
            color: #45A4F7;
            font-size: 12px;
            line-height: 12px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
</style>

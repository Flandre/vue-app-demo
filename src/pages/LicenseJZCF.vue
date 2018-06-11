<template>
  <div class="license-jzcf">
    <NavigatorBar title="驾照查分" navType="light" bgColor="#fff"/>
    <div class="top-panel">
      <div class="panel-card">
        <div class="now-score">
          <p class="title">当前记分</p>
          <p class="num">3</p>
        </div>
        <p class="desc">驾驶证累计记分满12分的，应当在15日内到驾驶证核发地或者违法行为地公安机关交通管理部门参加为期7日的道路交通安全法律、法规和相关知识学习并参加考试。</p>
      </div>
    </div>
    <div class="log-info">
      <div class="log-nav">
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/license_jzcf/now">当前记分周期</router-link>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/license_jzcf/history">历史违法记录</router-link>
        <div :class="['slider-bar', isTranslate ? 'trans' : '']" :style="{left : sliderLeft}"></div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-jzcf",
    data() {
      return {
        sliderLeft: 0,
        isTranslate: false
      }
    },
    components: {
      NavigatorBar,
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 固定箭头位置 */
      this.$nextTick(function () {
        this.sliderLeft = `${document.querySelector('.link-item.active').offsetLeft + document.querySelector('.link-item.active').offsetWidth / 2 - 35}px`
      })
    },
    methods: {
      tapClickNav(e) {
        this.sliderLeft = `${e.target.offsetLeft + e.target.offsetWidth / 2 - 35}px`
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.isTranslate = true
      next()
    },
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../fonts/DINCondensedC.ttf");
  }
  .license-jzcf {
    padding-top: 44px;
    .top-panel {
      padding: 15px;
      background: #fff;
      margin-bottom: 10px;
      .panel-card {
        background: #45A4F7;
        color: #fff;
        border-radius: 8px;
        padding: 15px 15px 9px;
        display: flex;
        align-items: flex-end;
        .now-score {
          width: 75px;
          flex-shrink:0;
          margin-right: 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            font-size: 13px;
            line-height: 18px;
            margin-bottom: 15px;
          }
          .num {
            font-family: "DIN Condensed";
            font-size: 68px;
            line-height: 68px;
          }
        }
        .desc {
          display: block;
          font-size: 11px;
          line-height: 16px;
          margin-bottom: 6px;
        }
      }
    }
    .log-info {
      .log-nav {
        width: 100%;
        height: 40px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        line-height: 40px;
        padding: 0 45px;
        z-index: 1050;
        position: relative;
        border-bottom: 1px solid #dbdbdb;
        .link-item {
          font-size: 13px;
          color: #333;
          &:last-child {
            margin-right: 0;
          }
          &.active {
            color: #45A4F7;
          }
        }
        .slider-bar {
          width: 70px;
          height: 2px;
          background: #45A4F7;
          position: absolute;
          top: 32px;
          &.trans {
            transition: .3s
          }
        }
      }
    }
  }
</style>

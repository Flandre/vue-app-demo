<template>
  <div class="license-xfjl">
    <NavigatorBar title="销分记录" navType="light" bgColor="#fff"/>
    <div class="status-nav">
      <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/license_xfjl/study">学习中</router-link>
      <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/license_xfjl/check">待审核</router-link>
      <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/license_xfjl/complete">已完成</router-link>
      <div :class="['slider-bar', isTranslate ? 'trans' : '']" :style="{left : sliderLeft}"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-xfjl",
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
        this.sliderLeft = `${document.querySelector('.link-item.active').offsetLeft + document.querySelector('.link-item.active').offsetWidth / 2 - 15}px`
      })
    },
    methods: {
      tapClickNav(e) {
        this.sliderLeft = `${e.target.offsetLeft + e.target.offsetWidth / 2 - 15}px`
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.isTranslate = true
      next()
    },
  }
</script>

<style lang="less" scoped>
  .license-xfjl {
    margin-top: 44px;
    .status-nav {
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
        width: 30px;
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
</style>

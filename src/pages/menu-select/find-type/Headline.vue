<template>
  <div class="headline">
    <div class="headline-nav">
      <div class="nav-links">
        <div class="nav-slide">
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/headline/group1">推荐阅读</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/headline/group2">驾驶技巧</router-link>
          <div :class="['slider-bar', isTranslate ? 'trans' : '']" :style="{left : sliderLeft}"></div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "headline",
    data() {
      return {
        sliderLeft: 0,
        isTranslate: false
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    mounted() {
      /* 固定箭头位置 */
      this.$nextTick(function () {
        this.sliderLeft = `${document.querySelector('.link-item.active').offsetLeft + document.querySelector('.link-item.active').offsetWidth / 2 - 8}px`
      })
    },
    beforeRouteUpdate(to, from, next) {
      this.isTranslate = true
      next()
    },
    methods: {
      tapClickNav(e) {
        this.sliderLeft = `${e.target.offsetLeft + e.target.offsetWidth / 2 - 8}px`
      }
    }
  }
</script>

<style lang="less" scoped>
  .headline {
    padding-top: 40px;
    .headline-nav {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      background: #fff;
      position: fixed;
      top: 44px;
      border-bottom: 1px solid #dbdbdb;
      z-index: 1050;
      .nav-links {
        flex-grow: 1;
        height: 40px;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        .nav-slide {
          position: absolute;
          .link-item {
            font-size: 13px;
            margin-right: 20px;
            color: #333;
            &:last-child {
              margin-right: 0;
            }
            &.active {
              color: #45A4F7;
            }
          }
          .slider-bar {
            width: 16px;
            height: 2px;
            background: #45A4F7;
            position: absolute;
            top: 32px;
            &.trans {
              transition: .3s;
            }
          }
        }
      }
    }

  }
</style>

<template>
  <div class="study">
    <div class="study-nav">
      <div class="nav-links">
        <div class="nav-slide">
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/recommend">推荐学习</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/safe">安全驾驶</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/law">交通法规</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/license">驾照考证</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/exit">出境自驾</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/child">儿童教育</router-link>
          <div :class="['slider-bar', isTranslate ? 'trans' : '']" :style="{left : sliderLeft}"></div>
        </div>
      </div>
      <div class="search-bar" @click="bindTooltip"></div>
    </div>
    <router-view/>
    <ToolTip ref="ToolTip"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  export default {
    name: "Study",
    components: {
      ToolTip,
    },
    data() {
      return {
        sliderLeft: 0,
        isTranslate: false
      }
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /* 固定箭头位置 */
      this.$nextTick(function () {
        this.sliderLeft = `${document.querySelector('.link-item.active').offsetLeft + document.querySelector('.link-item.active').offsetWidth / 2 - 8}px`
      })
    },
    methods: {
      tapClickNav(e) {
        this.sliderLeft = `${e.target.offsetLeft + e.target.offsetWidth / 2 - 8}px`
      },
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.isTranslate = true
      next()
    }
  }
</script>

<style lang="less" scoped>
  .study {
    margin-top: 40px;
    overflow: hidden;
    .study-nav {
      width: 100%;
      height: 40px;
      border: 1px solid #dbdbdb;
      background: #fff;
      position: fixed;
      top: 0;
      display: flex;
      align-items: center;
      line-height: 40px;
      padding: 0 15px;
      z-index: 1050;
      .nav-links {
        flex-grow: 1;
        height: 40px;
        white-space: nowrap;
        overflow: hidden;
        overflow-x: scroll;
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
              transition: .3s
            }
          }
        }
      }
      .search-bar {
        flex-grow: 0;
        width: 17px;
        height: 16px;
        background: url("../../assets/pages/study/searchIcon.png") center no-repeat;
        background-size: 17px 16px;
        margin-left: 10px;
      }
    }


  }
</style>

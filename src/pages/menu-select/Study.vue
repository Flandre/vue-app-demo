<template>
  <div class="study">
    <div class="study-nav">
      <div class="nav-links">
        <div class="nav-slide">
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/recommend">推荐学习</router-link>
          <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study/safe">安全驾驶</router-link>
          <div class="slider-bar" :style="{left : sliderLeft}"></div>
        </div>
      </div>
      <div class="search-bar">
        搜索
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Study",
    data() {
      return {
        sliderLeft: 0
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
      }
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
      line-height: 40px;
      padding: 0 15px;
      .nav-links {
        flex-grow: 1;
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
            transition: .3s
          }
        }
      }
      .search-bar {
        flex-grow: 0;
        width: 100px;
      }
    }


  }
</style>

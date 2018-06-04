<template>
  <div class="find">
    <div class="find-nav">
      <div class="nav-links">
        <div class="slider-bg" :style="{left : sliderLeft, width: sliderWidth}"></div>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/headline">头条</router-link>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/follow">关注</router-link>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/community">圈子</router-link>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/activity">活动</router-link>
        <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/find/lighthouse">曝光台</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Find",
    data() {
      return {
        sliderLeft: 0,
        sliderWidth: '0'
      }
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    mounted() {
      this.sliderWidth = `${document.querySelector('.link-item.active').offsetWidth}px`
      this.sliderLeft = `${document.querySelector('.link-item.active').offsetLeft}px`
    },
    methods: {
      tapClickNav(e) {
        this.sliderWidth = `${e.target.offsetWidth}px`
        this.sliderLeft = `${e.target.offsetLeft}px`
      }
    }
  }
</script>

<style lang="less" scoped>
  .find {
    margin-top: 44px;
    .find-nav {
      width: 100%;
      height: 44px;
      padding: 7px 30px;
      background: #45A4F7;
      position: fixed;
      top: 0;
      .nav-links {
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        .slider-bg {
          width: 10px;
          height: 100%;
          background: #fff;
          border-radius: 20px;
          position: absolute;
          left: 0;
          top: 0;
          transition: .3s;
          z-index: -1;
        }
        .link-item {
          color: #fff;
          padding: 0 15px;
          font-size: 13px;
          &.active {
            color: #45A4F7;
            transition: .3s;
          }
        }
      }
    }

  }
</style>

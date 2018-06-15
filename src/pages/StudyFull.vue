<template>
  <div class="study-full">
    <NavigatorBar title="满12分学习" navType="light" bgColor="#fff"  menuRightText="学习安排" menuRightPath="/study_entry"/>
    <div class="top-nav">
      <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study_full/list">课程列表</router-link>
      <router-link class="link-item" replace active-class="active" @click.native="tapClickNav" to="/study_full/report">成绩单</router-link>
      <div :class="['slider-bar', isTranslate ? 'trans' : '']" :style="{left : sliderLeft}"></div>
    </div>
    <router-view/>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "study-full",
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
  .study-full {
    padding-top: 44px;
    .top-nav {
      width: 100%;
      height: 40px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      line-height: 40px;
      padding: 0 60px;
      z-index: 1040;
      position: fixed;
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

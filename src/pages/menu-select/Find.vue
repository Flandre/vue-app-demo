<template>
  <div class="find">
    <div class="find-nav">
      <div class="nav-links">
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
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
      tapClickNav() {

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
        .link-item {
          color: #fff;
          padding: 0 10px;
          font-size: 13px;
        }
      }
    }

  }
</style>

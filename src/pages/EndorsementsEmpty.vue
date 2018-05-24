<template>
  <div class="endorsements-empty">
    <NavigatorBar title="京QY96N0" bgColor="#fff" navType="light"/>
    <div class="bg"></div>
    <img src="../assets/pages/EndorsementsEmpty/endorsements-empty.png" class="icon">
    <span class="desc">没有新违章或尚未录入</span>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "endorsements-empty",
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  .endorsements-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 44px;
    height: 100%;
    .bg {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #fff;
      z-index: -1;
    }
    .icon {
      width: 200px;
      height: 200px;
      margin-top: 70px;
      margin-bottom: 25px;
    }
    .desc {
      font-size: 13px;
      line-height: 18px;
      color: #666666;
    }
  }
</style>

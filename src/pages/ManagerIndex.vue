<template>
  <div class="manager-index">
    <NavigatorBar title="车辆管家" bgColor="#FBCB61"/>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "manager-index",
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

</style>

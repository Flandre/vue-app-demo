<template>
  <div class="credit-detail">
    <NavigatorBar title="安全出行，驾有所值！" bgColor="#45A4F7"/>
    <p>信用详情页面</p>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "credit-detail",
    components: {
      NavigatorBar
    }
  }
</script>

<style scoped>
  .credit-detail {
    margin-top: 44px;
  }
</style>

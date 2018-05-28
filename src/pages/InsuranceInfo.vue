<template>
  <div class="insurance-info">
    <NavigatorBar title="保险提醒" bgColor="#fff" navType="light" menuRightText="我的保单" menuRightPath="/"/>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "insurance-info",
    data() {
      return {

      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.type == 2){

      }
    },
  }
</script>

<style lang="less" scoped>
  .insurance-info {
    margin-top: 44px;

  }

</style>

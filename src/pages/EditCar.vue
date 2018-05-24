<template>
  <div class="edit-car">
    <NavigatorBar title="添加车辆" navType="light" bgColor="#fff"/>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "edit-car",
    components: {
      NavigatorBar,
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>

</style>

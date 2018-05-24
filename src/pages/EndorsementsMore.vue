<template>
  <div class="endorsements-more">
    <NavigatorBar title="京QY96N0" bgColor="#fff" navType="light"/>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "endorsements-more",
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <IndexHeader />
    <img src="../../assets/pages/index/banner.png" class="banner">
    <h3>This is index page</h3>
  </div>
</template>

<script>
  import IndexHeader from '@/components/IndexHeader'
  export default {
    name: "Index",
    components: {
      IndexHeader
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: auto;
  }
</style>

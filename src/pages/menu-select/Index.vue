<template>
  <div>
    <IndexHeader />
    <img src="../../assets/pages/index/banner.png" class="banner">
    <CreditData />
    <h3>This is index page</h3>
  </div>
</template>

<script>
  import IndexHeader from '@/components/IndexHeader'
  import CreditData from '@/components/CreditData'
  export default {
    name: "Index",
    components: {
      IndexHeader,
      CreditData
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>
  .banner {
    display: block;
    width: 100%;
    height: auto;
  }
</style>

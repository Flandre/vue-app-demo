<template>
  <div>
    <IndexHeader />
    <img src="../../assets/pages/index/banner.png" class="banner">
    <CreditData />
    <EndorsementsCard/>
    <ClassCard/>
    <h3>This is index page</h3>
  </div>
</template>

<script>
  import IndexHeader from '@/components/IndexHeader'
  import CreditData from '@/components/CreditData'
  import EndorsementsCard from '@/components/EndorsementsCard'
  import ClassCard from '@/components/ClassCard'
  export default {
    name: "Index",
    components: {
      IndexHeader,
      CreditData,
      EndorsementsCard,
      ClassCard
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

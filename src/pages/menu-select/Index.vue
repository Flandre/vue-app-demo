<template>
  <div>
    <IndexHeader />
    <img src="../../assets/pages/index/banner.png" class="banner">
    <CreditData />
    <EndorsementsCard/>
    <ClassCard title="推荐学习"/>
    <ArticleList :title="articleTitle" showChange="true"/>
  </div>
</template>

<script>
  import IndexHeader from '@/components/IndexHeader/IndexHeader'
  import CreditData from '@/components/CreditData/CreditData'
  import EndorsementsCard from '@/components/EndorsementsCard/EndorsementsCard'
  import ClassCard from '@/components/ClassCard/ClassCard'
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "Index",
    components: {
      IndexHeader,
      CreditData,
      EndorsementsCard,
      ClassCard,
      ArticleList
    },
    data(){
      return {
        articleTitle: '推荐阅读'
      }
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

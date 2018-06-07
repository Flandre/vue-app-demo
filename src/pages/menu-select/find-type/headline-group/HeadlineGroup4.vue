<template>
  <div class="headline-group4">
    <ArticleList title="" articleGroup="normal" articleType="" articleSort="321401201" articleLimit="8"/>
  </div>
</template>

<script>
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "headline-group4",
    components: {
      ArticleList
    },
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  .headline-group4 {

  }
</style>

<template>
  <div class="headline-group1">
    <ArticleList title="" articleGroup="normal" articleType="" articleSort="01234012" articleLimit="8"/>
  </div>
</template>

<script>
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "headline-group1",
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
  .headline-group1 {

  }
</style>

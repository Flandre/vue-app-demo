<template>
  <div class="headline-group3">
    <ArticleList title="" articleGroup="normal" articleType="" articleSort="31240123" articleLimit="8"/>
  </div>
</template>

<script>
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "headline-group3",
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
  .headline-group3 {

  }
</style>

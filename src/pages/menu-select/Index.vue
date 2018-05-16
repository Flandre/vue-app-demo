<template>
  <div>
    <IndexHeader />
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
      document.documentElement.scrollTop = 0
    },
  }
</script>

<style scoped>

</style>

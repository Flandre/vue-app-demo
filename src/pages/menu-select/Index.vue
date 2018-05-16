<template>
  <div>
    <h3>This is index page</h3>
  </div>
</template>

<script>
  export default {
    name: "Index",
    mounted() {
      /* 返回顶部 */
      document.documentElement.scrollTop = 0
    },
  }
</script>

<style scoped>

</style>

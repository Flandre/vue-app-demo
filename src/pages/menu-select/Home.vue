<template>
  <div>
    <h3>This is home page</h3>
  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>

</style>

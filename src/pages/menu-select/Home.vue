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
      document.documentElement.scrollTop = 0
    },
  }
</script>

<style scoped>

</style>

<template>
  <div class="menu-page">
    <router-view/>
    <Menu></Menu>
  </div>
</template>

<script>
  import Menu from '@/components/Menu/Menu'
  export default {
    name: "MenuSelect",
    components: {
      Menu
    }
  }
</script>

<style scoped>
  .menu-page {
    margin-bottom: 50px;
  }
</style>

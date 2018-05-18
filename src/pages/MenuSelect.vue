<template>
  <div class="menu-page">
    <router-view/>
    <Menu></Menu>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'
  export default {
    name: "MenuSelect",
    components: {
      Menu
    }
  }
</script>

<style scoped>

</style>

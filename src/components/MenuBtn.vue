<template>
  <div class="menu-button" @click="testClick">

  </div>
</template>

<script>
  export default {
    name: "menu-btn",
    data() {
      return {

      }
    },
    methods: {
      testClick() {
        console.log('111')
      }
    }
  }
</script>

<style scoped>
  .menu-button {
    width: 40px;
    height: 36px;
    background: #45A4F7;
    border-radius: 4px;
  }
</style>

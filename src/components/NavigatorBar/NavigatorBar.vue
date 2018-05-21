<template>
  <div class="navigator-bar" :style="{backgroundColor : bgColor}">
    <img src="./images/prev.png" class="prev" @click="tapPrev"/>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: "navigator-bar",
    methods: {
      tapPrev() {
        history.back()
      }
    },
    props: ['title', 'bgColor']
  }
</script>

<style scoped>
  .navigator-bar {
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
  }
  .navigator-bar .prev{
    width: 10px;
    height: 16px;
    position: fixed;
    top: 14px;
    left: 8px
  }
  .navigator-bar .title{
    line-height: 44px;
    width: 100%;
    color: #fff;
    font-size: 17px;
    text-align: center;
  }
</style>

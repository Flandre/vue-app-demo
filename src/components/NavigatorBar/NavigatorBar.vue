<template>
  <div :class="['navigator-bar', navType]" :style="{backgroundColor : bgColor}">
    <img v-if="navType == 'dark'" src="./images/prev.png" class="prev" @click="tapPrev"/>
    <img src="./images/prev.png" class="prev" @click="tapPrev" v-else/>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: "navigator-bar",
    methods: {
      tapPrev() {
        this.$router.goBack()
      }
    },
    props: {
      title: {
        required: true
      },
      bgColor: {
        required: true
      },
      navType: {
        default: 'dark'
      }
    }
  }
</script>

<style scoped>
  .navigator-bar {
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1050;
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
  .slide-left-enter-active > .navigator-bar,
  .slide-right-leave-active > .navigator-bar,
  .slide-left-leave-active > .navigator-bar,
  .slide-right-enter-active > .navigator-bar {
    top: -44px !important;
  }
  .slide-left-enter-active .prev,
  .slide-right-leave-active .prev,
  .slide-left-leave-active .prev,
  .slide-right-enter-active .prev {
    top: -30px !important;
  }
</style>

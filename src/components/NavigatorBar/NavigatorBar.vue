<template>
  <div :class="['navigator-bar', navTypeData, showBorder ? 'showBorder': '']">
    <div class="bg-color" :style="{backgroundColor : bgColor, opacity: navOpacity}"></div>
    <img v-if="navTypeData == 'dark'" src="./images/prev.png" class="prev" @click="tapPrev"/>
    <img src="./images/prev-light.png" class="prev" @click="tapPrev" v-else-if="navTypeData == 'light'"/>
    <div class="title">{{title}}</div>
    <div class="right-text" v-if="menuRightText != ''" @click="tapRightMenu">{{menuRightText}}</div>
  </div>
</template>

<script>
  export default {
    name: "navigator-bar",
    data() {
      return {
        navOpacity: 1,
        navTypeData: null
      }
    },
    methods: {
      tapPrev() {
        if(this.$route.query.backlength){
          this.$router.goBackLength(this.$route.query.backlength)
        } else {
          this.$router.goBack()
        }
      },
      tapRightMenu() {
        if(this.menuRightPath){
          this.$router.push(this.menuRightPath)
        }
      }
    },
    mounted() {
      this.navTypeData = this.navType
      let saveNavType = this.navType
      switch(this.scrollType){
        case 'fade': {
          const SCROLL_LIMIT = 100
          this.navOpacity = 0
          document.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            if(window.scrollY < SCROLL_LIMIT){
              this.navOpacity = window.scrollY / SCROLL_LIMIT
              if(this.navTypeChange == 'change'){
                if(window.scrollY < 50) {
                  this.navTypeData = saveNavType
                } else {
                  this.navTypeData = saveNavType == 'dark' ? 'light' : 'dark'
                }
              }
            }
            else {
              this.navOpacity = 1
              if(this.navTypeChange == 'change'){
                this.navTypeData = saveNavType == 'dark' ? 'light' : 'dark'
              }
            }
          })
          break
        }
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
      },
      scrollType: {
        default: 'normal'
      },
      navTypeChange: {
        default: 'normal',
      },
      showBorder: {
        default: true
      },
      menuRightText: {
        default: ''
      },
      menuRightPath: {
        default: ''
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
  .navigator-bar .bg-color{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
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
    font-size: 17px;
    text-align: center;
  }
  .navigator-bar .right-text{
    position: fixed;
    top: 0px;
    right: 8px;
    font-size: 15px;
    line-height: 44px;
  }
  .navigator-bar.light .right-text{
    color: #45A4F7
  }
  .navigator-bar.dark .right-text{
    color: #fff
  }
  .navigator-bar.dark .title{
    color: #fff;
  }
  .navigator-bar.light.showBorder {
    border-bottom: 1px solid #dbdbdb;
  }
  .navigator-bar.light .title{
    color: #4A4A4A;
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
  .slide-left-enter-active .right-text,
  .slide-right-leave-active .right-text,
  .slide-left-leave-active .right-text,
  .slide-right-enter-active .right-text {
    top: -44px !important;
  }
</style>

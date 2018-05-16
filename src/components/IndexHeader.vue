<template>
  <div class="header">
    <div class="header-bg" :style="{opacity: headerOpacity}">
      好司机日记
    </div>
    <div class="area">
      {{areaName}}
    </div>
    <div class="scroll-cont">
      <div class="weather">
        <div class="weather-icon"></div>
        <span>{{templow}}℃-{{temphigh}}℃</span>
      </div>
      <div class="calendar">
        限行{{calendarNum.split(' ').join('和')}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index-header",
    data(){
      return {
        areaName: '北京',
        headerOpacity : 0,
        weather: 'sun',
        templow: 25,
        temphigh: 35,
        calendarNum: '1 6'
      }
    },
    mounted() {
      const SCROLL_LIMIT = 100
      document.addEventListener('scroll', () => {
        // console.log(this.headerOpacity)
        if(document.documentElement.scrollTop < SCROLL_LIMIT)
          this.headerOpacity = document.documentElement.scrollTop / 100
        else
          this.headerOpacity = 1
      })
    },
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
  }
  .header .header-bg {
    width: 100%;
    height: 50px;
    background: #45A4F7;
    color: #fff;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
  }
  .header .scroll-cont {
    width: 130px;
    height: 32px;
    background: #45A4F7;
    color: #fff;
    position: fixed;
    top: 9px;
    right: 0;
    border-radius: 16px 0 0 16px;
    overflow: hidden;
    font-size: 12px;
  }
  .header .scroll-cont .weather,
  .header .scroll-cont .calendar {
    height: 32px;
    line-height: 32px;
  }
</style>
<style>
  #app {
    margin-top: 50px;
  }
</style>

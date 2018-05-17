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
        限行<em>{{calendarNum.split(' ')[0]}}</em>和<em>{{calendarNum.split(' ')[1]}}</em>
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
        // console.log(window.scrollY)
        if(window.scrollY < SCROLL_LIMIT)
          this.headerOpacity = window.scrollY / 100
        else
          this.headerOpacity = 1
      })
    },
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
  }
  .header .header-bg {
    width: 100%;
    height: 44px;
    background: #45A4F7;
    color: #fff;
    line-height: 55px;
    text-align: center;
    font-size: 16px;
  }
  .header .scroll-cont {
    width: 130px;
    height: 32px;
    background: #45A4F7;
    color: #fff;
    position: fixed;
    top: 6px;
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
  .area {
    position: fixed;
    left: 15px;
    top: 14px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    font-size: 12px;
    padding-left: 14px;
    background: url('../assets/components/IndexHeader/area.png') left center no-repeat;
    background-size:  8px 12px;
  }
</style>

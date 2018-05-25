<template>
  <div class="manager-index">
    <NavigatorBar title="车辆管家" :bgColor="bgColor"/>
    <div class="car-panel-bg" :style="{backgroundColor: bgColor}">
      <div class="car-panel">
        <p class="car-num">{{lsNum}}</p>
        <p class="car-type">{{carType}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "manager-index",
    data() {
      return {
        bgColor: '#45A4F7',
        lsNum: '京QY96N0',
        carType: '广汽 欧蓝德'
      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.lsNum){
        this.lsNum = `京${this.$route.query.lsNum}`
      }
      if(this.$route.query.carType){
        this.carType = this.$route.query.carType
      }
    },
  }
</script>

<style lang="less" scoped>
  .manager-index {
    margin-top: 44px;
    .car-panel-bg {
      height: 110px;
      background: #45A4F7;
      padding: 15px 20px;
      .car-panel {
        height: 110px;
        background: #fff;
        border-radius: 8px;
        padding: 30px 20px;
        position: relative;
      }
    }
  }
</style>

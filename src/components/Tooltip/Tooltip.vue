<template>
  <div :class="['tooltip-container', showTooltip? 'show': '', tooltipActive? 'active': '']">
    <div class="tooltip-main">
      {{showText}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "tooltip",
    data() {
      return {
        showTooltip: false,
        tooltipActive: false,
        timerArr: []
      }
    },
    beforeDestroy() {
      this.timerArr.forEach(t => {
        clearTimeout(t)
      })
    },
    methods: {
      showToolTip() {
        this.ToolTip = false
        this.tooltipActive = false
        this.timerArr.forEach(t => {
          clearTimeout(t)
        })
        /* show tooltip */
        this.showTooltip = true
        this.timerArr[0] = setTimeout(() => {
          this.tooltipActive = true
        }, 10)
        this.timerArr[1] = setTimeout(() => {
          this.tooltipActive = false
        }, 2000)
        this.timerArr[2] = setTimeout(() => {
          this.showTooltip = false
        }, 2300)
      }
    },
    props: {
      showText: {
        default: '内测版本暂不开放此功能'
      },
    }
  }
</script>

<style lang="less" scoped>
  .tooltip-container {
    display: none;
    width: 100%;
    position: fixed;
    bottom: 100px;
    left: 0;
    text-align: center;
    opacity: 0;
    transition: 300ms;
    z-index: 2000;
    &.show{
      display: block;
    }
    &.active {
      opacity: 1;
    }
    .tooltip-main {
      padding: 10px 20px;
      background: rgba(0, 0, 0, 0.5);
      display: inline-block;
      color: #fff;
      border-radius: 8px;
    }
  }
</style>

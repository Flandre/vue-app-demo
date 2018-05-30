<template>
  <div class="class-list">

  </div>
</template>

<script>
  export default {
    name: "class-list",
    data() {
      return {
        listData : [
          {
            thumb: require('./images/thumb1.png'),
            type: "车辆知识",
            title: "车辆结构与行驶原理",
            time: '05:31/05:31',
            score: '100/100',
            isComplete: true
          },
          {
            thumb: require('./images/thumb1.png'),
            type: "车辆知识",
            title: "车辆结构与行驶原理",
            time: '00:00/04:30',
            score: '80/100',
            isComplete: true
          },
          {
            thumb: require('./images/thumb1.png'),
            type: "车辆知识",
            title: "车辆结构与行驶原理",
            time: '01:00/06:30',
            score: '70/100',
            isComplete: true
          },
        ]
      }
    },
    props: {
      title: {
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .class-list {

  }
</style>

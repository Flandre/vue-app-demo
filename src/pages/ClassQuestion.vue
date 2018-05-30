<template>
  <div class="class-question">
    <NavigatorBar title="安全带的重要性" navType="light" bgColor="#fff"/>
    <div class="question-container">
      <div class="question-item">

      </div>
    </div>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "class-question",
    data() {
      return {
        questionData: [
          {
            type: 'exclusive',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '左转弯待转信号',
                right: false,
              },
              {
                text: '右转弯信号',
                right: true,
              },
              {
                text: '靠边停车信号',
                right: false,
              },
              {
                text: '减速慢行信号',
                right: false,
              },
            ]
          },
          {
            type: 'judge',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '正确',
                right: false,
              },
              {
                text: '错误',
                right: true,
              },
            ]
          },
          {
            type: 'multiple',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '左转弯待转信号',
                right: false,
              },
              {
                text: '右转弯信号',
                right: true,
              },
              {
                text: '靠边停车信号',
                right: true,
              },
              {
                text: '减速慢行信号',
                right: false,
              },
            ]
          }
        ]

      }
    },
    beforeMount() {
      window.scrollTo(0, 0)
    },
    components: {
      NavigatorBar,
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .class-question {
    margin-top: 44px;

  }
</style>

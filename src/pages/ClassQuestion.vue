<template>
  <div class="class-question">
    <NavigatorBar title="安全带的重要性" navType="light" bgColor="#fff"/>
    <div class="question-container">
      <div class="question-info">
        共{{questionData.length}}题，总计100分
      </div>
      <div class="question-item" v-for="(ques, quesIndex) in questionData">
        <p class="question"><span class="badge">{{ques.typeShow}}</span>{{ques.question}}</p>
        <div class="answer-list">
          <div :class="['answer-item', ans.state]" v-for="(ans, ansIndex) in ques.answer" @click="tapSelect(quesIndex, ansIndex)">{{ans.text}}</div>
        </div>
      </div>
    </div>
    <div class="submit-bar"></div>
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
            typeShow: '单选',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '左转弯待转信号',
                right: false,
                state: 'select',
              },
              {
                text: '右转弯信号',
                right: true,
                state: 'select',
              },
              {
                text: '靠边停车信号',
                right: false,
                state: 'select',
              },
              {
                text: '减速慢行信号',
                right: false,
                state: 'select',
              },
            ]
          },
          {
            type: 'judge',
            typeShow: '判断',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '正确',
                right: false,
                state: 'select'
              },
              {
                text: '错误',
                right: true,
                state: 'select'
              },
            ]
          },
          {
            type: 'multiple',
            typeShow: '多选',
            question: '这一组交通警察的手势是什么信号？这一组交通警察的手势是什么信号？',
            answer: [
              {
                text: '左转弯待转信号',
                right: false,
                state: 'select'
              },
              {
                text: '右转弯信号',
                right: true,
                state: 'select'
              },
              {
                text: '靠边停车信号',
                right: true,
                state: 'select'
              },
              {
                text: '减速慢行信号',
                right: false,
                state: 'select'
              },
            ]
          }
        ],
        enableSubmit: false
      }
    },
    beforeMount() {
      window.scrollTo(0, 0)
    },
    beforeUpdate() {
      console.log('=== check submit ===')
      let enable = true
      this.questionData.forEach(ques => {
        let count = true
        ques.answer.forEach(ans => {
          if(ans.state == 'right'){
            count = false
          }
        })
        if(count){
          enable = false
        }
      })
      this.enableSubmit = enable
      console.log(this.enableSubmit)
    },
    components: {
      NavigatorBar,
    },
    methods: {
      tapSelect(ques, ans){
        switch(this.questionData[ques].type){
          case 'exclusive':
          case 'judge':
            this.questionData[ques].answer.forEach((val, index) => {
              if(index == ans){
                val.state = 'right'
              } else {
                val.state = 'select'
              }
            })
            break
          case 'multiple':
            if(this.questionData[ques].answer[ans].state == 'select'){
              this.questionData[ques].answer[ans].state = 'right'
            } else {
              this.questionData[ques].answer[ans].state = 'select'
            }
            break

        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .class-question {
    margin-top: 44px;
    .question-container {
      padding: 0 25px;
      background: #fff;
      .question-info {
        padding: 20px 0;
        text-align: center;
        font-size: 15px;
        color: #333;
      }
      .question-item {
        overflow: hidden;
        .question {
          color: #333333;
          font-size: 15px;
          line-height: 24px;
          margin-bottom: 20px;
          .badge {
            display: inline-block;
            margin-right: 10px;
            background: #A4B2C3;
            color: #fff;
            padding: 0 5px;
            line-height: 20px;
            font-size: 12px;
            border-radius: 4px;
          }
        }
        .answer-list {
          margin-bottom: 40px;
          .answer-item {
            font-size: 15px;
            line-height: 24px;
            padding: 10px 0;
            padding-left: 55px;
            background-size: 22px 22px;
            background-repeat: no-repeat;
            background-position: 12px center;
            &.select {
              background-image: url("../assets/pages/ClassQuestion/select.png");
            }
            &.wrong {
              background-image: url("../assets/pages/ClassQuestion/wrong.png");
            }
            &.right {
              background-image: url("../assets/pages/ClassQuestion/right.png");
            }
          }
        }

      }
    }


  }
</style>

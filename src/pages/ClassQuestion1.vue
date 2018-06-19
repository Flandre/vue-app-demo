<template>
  <div class="class-question">
    <NavigatorBar title="安全带的重要性" navType="light" bgColor="#fff"/>
    <div :class="['question-container', showSubmit? '': 'hiddenSubmit']">
      <div class="question-info">
        <p class="last-score" v-if="lastScore != ''">得分：<em>{{lastScore}}</em></p>
        共{{questionData.length}}题，总计100分
      </div>
      <div class="question-item" v-for="(ques, quesIndex) in questionData">
        <p class="question"><span class="badge">{{ques.typeShow}}</span>{{ques.question}}</p>
        <div class="answer-list">
          <div :class="['answer-item', ans.state]" v-for="(ans, ansIndex) in ques.answer" @click="tapSelect(quesIndex, ansIndex)">{{ans.text}}</div>
        </div>
      </div>
    </div>
    <div :class="['submit-bar', enableSubmit? '': 'disabled']" @click="tapButton" v-if="showSubmit">{{submitText}}</div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "class-question-1",
    data() {
      return {
        questionData: [
          {
            type: 'judge',
            typeShow: '判断',
            question: '不管天气状况如何，只要不超过限速标志标明的最高时速就可以了。',
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
            type: 'judge',
            typeShow: '判断',
            question: '高速行驶会使驾驶人反应距离延长，并且由于惯性作用，制动距离也会延长。',
            answer: [
              {
                text: '正确',
                right: true,
                state: 'select'
              },
              {
                text: '错误',
                right: false,
                state: 'select'
              },
            ]
          },
          {
            type: 'judge',
            typeShow: '判断',
            question: '高速行驶不会减弱驾驶人对空间的感知能力和对速度的判断能力。',
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
            question: '高速对驾驶产生的影响及安全隐患有哪些？',
            answer: [
              {
                text: '反应距离延长、制动距离延长',
                right: true,
                state: 'select'
              },
              {
                text: '视野变窄、注视点变远、注意力转移困难',
                right: true,
                state: 'select'
              },
              {
                text: '车辆行驶的稳定性降低',
                right: true,
                state: 'select'
              },
            ]
          }
        ],
        enableSubmit: false,
        submitText: '提交答案',
        lastScore: '',
        shoudSelect: true,
        showSubmit: true,
      }
    },
    beforeMount() {
      window.scrollTo(0, 0)
    },
    beforeUpdate() {
      if(this.submitText == '提交答案') {
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
      } else {
        this.enableSubmit = true
      }
    },
    components: {
      NavigatorBar,
    },
    methods: {
      tapSelect(ques, ans){
        if(this.shoudSelect){
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
      },
      tapButton() {
        if(this.enableSubmit){
          if(this.submitText == '提交答案') {
            this.submitText = '重测一次'
            this.showSubmit = false
            window.scrollTo(0, 0)
            this.shoudSelect = false
            let count = 0
            this.questionData.forEach(ques => {
              let isRight = true;
              if(ques.type == 'multiple'){
                let rightAns = true
                ques.answer.forEach(ans => {
                  if(ans.state == 'select' && ans.right){
                    rightAns = false
                  }
                  if(ans.state == 'right' && !ans.right){
                    rightAns = false
                  }
                })
                if(rightAns){
                  ques.answer.forEach(ans => {
                    if(ans.right){
                      ans.state = 'right isRight'
                    }
                  })
                } else {
                  isRight = false
                  ques.answer.forEach(ans => {
                    let className = ans.state
                    if(ans.state == 'right') {
                      className = 'wrong'
                    }
                    if(ans.right){
                      className += ' isRight'
                    }
                    ans.state = className
                  })
                }
              } else {
                ques.answer.forEach(ans => {
                  if(ans.state == 'right' && ans.right){
                    ans.state = 'right isRight'
                  }
                  if(ans.state == 'select' && ans.right){
                    ans.state = 'right isRight'
                    isRight = false
                  }
                  if(ans.state == 'right' && !ans.right){
                    ans.state = 'wrong'
                    isRight = false
                  }
                })
              }
              if(!isRight){
                count ++
              }
            })
            this.lastScore = ((this.questionData.length - count) / this.questionData.length * 100).toFixed(0)
            sessionStorage.setItem("lastScore_1", this.lastScore);
          } else {
            this.submitText = '提交答案'
            window.scrollTo(0, 0)
            this.shoudSelect = true
            this.lastScore = ''
            this.questionData.forEach(ques => {
              ques.answer.forEach(ans => {
                ans.state = 'select'
              })
            })
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .class-question {
    padding-top: 44px;
    .question-container {
      padding: 0 25px;
      background: #fff;
      margin-bottom: 50px;
      &.hiddenSubmit {
        margin-bottom: 0;
      }
      .question-info {
        padding: 20px 0;
        text-align: center;
        font-size: 15px;
        color: #333;
        .last-score {
          font-size: 15px;
          line-height: 24px;
          color: #333;
          margin-bottom: 10px;
          em {
            font-size: 22px;
            line-height: 24px;
            font-style: normal;
            color: #45A4F7;
          }
        }
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
            padding-right: 20px;
            background-size: 22px 22px;
            background-repeat: no-repeat;
            background-position: 12px 10px;
            position: relative;
            &.select {
              background-image: url("../assets/pages/ClassQuestion/select.png");
            }
            &.wrong {
              background-image: url("../assets/pages/ClassQuestion/wrong.png");
            }
            &.right {
              background-image: url("../assets/pages/ClassQuestion/right.png");
            }
            &.isRight {
              &:after {
                content: '';
                display: block;
                width: 16px;
                height: 12px;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -6px;
                background: url("../assets/pages/ClassQuestion/isRight.png") center no-repeat;
                background-size: 16px 12px;
              }
            }
          }
        }
      }
    }
    .submit-bar {
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 17px;
      background: #45A4F7;
      position: fixed;
      bottom: 0;
      z-index: 1060;
      &.disabled {
        background: #ABABAB
      }
    }


  }
</style>

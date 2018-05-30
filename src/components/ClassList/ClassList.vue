<template>
  <div class="class-list">
    <div class="group-title" v-if="title">
      {{title}}
    </div>
    <div class="list-item" v-for="i in listData">
      <img :src="i.thumb" class="thumb">
      <div class="list-info">
        <p class="type">{{i.type}}</p>
        <p class="title">{{i.title}}</p>
        <div class="data-source">
          <span class="time">学时：<em :class="i.isComplete? 'complete': ''">{{i.time}}</em></span>
          <span class="time">得分：<em :class="i.isComplete? 'complete': ''">{{i.score}}</em></span>
        </div>
      </div>
    </div>
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
            isComplete: false
          },
          {
            thumb: require('./images/thumb1.png'),
            type: "车辆知识",
            title: "车辆结构与行驶原理",
            time: '01:00/06:30',
            score: '70/100',
            isComplete: false
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
    padding-left: 15px;
    background: #fff;
    .group-title {
      padding-top: 15px;
      color: #000;
      font-size: 13px;
    }
    .list-item {
      padding: 15px 15px 15px 0;
      border-bottom: 1px solid #dbdbdb;
      position: relative;
      min-height: 63px;
      .thumb {
        width: 112px;
        height: 63px;
        position: absolute;
        left: 0;
        top: 15px;
      }
      .list-info {
        padding-left: 127px;
        .type {
          color: #666666;
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 5px;
        }
        .title {
          color: #333333;
          font-size: 13px;
          line-height: 13px;
          margin-bottom: 17px;
        }
        .data-source {
          font-size: 11px;
          padding-right: 20px;
          display: flex;
          justify-content: space-between;
          span{
            white-space: nowrap;
            color: #666666;
            em {
              font-style: normal;
              &.complete {
                color: #45A4F7;
              }
            }
          }
        }
      }
    }
  }
</style>

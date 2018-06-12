<template>
  <div class="driving-map">
    <NavigatorBar title="行程分析" navType="light" bgColor="#fff"/>
    <div class="map-container">
      <img src="../assets/pages/DrivingMap/map.png" class="map">
    </div>
    <div class="bottom-control">
      <p class="title">行程中共有3次危险驾驶行为</p>
      <div class="danger-container">
        <div :class="['danger-item', selectType == 1 ? 'active' : '']" @click="tapItem(1)">
          <span class="num">1</span>
          <span class="desc">急加速</span>
        </div>
        <div :class="['danger-item', selectType == 2 ? 'active' : '']" @click="tapItem(2)">
          <span class="num">0</span>
          <span class="desc">急减速</span>
        </div>
        <div :class="['danger-item', selectType == 3 ? 'active' : '']" @click="tapItem(3)">
          <span class="num">2</span>
          <span class="desc">急转弯</span>
        </div>
        <div :class="['danger-item', selectType == 4 ? 'active' : '']" @click="tapItem(4)">
          <span class="num">0</span>
          <span class="desc">超速</span>
        </div>
        <div :class="['danger-item', selectType == 5 ? 'active' : '']" @click="tapItem(5)">
          <span class="num">0</span>
          <span class="desc">玩手机</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "driving-map",
    data() {
      return {
        selectType: 1
      }
    },
    components: {
      NavigatorBar,
    },
    methods: {
      tapItem(type){
        this.selectType = type
      }
    }
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "DIN Condensed";
    src: url("../fonts/DINCondensedC.ttf");
  }
  .driving-map {
    padding-top: 44px;
    .map-container {
      width: 100%;
      height: 100%;
      .map {
        width: 100%;
        height: 100%;
      }
    }
    .bottom-control {
      width: 100%;
      padding: 15px;
      background: #fff;
      position: fixed;
      bottom: 0;
      .title {
        color: #333;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-bottom: 15px;
      }
      .danger-container {
        display: flex;
        justify-content: space-between;
        .danger-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .num {
            display: block;
            width: 48px;
            height: 48px;
            border: 1px solid #dbdbdb;
            border-radius: 25px;
            line-height: 48px;
            color: #333;
            font-size: 24px;
            text-align: center;
            font-family: "DIN Condensed";
            margin-bottom: 5px;
          }
          .desc {
            font-size: 12px;
            line-height: 17px;
            color: #666666;
          }
          &.active {
            .num {
              color: #45A4F7;
              border-color: #45A4F7;
            }
            .desc {
              color: #45A4F7
            }
          }
        }
      }
    }

  }
</style>

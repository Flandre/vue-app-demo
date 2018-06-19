<template>
  <div class="driving-map">
    <NavigatorBar title="行程分析" navType="light" bgColor="#fff"/>
    <div class="map-container">
      <img :src="mainMap" class="map">
      <img :src="typeMap" class="type" v-if="typeMap != ''">
    </div>
    <div class="bottom-control">
      <p class="title">行程中共有{{numCount}}次危险驾驶行为</p>
      <div class="danger-container">
        <div v-for="(i, $index) in typeNum" :class="['danger-item', selectType == $index ? 'active' : '']" @click="tapItem($index)">
          <span class="num">{{i}}</span>
          <span class="desc">{{['急加速', '急减速', '急转弯', '超速', '玩手机'][$index]}}</span>
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
        dataSource: [
          {
            id: 1,
            mainMap: require('../assets/pages/DrivingMap/driving1/map.jpg'),
            typePic: [
              '',
              require('../assets/pages/DrivingMap/driving1/type2.png'),
              '',
              '',
              require('../assets/pages/DrivingMap/driving1/type5.png')
            ],
            typeNum: [0, 1, 0, 0, 1]
          },
          {
            id: 2,
            mainMap: require('../assets/pages/DrivingMap/driving2/map.jpg'),
            typePic: [
              require('../assets/pages/DrivingMap/driving2/type1.png'),
              '',
              require('../assets/pages/DrivingMap/driving2/type3.png'),
              require('../assets/pages/DrivingMap/driving2/type4.png'),
              ''
            ],
            typeNum: [1, 0, 1, 1, 0]
          },
          {
            id: 3,
            mainMap: require('../assets/pages/DrivingMap/driving3/map.jpg'),
            typePic: [
              require('../assets/pages/DrivingMap/driving3/type1.png'),
              require('../assets/pages/DrivingMap/driving3/type2.png'),
              require('../assets/pages/DrivingMap/driving3/type3.png'),
              '',
              ''
            ],
            typeNum: [1, 1, 1, 0, 0]
          }
        ],
        selectType: 0,
        mainMap: '',
        typePic: [],
        typeNum: [],
        numCount: 0,
        typeMap: ''
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {
      this.dataSource.forEach(val => {
        if(val.id == this.$route.query.id){
          this.mainMap = val.mainMap
          this.typePic = val.typePic.concat([])
          this.typeNum = val.typeNum.concat([])
          this.numCount = val.typeNum.reduce((p, c) => p + c)
        }
      })
      this.typeMap = this.typePic[0]
    },
    methods: {
      tapItem(type){
        this.selectType = type
        this.typeMap = this.typePic[type]
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
      position: relative;
      .map {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      .type {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
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

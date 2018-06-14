<template>
  <div class="exposure-edit">
    <NavigatorBar title="违法曝光" bgColor="#fff" navType="light" menuRightText="取消" menuRightPath="goBack" menuRightColor="#bbb"/>
    <div class="msg-container">
      <div class="text-input">
        <textarea placeholder="请输入违法曝光内容，帮助警察蜀黍进行查验"></textarea>
      </div>
      <div class="add-images">
        <div class="img-box" v-for="(img, index) in imgData" v-if="img != ''">
          <img :src="img" class="pic">
          <img src="../assets/pages/ExposureEdit/deleteBtn.png" class="remove-img" @click="tapRemove(index)">
        </div>
        <div class="img-box add" @click="tapAdd">
          <img src="../assets/pages/ExposureEdit/addIcon.png" class="icon">
        </div>
      </div>
      <div class="lsNum-container">
        <select>
          <option>京</option>
          <option>津</option>
          <option>冀</option>
          <option>渝</option>
          <option>粤</option>
        </select>
        <input type="text" placeholder="请输入违法车辆车牌号">
      </div>
      <div class="location-container">
        朝阳区奥运村北辰汇欣大厦
      </div>
    </div>
    <div class="active-bar" @click="tapSubmit">
      <span>发布</span>
    </div>
    <div :class="['slider-bg', sliderShow? 'active' : '']" v-if="showSliderBg" @click="tapClose"></div>
    <div :class="['bottom-slider', sliderShow? 'active' : '']">
      <div class="slider-item" @click="tapCamera">拍摄</div>
      <div class="slider-item" @click="tapPic">从相册选择</div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "exposure-edit",
    data() {
      return {
        showSliderBg: false,
        sliderShow: false,
        imgData: ['data:image/png;base64,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']
      }
    },
    components: {
      NavigatorBar
    },
    methods: {
      tapRemove(index){
        this.$set(this.imgData, index, '')
      },
      tapAdd() {
        this.showSliderBg = true
        setTimeout(() => {
          this.sliderShow = true
        }, 10)
      },
      tapCamera() {
        this.sliderShow = false
        setTimeout(() => {
          this.showSliderBg = false
        }, 300)
      },
      tapPic() {
        this.sliderShow = false
        setTimeout(() => {
          this.showSliderBg = false
        }, 300)
      },
      tapClose(){
        this.sliderShow = false
        setTimeout(() => {
          this.showSliderBg = false
        }, 300)
      },
      tapSubmit() {
        this.$router.push({path: '/exposure_detail', query: {backlength: 2}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .exposure-edit {
    padding-top: 44px;
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: -1
    }
    .msg-container {
      padding-left: 20px;
      background: #fff;
      .text-input {
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        textarea {
          width: 100%;
          height: 60px;
          outline: none;
        }
      }
      .add-images {
        padding-bottom: 13px;
        overflow: hidden;
        border-bottom: 1px solid #dbdbdb;
        .img-box {
          width: 100px;
          height: 100px;
          margin-right: 17px;
          margin-bottom: 17px;
          float: left;
          position: relative;
          .pic {
            width: 100%;
            height: 100%;
          }
          .remove-img {
            position: absolute;
            right: 0;
            top: 0;
            width: 16px;
            height: 16px;
          }
          &.add {
            background: #EFF3F7;
            .icon {
              position: absolute;
              top: 35px;
              left: 35px;
              width: 30px;
              height: 31px;
            }
          }
        }
      }
      .lsNum-container {
        width: 100%;
        display: flex;
        overflow: hidden;
        border-bottom: 1px solid #dbdbdb;
        select,
        input {
          height: 48px;
          border: 0;
          outline: 0;
          background: #fff;
          flex-grow: 1;
          font-size: 13px;
          padding: 0 10px;
          outline: none;
          -webkit-appearance: none;
        }
        input::-webkit-input-placeholder{
          color:#C7C7CD;
        }
        input::-moz-placeholder {
          color:#C7C7CD;
        }
        input:-moz-placeholder {
          color:#C7C7CD;
        }
        input:-ms-input-placeholder {
          color:#C7C7CD;
        }
        select {
          flex-grow: 0;
        }
      }
      .location-container {
        padding-left: 35px;
        line-height: 48px;
        font-size: 13px;
        background: url("../assets/pages/ExposureEdit/locationIcon.png") left center no-repeat;
        background-size: 16px 21px;
      }
    }
    .active-bar {
      position: fixed;
      bottom: 30px;
      left: 0;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 300px;
        height: 40px;
        background: #45A4F7;
        color: #fff;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        border-radius: 4px;
      }
    }
    .bottom-slider {
      width: 100%;
      height: 80px;
      position: fixed;
      bottom: -80px;
      left: 0;
      transition: 300ms;
      z-index: 1080;
      &.active {
        bottom: 0;
      }
      .slider-item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #fff;
        border-top: 1px solid #dbdbdb;
      }
    }
    .slider-bg {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #000;
      opacity: 0;
      transition: 300ms;
      z-index: 1070;
      &.active {
        opacity: 0.5;
      }
    }
  }
</style>

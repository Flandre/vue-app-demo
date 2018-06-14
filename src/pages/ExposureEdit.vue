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
        imgData: ['data:image/jpg;base64,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']
      }
    },
    components: {
      NavigatorBar
    },
    beforeMount() {
      if(sessionStorage.getItem('imgThumb')){
        this.imgData.push(sessionStorage.getItem('imgThumb'))
        sessionStorage.removeItem('imgThumb')
      }
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

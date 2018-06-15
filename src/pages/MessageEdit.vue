<template>
  <div class="message-edit">
    <NavigatorBar title="发布动态" bgColor="#fff" navType="light" menuRightText="取消" menuRightPath="goBack" menuRightColor="#bbb"/>
    <div class="msg-container">
      <div class="text-input">
        <textarea placeholder="随便说点什么吧" id="textAreaBox"></textarea>
      </div>
      <div class="add-images">
        <div class="img-box" v-for="(img, index) in imgData" v-if="img != ''">
          <img :src="img" class="pic">
          <img src="../assets/pages/MessageEdit/deleteBtn.png" class="remove-img" @click="tapRemove(index)">
        </div>
        <div class="img-box add" @click="tapAdd">
          <img src="../assets/pages/MessageEdit/addIcon.png" class="icon">
        </div>
      </div>
      <div class="location-container">
        朝阳区奥运村北辰汇欣大厦
      </div>
      <div class="group-list">
        <span class="group-item" @click="tapGroup('#车主互助#')">#车主互助#</span>
        <span class="group-item" @click="tapGroup('#道路正能量#')">#道路正能量#</span>
        <span class="group-item" @click="tapGroup('#路况分享#')">#路况分享#</span>
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
    <div :class="['tooltip-container', showTooltip? 'show': '', tooltipActive? 'active': '']">
      <div class="tooltip-main">
        发布成功
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "message-edit",
    data() {
      return {
        showSliderBg: false,
        sliderShow: false,
        imgData: [],
        showTooltip: false,
        tooltipActive: false,
        timerArr: []
      }
    },
    components: {
      NavigatorBar
    },
    beforeMount(){
      let self = this
      if(window.AppCall){
        window.AppCall.cameraCallback = function(data, dataType){
          let imageData = `data:image/${dataType};base64,${data}`
          self.imgData.push(imageData)
        }
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
        try{
          window.AppCall.callCamera(100, 100)
        } catch (err){
          alert(err)
        }
      },
      tapPic() {
        this.sliderShow = false
        setTimeout(() => {
          this.showSliderBg = false
        }, 300)
        try{
          window.AppCall.callAlbum(100, 100)
        } catch (err){
          alert(err)
        }
      },
      tapClose(){
        this.sliderShow = false
        setTimeout(() => {
          this.showSliderBg = false
        }, 300)
      },
      tapSubmit() {
        /* show tooltip */
        this.showTooltip = true
        this.timerArr[0] = setTimeout(() => {
          this.tooltipActive = true
        }, 10)
        this.timerArr[1] = setTimeout(() => {
          this.tooltipActive = false
        }, 2000)
        this.timerArr[2] = setTimeout(() => {
          this.$router.goBack()
        }, 2300)
      },
      tapGroup(info) {
        document.querySelector('#textAreaBox').value += info
      }
    },
    beforeDestroy() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      this.timerArr.forEach(val => {
        clearTimeout(val)
      })
    },
  }
</script>

<style lang="less" scoped>
  .message-edit {
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
      .location-container {
        border-bottom: 1px solid #dbdbdb;
        padding-left: 35px;
        line-height: 48px;
        font-size: 13px;
        background: url("../assets/pages/MessageEdit/locationIcon.png") left center no-repeat;
        background-size: 16px 21px;
      }
      .group-list {
        .group-item {
          color: #45A4F7;
          font-size: 12px;
          line-height: 48px;
          margin-right: 20px;
        }
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
    .tooltip-container {
      display: none;
      width: 100%;
      position: fixed;
      bottom: 100px;
      text-align: center;
      opacity: 0;
      transition: 300ms;
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
  }
</style>

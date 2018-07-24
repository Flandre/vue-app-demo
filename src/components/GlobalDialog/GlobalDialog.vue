<template>
  <div :class="['dialog', isShow ? 'block' : '', isFade ? 'fade' : '']">
    <div class="dialog-bg"></div>
    <div :class="['dialog-container', isPanelFade ? 'fade' : '']">
      <div class="content">
        {{showText}}
      </div>
      <div class="active-buttons">
        <div class="button cancel" v-if="hasCancel" @click="tapCancel">{{cancelBtnName}}</div>
        <div class="button enter" @click="tapEnter">{{enterBtnName}}</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "global-dialog",
    data() {
      return {
        timerArr: [],
        isShow: false,
        isFade: false,
        isPanelFade: true,
      }
    },
    beforeDestroy() {
      this.timerArr.forEach(t => {
        clearTimeout(t)
      })
    },
    methods: {
      showDialog() {
        this.isShow = true
        this.isPanelFade = true
        this.timerArr[0] = setTimeout(() => {
          this.isFade = true
        }, 10)
      },
      hideDialog() {
        this.isFade = false
        this.timerArr[1] = setTimeout(() => {
          this.isShow = false
        }, 300)

      },
      hideDialogOnly() {
        this.isPanelFade = false
      },
      tapEnter(){
        console.log(this.cancelType)
        switch(this.cancelType){
          case 'all':
            this.hideDialog()
            break
          case 'onlyDialog':
            this.hideDialogOnly()
            break
        }
        this.timerArr[2] = setTimeout(() => {
          this.$emit('enter')
        }, 300)
      },
      tapCancel(){
        this.hideDialog()
      }
    },
    props: {
      showText: {
        default: '内测版本暂不开放此功能'
      },
      hasCancel: {
        default: true,
      },
      enterBtnName: {
        default: '确定'
      },
      cancelBtnName: {
        default: '取消'
      },
      cancelType: {
        default: 'all'
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialog {
    display: none;
    opacity: 0;
    transition: 300ms;
    &.block {
      display: block;
    }
    &.fade {
      opacity: 1;
    }
    .dialog-bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .5);
      z-index: 2000;
    }
    .dialog-container {
      width: 250px;
      border-radius: 10px;
      background: #fff;
      position: fixed;
      top: 40%;
      left: 50%;
      margin-left: -125px;
      z-index: 2010;
      opacity: 0;
      transition: 300ms;
      &.fade {
        opacity: 1;
      }
      .content {
        padding: 20px;
        padding-bottom: 25px;
        font-weight: 700;
        word-break: break-all;
        text-align: center;
      }
      .active-buttons {
        display: flex;
        border-top: 1px solid #dbdbdb;
        .button {
          padding: 10px 0;
          text-align: center;
          flex-grow: 1;
          border-right: 1px solid #dbdbdb;
          color: #45A4F7;
          &:last-child {
            border-right: 0;
          }
        }
      }
    }

  }

</style>

<template>
  <div class="auth-step2">
    <div class="view-box">
      <div :class="['avatar', filter]">
        <img src="../../assets/pages/LicenseAuth/avatar.png">
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="240" height="240" viewbox="0 0 240 240">
        <circle cx="120" cy="120" r="115" stroke-width="10" stroke="#D1D3D7" fill="none" stroke-dasharray="601 722" transform="rotate(120,120 120)"></circle>
        <circle cx="120" cy="120" r="115" stroke-width="10" stroke="#00A5E0" fill="none"  stroke-dasharray="0 722" transform="rotate(120,120 120)"></circle>
      </svg>
    </div>
    <p class="desc">{{desc}}</p>
  </div>
</template>

<script>
  export default {
    name: "auth-step2",
    data() {
      return {
        desc: '',
        filter: '',
        timerArr: []
      }
    },
    mounted() {
      this.timerArr[0] = setTimeout(() => {
        document.querySelectorAll("circle")[1].setAttribute('stroke-dasharray', 10 + ' 722');
        this.desc = '请摇一下头'
      }, 1000)
      this.timerArr[1] = setTimeout(() => {
        document.querySelectorAll("circle")[1].setAttribute('stroke-dasharray', 200 + ' 722');
        this.desc = '拿起手机，眨眨眼'
      }, 2000)
      this.timerArr[2] = setTimeout(() => {
        document.querySelectorAll("circle")[1].setAttribute('stroke-dasharray', 350 + ' 722');
        this.desc = '请摇一下头'
      }, 3000)
      this.timerArr[3] = setTimeout(() => {
        document.querySelectorAll("circle")[1].setAttribute('stroke-dasharray', 500 + ' 722');
        this.filter = 'blur'
        this.desc = '正在完成'
      }, 4000)
      this.timerArr[4] = setTimeout(() => {
        document.querySelectorAll("circle")[1].setAttribute('stroke-dasharray', 601 + ' 722');
      }, 5000)
      this.timerArr[5] = setTimeout(() => {
        /* 跳转逻辑 */
        sessionStorage.setItem('isAuth', true)
        history.go(-2)
      }, 6000)
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
  .auth-step2 {
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      z-index: -1;
    }
    .view-box {
      position: relative;
      width: 240px;
      height: 240px;
      margin-top: 80px;
      .avatar {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 240px;
        padding: 10px;
        border-radius: 120px;
        overflow: hidden;
        transition: .8s;
        &.blur {
          -webkit-filter: blur(5px);
          filter: blur(5px);
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 50%;
        }
      }
    }
    .desc {
      margin-top: 70px;
      color: #45A4F7;
      font-size: 17px;
    }
    circle {
      transition: stroke-dasharray 1s;
    }
  }
</style>

<template>
  <div class="menu-button">
    <div :class="['menu-bg', {active: menuActive}]"></div>
    <div class="menu-main" @click="tapMenu">
      <div :class="['menu-icon', {active: menuActive}]"></div>
    </div>
    <div v-if="showAnit" :class="['menu-text', {active: menuActive}]">
      <p class="title">安全出行，驾有所值</p>
      <p class="desc">从现在起重视和管理驾驶信用，让良好的驾驶行为创造更多价值！</p>
    </div>
    <div v-if="showAnit" :class="['menu-btns', {active: menuActive}]">
      <div class="btn-item" v-for="btn in btns" @click="tapLink(btn.url)">
        <div class="icon">
          <img :src="btn.icon">
        </div>
        <span>{{btn.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router/index'
  export default {
    name: "menu-btn",
    data() {
      return {
        menuActive: false,
        showAnit: false,
        btns: [
          {
            name: '驾驶评测',
            url: '/jspc',
            icon: require('./images/jspc.png')
          },
          {
            name: '出示驾照',
            url: '/csjz',
            icon: require('./images/csjz.png')
          },
          {
            name: '发布动态',
            url: '/fbdt',
            icon: require('./images/fbdt.png')
          },
          {
            name: '违法曝光',
            url: '/wfbg',
            icon: require('./images/wfbg.png')
          },
        ]
      }
    },
    methods: {
      tapMenu() {
        this.showAnit = !this.showAnit
        setTimeout(() => {
          this.menuActive = !this.menuActive
        }, 50)
      },
      tapLink(url){
        router.push(url)
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "HanziPen SC";
    src: url("../../fonts/HanzipenSC-Regular.otf");
  }
  .menu-button {
    width: 40px;
    height: 36px;
    position: relative;
  }
  .menu-button .menu-bg {
    width: 0;
    height: 0;
    position: fixed;
    bottom: 20px;
    left: 50%;
    background: #45A4F7;
    transition: 200ms
  }
  .menu-button .menu-bg.active {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
  }
  .menu-button .menu-main {
    width: 40px;
    height: 36px;
    position: absolute;
    top: 0;
    left: 0;
    background: #45A4F7;
    border-radius: 4px;
  }
  .menu-button .menu-main .menu-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -7.5px;
    margin-left: -7.5px;
    background: url("./images/icon.png") center center no-repeat;
    background-size: 15px 15px;
    transition: 500ms
  }
  .menu-button .menu-main .menu-icon.active {
    transform: rotate(45deg);
  }
  .menu-button .menu-text {
    color: #fff;
    opacity: 0;
    transition: 500ms;
  }
  .menu-button .menu-text.active {
    opacity: 1;
  }
  .menu-button .menu-text .title {
    position: fixed;
    top: 90px;
    left: 30px;
    font-family: "HanziPen SC";
    font-size: 22px;
    line-height: 22px;
    font-weight: bold;
  }
  .menu-button .menu-text .desc {
    position: fixed;
    top: 132px;
    left: 30px;
    max-width: 250px;
    font-size: 12px;
    line-height: 17px;
  }
  .menu-button .menu-btns {
    position: fixed;
    bottom: 74px;
    left: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
  }
  .menu-button .menu-btns .btn-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(160px);
    transition: 300ms;
  }
  .menu-button .menu-btns .btn-item .icon{
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-button .menu-btns .btn-item .icon img {
    width: 32px;
    height: 32px;
  }
  .menu-button .menu-btns .btn-item span {
    color: #fff;
    font-size: 13px;
    line-height: 13px;
    margin-top: 10px;
  }
  .menu-button .menu-btns.active .btn-item {
    transform: translateY(0);
  }
  .menu-button .menu-btns.active .btn-item:nth-child(1) {
    transition-delay: 100ms;
  }
  .menu-button .menu-btns.active .btn-item:nth-child(2) {
    transition-delay: 150ms;
  }
  .menu-button .menu-btns.active .btn-item:nth-child(3) {
    transition-delay: 200ms;
  }
  .menu-button .menu-btns.active .btn-item:nth-child(4) {
    transition-delay: 250ms;
  }
</style>

<template>
  <div class="about">
    <NavigatorBar title="关于好司机日记" navType="light" bgColor="#fff"/>
    <img src="../assets/pages/About/appicon.png" class="app-icon">
    <p class="icon-desc">好司机日记 v0.8.0-beta</p>
    <div class="panel-group">
      <div class="panel-item" v-for="p in panels" @click="tapPanel(p.clickDesc, p.query, $event)">
        <span class="label">{{p.label}}</span>
        <span :class="['main', p.showArrow? 'arrow': '']">{{p.main}}</span>
      </div>
    </div>
    <div class="bottom-info">
      <p>云车行网络科技（北京）有限公司 版权所有</p>
      <p>©2017 ycx.net. All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "about",
    data() {
      return {
        panels: [
          {
            label: '官方微信',
            main: '安e伴你行',
            showArrow: true,
            clickDesc: '/wechat_qrcode',
            query: ''
          },
          {
            label: '服务条款',
            main: '',
            showArrow: true,
            clickDesc: '/clause',
            query: 'terms'
          },
          {
            label: '隐私政策',
            main: '',
            showArrow: true,
            clickDesc: '/clause',
            query: 'privacy'
          },
        ]
      }
    },
    components: {
      NavigatorBar,
    },
    methods: {
      tapPanel(url, query, e) {
        this.$router.push({path: url, query: {type: query}})

      }
    }
  }
</script>

<style lang="less" scoped>
  .about {
    padding-top: 44px;
    .app-icon {
      margin: 40px auto 10px;
      display: block;
      width: 64px;
      height: 64px;
    }
    .icon-desc {
      color: #666666;
      font-size: 12px;
      margin-bottom: 50px;
      text-align: center;
    }
    .panel-group {
      padding-left: 15px;
      background: #fff;
      margin-bottom: 10px;
      .panel-item {
        padding: 15px;
        padding-left: 0;
        border-bottom: 1px solid #dbdbdb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border-bottom: 0;
        }
        .label {
          color: #333333;
          font-size: 13px;
          line-height: 18px;
        }
        .main {
          color: #ABABAB;
          font-size: 13px;
          line-height: 18px;
          height: 18px;
          &.arrow {
            background: url("../assets/pages/About/Arrow-right.png") right center no-repeat;
            background-size: 7px 12px;
            padding-right: 22px;
          }
        }
      }
    }
    .bottom-info {
      position: fixed;
      bottom: 15px;
      left: 0;
      width: 100%;
      p {
        color: #666666;
        margin-bottom: 5px;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
      }
    }

  }
</style>

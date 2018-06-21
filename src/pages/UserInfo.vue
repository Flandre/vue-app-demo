<template>
  <div class="user-info">
    <NavigatorBar title="个人资料" navType="light" bgColor="#fff"/>
    <div class="panel-group">
      <div class="panel-item" v-for="p in panels" @click="tapPanel(p.clickType, p.clickDesc, p.main, $event)">
        <span class="label">{{p.label}}</span>
        <span :class="['main', p.showArrow? 'arrow': '']">
          <template v-if="p.main == 'avatar'">
            <img src="../assets/pages/UserInfo/avatar.png" class="avatar">
          </template>
          <template v-else-if="p.main == 'qrcode'">
            <img src="../assets/pages/UserInfo/qrcode.png" class="qrcode">
          </template>
          <template v-else>
            {{p.main}}
          </template>
        </span>
      </div>
    </div>
    <ToolTip ref="ToolTip" :showText="tooltipText"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "user-info",
    data() {
      return {
        panels: [
          {
            label: '头像',
            main: 'avatar',
            showArrow: true,
            clickType: 'ban',
            clickDesc: ''
          },
          {
            label: '昵称',
            main: '汪喵',
            showArrow: true,
            clickType: 'change',
            clickDesc: 'nick'
          },
          {
            label: '性别',
            main: '女',
            showArrow: true,
            clickType: 'change',
            clickDesc: 'sex'
          },
          {
            label: '生日',
            main: '1991-01-01',
            showArrow: true,
            clickType: 'change',
            clickDesc: 'birth'
          },
          {
            label: '我的二维码',
            main: 'qrcode',
            showArrow: true,
            clickType: 'url',
            clickDesc: '/my_qrcode'
          },
        ],
        tooltipText: '内测版本暂不开放此功能'
      }
    },
    components: {
      ToolTip,
      NavigatorBar,
    },
    beforeMount() {
      if(sessionStorage.getItem('nick')){
        this.panels[1].main = sessionStorage.getItem('nick')
      }
      if(sessionStorage.getItem('sex')){
        this.panels[2].main = sessionStorage.getItem('sex')
      }
      if(sessionStorage.getItem('birth')){
        this.panels[3].main = sessionStorage.getItem('birth')
      }
    },
    methods: {
      tapPanel(type, desc, value, e){
        switch (type){
          case 'url':
            this.$router.push(desc)
            break
          case 'ban':
            this.bindTooltip()
            break
          case 'change':
            this.$router.push({path: '/change_info', query: {type: desc, value: value}})
            break
        }
      },
      signOut() {
        this.tooltipText = '退出成功'
        this.bindTooltip()
        setTimeout(() => {
          this.tooltipText = '内测版本暂不开放此功能'
          this.$router.replace('/')
        }, 2600)

      },
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    }
  }
</script>

<style lang="less" scoped>
  .user-info {
    padding-top: 44px;
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
          min-height: 18px;
          .avatar {
            width: 40px;
            height: 40px;
            display: block;
            border-radius: 20px;
            margin-top: -11px;
            margin-bottom: -11px;
          }
          .qrcode {
            width: 16px;
            height: 16px;
            display: block;
          }
          &.arrow {
            background: url("../assets/pages/UserInfo/Arrow-right.png") right center no-repeat;
            background-size: 7px 12px;
            padding-right: 22px;
          }
        }
      }
    }
    .active-bar {
      padding: 30px 25px 0;
      .add-button {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
</style>

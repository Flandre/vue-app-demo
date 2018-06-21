<template>
  <div class="setting-entry">
    <NavigatorBar title="设置" navType="light" bgColor="#fff"/>

    <div class="panel-group" v-for="g in panels">
      <div class="panel-item" v-for="p in g" @click="tapPanel(p.clickType, p.clickDesc, $event)">
        <span class="label">{{p.label}}</span>
        <span :class="['main', p.showArrow? 'arrow': '']">{{p.main}}</span>
      </div>
    </div>
    <div class="active-bar">
      <div class="add-button" @click="signOut">退出登录</div>
    </div>
    <ToolTip ref="ToolTip" :showText="tooltipText"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "setting-entry",
    data() {
      return {
        panels: [
          [
            {
              label: '绑定手机号码',
              main: '已绑定',
              showArrow: true,
              clickType: 'url',
              clickDesc: '/change_password'
            },
            {
              label: '个人资料',
              main: ' ',
              showArrow: true,
              clickType: 'url',
              clickDesc: '/user_info'
            },
            {
              label: '收货地址',
              main: '',
              showArrow: true,
              clickType: 'ban',
              clickDesc: ''
            },
          ],
          [
            {
              label: '清除缓存',
              main: '15.8M',
              showArrow: true,
              clickType: 'clearStorage',
              clickDesc: ''
            },
          ],
          [
            {
              label: '鼓励一下',
              main: '攻城狮等你加鸡腿',
              showArrow: true,
              clickType: 'ban',
              clickDesc: ''
            },
            {
              label: '关于好司机日记',
              main: '',
              showArrow: true,
              clickType: 'url',
              clickDesc: '/about'
            },
          ]
        ],
        tooltipText: '内测版本暂不开放此功能',
        timerArr: []
      }
    },
    components: {
      ToolTip,
      NavigatorBar,
    },
    beforeDestroy() {
      this.timerArr.forEach(val => {
        clearTimeout(val)
      })
    },
    methods: {
      tapPanel(type, desc, e){
        switch (type){
          case 'url':
            this.$router.push(desc)
            break
          case 'clearStorage':
            this.tooltipText = '清除成功'
            this.bindTooltip()
            this.timerArr[0] = setTimeout(() => {
              this.tooltipText = '内测版本暂不开放此功能'
              e.target.querySelector('.main').innerHTML = '0M'
            }, 2600)
            break
          case 'ban':
            this.bindTooltip()
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
  .setting-entry {
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
          height: 18px;
          &.arrow {
            background: url("../assets/pages/SettingEntry/Arrow-right.png") right center no-repeat;
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

<template>
  <div class="add-friend">
    <NavigatorBar title="添加好友" navType="light" bgColor="#fff"/>
    <div class="list-group">
      <div class="list-item" v-for="list in listData" @click="tapList(list.goWhere)">
        <img :src="list.icon" class="icon">
        <div class="info-content">
          <p class="title">{{list.title}}</p>
          <p class="desc">{{list.desc}}</p>
        </div>
        <img src="../assets/pages/AddFriend/arrowRight.png" class="arrow-icon">
      </div>
    </div>
    <p class="qrcode"><span>我的二维码名片：</span></p>

    <ToolTip ref="ToolTip"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "add-friend",
    components: {
      ToolTip,
      NavigatorBar,
    },
    data(){
      return {
        listData: [
          {
            icon: require('../assets/pages/AddFriend/icon1.png'),
            title: '手机联系人',
            desc: '添加或邀请手机通讯录中的朋友',
            goWhere: false
          },
          {
            icon: require('../assets/pages/AddFriend/icon2.png'),
            title: '扫一扫',
            desc: '扫描二维码添加朋友',
            goWhere: false
          },
          {
            icon: require('../assets/pages/AddFriend/icon3.png'),
            title: '手机联系人',
            desc: '',
            goWhere: false
          },
        ]
      }
    },
    methods: {
      tapList(where){
        if(where){
          this.$router.push(where)
        } else {
          this.bindTooltip()
        }
      },
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      }
    }
  }
</script>

<style lang="less" scoped>
  .add-friend {
    padding-top: 44px;
    .list-group {
      padding-left: 15px;
      background: #fff;
      .list-item {
        padding: 10px 15px;
        padding-left: 0;
        border-bottom: 1px solid #dbdbdb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border-bottom: 0;
        }
        .icon {
          width: 40px;
          height: 40px;
        }
        .info-content {
          flex-grow: 1;
          padding-left: 15px;
          .title {
            font-size: 13px;
            line-height: 18px;
            color: #333333;
            margin-bottom: 2px;
          }
          .desc {
            color: #666666;
            font-size: 11px;
            line-height: 16px;
          }
        }
        .arrow-icon {
          width: 7px;
          height: 12px;
        }
      }
    }
    .qrcode {
      margin-top: 15px;
      text-align: center;
      span {
        font-size: 12px;
        line-height: 18px;
        padding-right: 16px;
        background: url("../assets/pages/AddFriend/qrcode.png") right center no-repeat;
        background-size: 16px 16px;
      }
    }


  }
</style>

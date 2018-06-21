<template>
  <div class="new-friends">
    <NavigatorBar title="新的好友" navType="light" bgColor="#fff"/>
    <div class="list-group">
      <div class="list-item" v-for="(list, index) in listData" v-if="list.status">
        <img :src="list.avatar" class="avatar">
        <div class="info-content">
          <p class="name">{{list.name}}</p>
          <p class="desc" v-if="list.desc != ''">昵称：{{list.desc}}</p>
        </div>
        <div class="status" v-if="list.status == 2">
          等待对方验证
        </div>
        <div class="action-button active" @click="tapAdd(list.status, index)" v-else>
          <span>接受</span>
        </div>
      </div>
    </div>
    <ToolTip ref="ToolTip" :showText="tooltipText"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "new-friends",
    components: {
      ToolTip,
      NavigatorBar,
    },
    data(){
      return {
        listData: [
          {
            avatar: require('../assets/pages/NewFriends/avatarDefault.png'),
            name: '黄江',
            desc: '二十二十二',
            status: 1
          },
          {
            avatar: require('../assets/pages/NewFriends/avatar1.png'),
            name: '陈大帅',
            desc: '仰天长啸',
            status: 2
          },
        ],
        tooltipText: '内测版本暂不开放此功能'
      }
    },
    methods: {
      bindTooltip() {
        this.$refs.ToolTip.showToolTip()
      },
      tapAdd(status, index) {
        if(status){
          this.tooltipText = '添加成功'
          this.bindTooltip()
          setTimeout(() => {
            this.listData[index].status = 0
            this.tooltipText = '内测版本暂不开放此功能'
          }, 2600)
        } else {
          this.bindTooltip()
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .new-friends {
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
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
        }
        .info-content {
          flex-grow: 1;
          padding-left: 15px;
          .name {
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
        .status {
          color: #ABABAB;
          font-size: 13px;
          line-height: 18px;
        }
        .action-button {
          padding: 0 15px;
          line-height: 26px;
          font-size: 13px;
          color: #45A4F7;
          border: 1px solid #45A4F7;
          border-radius: 4px;
          background: #fff;
          &.active {
            background: #45A4F7;
            color: #fff;
          }
        }
      }
    }
  }
</style>

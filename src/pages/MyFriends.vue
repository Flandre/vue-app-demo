<template>
  <div class="my-friends">
    <NavigatorBar title="我的好友" navType="light" bgColor="#fff"/>
    <div class="list-group">
      <div class="list-item">
        <img src="../assets/pages/MyFriends/addIcon.png" class="avatar">
        <div class="info-content">
          <p class="name">新的好友</p>
        </div>
        <img src="../assets/pages/AddFriend/arrowRight.png" class="arrow-icon">
      </div>
    </div>
    <div class="list-group">
      <div class="list-item" v-for="(list, index) in listData">
        <img :src="list.avatar" class="avatar">
        <div class="info-content">
          <p class="name">{{list.name}}</p>
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
    name: "my-friends",
    components: {
      ToolTip,
      NavigatorBar,
    },
    data(){
      return {
        listData: [
          {
            avatar: require('../assets/pages/MyFriends/avatar1.png'),
            name: '好司机0005',
          },
          {
            avatar: require('../assets/pages/MyFriends/avatar4.png'),
            name: '沉默的尔萨',
          },
          {
            avatar: require('../assets/pages/MyFriends/avatar2.png'),
            name: '饮歌',
          },
          {
            avatar: require('../assets/pages/MyFriends/avatar3.png'),
            name: '日古将军',
          },
        ],
        tooltipText: '内测版本暂不开放此功能'
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
      },
      tapAdd(status, index) {
        if(status){
          this.tooltipText = '添加成功'
          this.bindTooltip()
          setTimeout(() => {
            this.listData[index].status = 2
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
  .my-friends {
    padding-top: 44px;
    .list-group {
      padding-left: 15px;
      background: #fff;
      margin-bottom: 10px;
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
        .arrow-icon {
          width: 7px;
          height: 12px;
        }
      }
    }
  }
</style>

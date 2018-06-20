<template>
  <div class="add-phone">
    <NavigatorBar title="手机通讯录" navType="light" bgColor="#fff"/>
    <div class="list-group">
      <div class="list-item" v-for="(list, index) in listData">
        <img :src="list.avatar" class="avatar">
        <div class="info-content">
          <p class="name">{{list.name}}</p>
          <p class="desc" v-if="list.desc != ''">昵称：{{list.desc}}</p>
        </div>
        <div class="status" v-if="list.status == 2">
          已添加
        </div>
        <div :class="['action-button', list.status? 'active': '']" @click="tapAdd(list.status, index)" v-else>
          <span>{{list.status? '添加': '邀请'}}</span>
        </div>
      </div>
    </div>

    <ToolTip ref="ToolTip"/>
  </div>
</template>

<script>
  import ToolTip from '@/components/Tooltip/Tooltip'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "add-phone",
    components: {
      ToolTip,
      NavigatorBar,
    },
    data(){
      return {
        listData: [
          {
            avatar: require('../assets/pages/AddPhone/avatar1.png'),
            name: '陈浩',
            desc: '好司机0005',
            status: 1
          },
          {
            avatar: require('../assets/pages/AddPhone/avatarDefault.png'),
            name: '顾菲',
            desc: '',
            status: 0
          },
          {
            avatar: require('../assets/pages/AddPhone/avatarDefault.png'),
            name: '黄江',
            desc: '二十二十二',
            status: 2
          },
          {
            avatar: require('../assets/pages/AddPhone/avatar2.png'),
            name: '孟庆勇',
            desc: '饮歌',
            status: 0
          },
          {
            avatar: require('../assets/pages/AddPhone/avatar3.png'),
            name: '汪喵',
            desc: '日古将军',
            status: 1
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
      },
      tapAdd(status, index) {
        if(status){

        } else {
          this.bindTooltip()
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .add-phone {
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

<template>
  <div class="home">
    <div class="top-panel">
      <div class="top-control">
        <div class="add-friends">
          <img src="../../assets/pages/home/addFriendsIcon.png">
        </div>
        <div class="message">
          <img src="../../assets/pages/home/messageIcon.png">
        </div>
      </div>
      <div class="account-info">
        <div class="avatar-box"></div>
      </div>
    </div>
    <h3>This is home page</h3>
  </div>
</template>

<script>
  export default {
    name: "Home",
    beforeMount() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
  }
</script>

<style lang="less" scoped>
  .home {
    .top-panel {
      background: #45A4F7;
      overflow: hidden;
      .top-control {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        .add-friends,
        .message{
          img {
            width: 22px;
            height: 22px;
          }
        }

      }
    }
  }

</style>

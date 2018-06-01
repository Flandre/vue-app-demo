<template>
  <div class="license-auth">
    <NavigatorBar title="认证电子驾照" navType="light" bgColor="#fff"/>
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "license-auth",
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount(){
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    mounted() {
    },
    beforeRouteUpdate(to, from, next) {
      if (from.fullPath == '/license_auth/step2') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },

  }
</script>

<style lang="less" scoped>
  .license-auth {
    margin-top: 44px;
  }


  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>

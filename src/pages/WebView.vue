<template>
  <div class="web-view">
    <NavigatorBar :title="wTitle" navType="light" bgColor="#fff"/>
    <img :src="pageNow" class="page">

  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "web-view",
    data() {
      return {
        pageData: [
          '',
          require('../assets/pages/WebView/page1.png'),
          require('../assets/pages/WebView/page2.jpg'),
          require('../assets/pages/WebView/page3.jpg'),
          require('../assets/pages/WebView/page4.jpg'),
          require('../assets/pages/WebView/page5.png'),
          require('../assets/pages/WebView/page6.jpg'),
          require('../assets/pages/WebView/page7.png'),
          require('../assets/pages/WebView/page8.jpg'),
          require('../assets/pages/WebView/page9.jpg'),
        ],
        pageNow : '',
        wTitle: ''
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {
      if(this.$route.query.title){
        this.wTitle = this.$route.query.title
      }
      this.pageNow = this.pageData[this.$route.query.pid]
    }

  }
</script>

<style lang="less" scoped>
  .web-view {
    padding-top: 44px;
    .page {
      width: 100%;
      height: auto;
    }
  }
</style>

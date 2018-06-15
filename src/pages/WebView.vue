<template>
  <div class="web-view">
    <NavigatorBar title="" navType="light" bgColor="#fff"/>
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
        ],
        pageNow : ''
      }
    },
    components: {
      NavigatorBar,
    },
    beforeMount() {


    }

  }
</script>

<style lang="less" scoped>
  .web-view {

  }
</style>

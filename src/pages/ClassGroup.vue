<template>
  <div class="class-group">
    <NavigatorBar title="" bgColor="#fff" navType="dark" scrollType="fade" navTypeChange="change"/>
    <img src="../assets/pages/ClassGroup/banner.png" class="banner">
    <div class="group-info">
      <p class="title">防御性驾驶宝典</p>
      <p class="text">防御性驾驶能够帮助驾驶员更清楚地了解人类的“生理缺陷”、更全面地观察并了解驾驶环境、更准确地预测不确定的潜在的危险因素、更及时地采取预防措施避免交通事故。</p>
    </div>
    <ClassList />
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import ClassList from '../components/ClassList/ClassList'
  export default {
    name: "class-group",
    components: {
      NavigatorBar,
      ClassList
    },
    beforeMount() {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="less" scoped>
  .class-group {
    .banner {
      width: 100%;
      height: auto;
      display: block;
    }
    .group-info {
      background: #fff;
      padding: 20px 15px;
      position: relative;
      overflow: hidden;
      .title {
        font-size: 15px;
        line-height: 15px;
        color: #333;
        margin-bottom: 15px;
      }
      .text {
        font-size: 13px;
        color: #666666;
        line-height: 18px;
      }
      &:after {
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 15px;
        background: #dbdbdb;
      }

    }
  }

</style>

<template>
  <div class="class-group">
    <NavigatorBar title="" bgColor="#fff" navType="dark" scrollType="fade" navTypeChange="change"/>
    <img src="../assets/pages/ClassGroup/banner.png" class="banner">
    <div class="group-info">
      <p class="title">新手上路宝典</p>
      <p class="text">很多车主认为，安全带就是“拉过来、扣上去”这么简单。虽然它只是一根简单的可以扣起来的带子,但在关键时刻能救你一命。</p>
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

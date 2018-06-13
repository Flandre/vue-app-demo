<template>
  <div class="exposure-edit">
    <NavigatorBar title="违法曝光" bgColor="#fff" navType="light" menuRightText="取消" menuRightPath="goBack" menuRightColor="#bbb"/>
    <div class="msg-container">
      <div class="text-input">
        <textarea placeholder="请输入违法曝光内容，帮助警察蜀黍进行查验"></textarea>
      </div>
      <div class="add-images">
        <div class="img-box">
        </div>
        <div class="img-box add">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "exposure-edit",
    components: {
      NavigatorBar
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .exposure-edit {
    padding-top: 44px;
    .msg-container {
      padding-left: 20px;
      background: #fff;
      .text-input {
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        textarea {
          width: 100%;
          height: 60px;
          outline: none;
        }
      }
      .add-images {
        padding-bottom: 30px;
        .img-box {
          width: 100px;
          height: 100px;
          border: 1px solid #ddd;
        }
      }
    }
  }
</style>

<template>
  <div class="edit-car">
    <NavigatorBar :title="showTitle" navType="light" bgColor="#fff"/>
    <div class="top-tip">
      <span>请对照《机动车行驶证》认真填写以下信息</span>
    </div>
    <div class="form-group">
      <div class="form-row">
        <span class="label">号牌类型</span>
        <select class="main">
          <option>京</option>
          <option>京</option>
          <option>京</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "edit-car",
    data() {
      return {
        showTitle: "添加车辆"
      }
    },
    components: {
      NavigatorBar,
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .edit-car {
    margin-top: 44px;
    .top-tip {
      height: 34px;
      background: rgba(69, 164, 247, .2);
      text-align: center;
      margin-bottom: 10px;
      span {
        font-size: 12px;
        color: #333;
        line-height: 34px;
      }
    }
    .form-group {
      padding-left: 15px;
      background: #fff;
      .form-row {
        height: 50px;
        border-bottom: 1px solid #DBDBDB;
        line-height: 50px;
        position: relative;
        padding-left: 96px;
        .label {
          display: block;
          width: 96px;
          position: absolute;
          top: 0;
          left: 0;
          color: #333333;
          font-size: 13px;
        }
        .main {
          width: 100%;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }

</style>

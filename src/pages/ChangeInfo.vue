<template>
  <div class="change-info">
    <NavigatorBar :title="navTitle" bgColor="#fff" navType="light"/>
    <p class="desc">使用中英文、数字和下划线</p>
    <div class="panel">
      <input :placeholder="placeText" v-model="valueText"/>
    </div>
    <div class="active-bar">
      <div class="add-button" @click="saveSetting">保存</div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  // import Datepicker from 'vue-datepicker-simple'
  export default {
    name: "change-info",
    data() {
      return {
        navTitle: '',
        valueText: '',
        placeText: '',
      }
    },
    components: {
      NavigatorBar,
      // Datepicker
    },
    beforeMount() {
      switch (this.$route.query.type){
        case 'nick':
          this.navTitle = '修改昵称'
          this.valueText = this.$route.query.value
          this.placeText = '请输入昵称'
          break
        case 'sex':
          this.navTitle = '修改性别'
          this.valueText = this.$route.query.value
          this.placeText = '请输入性别'
          break
        case 'birth':
          this.navTitle = '修改生日'
          this.valueText = this.$route.query.value
          this.placeText = '请输入生日'
          break
      }
    },
    methods: {
      // tss() {
      //   console.log(111)
      // },
      saveSetting() {
        if(this.$route.query.type){
          sessionStorage.setItem(this.$route.query.type, this.valueText)
        }
        this.$router.goBack()
      }
    }
  }
</script>

<style lang="less" scoped>
  .change-info {
    padding-top: 44px;
    .desc {
      color: #ABABAB;
      font-size: 12px;
      line-height: 34px;
      padding: 0 15px;
    }
    .panel {
      padding: 0 15px;
      background: #fff;
      input {
        line-height: 48px;
        width: 100%;
        outline: none;
      }
    }
    .active-bar {
      padding: 30px 25px 0;
      .add-button {
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #45A4F7;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
</style>

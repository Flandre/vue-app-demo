<template>
  <div class="recommend-study">
    <StudyRecommend />
    这是推荐学习
  </div>
</template>

<script>
  import StudyRecommend from '@/components/StudyRecommend/StudyRecommend'
  export default {
    name: "recommend-study",
    data(){
      return {

      }
    },
    components: {
      StudyRecommend
    }
  }
</script>

<style lang="less" scoped>
  .recommend-study {

  }
</style>

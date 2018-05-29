<template>
  <div class="recommend-study">
    <StudyRecommend />
    <StudyGroup />
  </div>
</template>

<script>
  import StudyRecommend from '@/components/StudyRecommend/StudyRecommend'
  import StudyGroup from '@/components/StudyGroup/StudyGroup'
  export default {
    name: "recommend-study",
    data(){
      return {

      }
    },
    components: {
      StudyRecommend,
      StudyGroup
    }
  }
</script>

<style lang="less" scoped>
  .recommend-study {

  }
</style>

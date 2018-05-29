<template>
  <div class="safe-study">
    <StudyRecommend dataSource="210"/>
    <StudyGroup dataSource="11_22222_00_120"/>
  </div>
</template>

<script>
  import StudyRecommend from '@/components/StudyRecommend/StudyRecommend'
  import StudyGroup from '@/components/StudyGroup/StudyGroup'
  export default {
    name: "safe-study",
    components: {
      StudyRecommend,
      StudyGroup
    }
  }
</script>

<style lang="less" scoped>
  .safe-study {

  }
</style>

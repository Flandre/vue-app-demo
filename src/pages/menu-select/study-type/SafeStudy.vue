<template>
  <div class="safe-study">
    <StudyRecommend dataSource="012"/>
    <StudyGroup dataSource="46721_3580"/>
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

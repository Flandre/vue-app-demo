<template>
  <div class="license-study">
    <StudyRecommend dataSource="201"/>
    <StudyGroup dataSource="12021_1012_0021_120"/>
  </div>
</template>

<script>
  import StudyRecommend from '@/components/StudyRecommend/StudyRecommend'
  import StudyGroup from '@/components/StudyGroup/StudyGroup'
  export default {
    name: "license-study",
    components: {
      StudyRecommend,
      StudyGroup
    }
  }
</script>

<style scoped>

</style>

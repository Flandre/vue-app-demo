<template>
  <div class="license-study">
    <StudyRecommend dataSource="201"/>
    <StudyGroup dataSource="12067_348"/>
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

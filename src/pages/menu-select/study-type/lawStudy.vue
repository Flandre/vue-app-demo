<template>
  <div class="law-study">
    <StudyRecommend dataSource="120"/>
    <StudyGroup dataSource="202101_2120_0021_120"/>
  </div>
</template>

<script>
  import StudyRecommend from '@/components/StudyRecommend/StudyRecommend'
  import StudyGroup from '@/components/StudyGroup/StudyGroup'
  export default {
    name: "law-study",
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

<style scoped>

</style>

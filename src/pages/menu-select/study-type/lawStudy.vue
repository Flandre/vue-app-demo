<template>
  <div class="law-study">
    <StudyRecommend dataSource="102"/>
    <StudyGroup dataSource="31208_64"/>
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

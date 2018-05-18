<template>
  <div class="article-list">
    <div class="title">
      <h3>{{title}}</h3>
      <!--<div class="change-btn">-->

      <!--</div>-->
    </div>
    <div class="list-container">
      <div class="list-item" v-for="list in articleData" :key="list.id" >
        <div class="thumb">
          <img :src="list.titleImage"/>
        </div>
        <h3>{{list.title}}</h3>
        <div class="keywords-container">
          <span class="keyword-item" v-for="keyword in list.keywords">{{keyword}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "article-list",
    data() {
      return {
        articleData: [
          {
            titleImage: require('../assets/components/ArticleList/titleImages/image1.png'),
            title: '虚线变道也可能扣2分罚300，你知道哪些时候不能变道吗？',
            keywords: ['交通法规', '变道'],
            id: 1
          },
          {
            titleImage: require('../assets/components/ArticleList/titleImages/image2.png'),
            title: '春节长途自驾归来，汽车的检查养护很重要！',
            keywords: ['车辆保护', '自驾'],
            id: 2
          },
          {
            titleImage: require('../assets/components/ArticleList/titleImages/image3.png'),
            title: '各种交通标识傻傻分不清，9张图让你秒成老司机！',
            keywords: ['交通标识'],
            id: 3
          },
          {
            titleImage: require('../assets/components/ArticleList/titleImages/image4.png'),
            title: '哪几类算无证？ 交警：无证驾驶无责也会成有责！',
            keywords: ['交通法规', '无证驾驶'],
            id: 4
          },
          {
            titleImage: require('../assets/components/ArticleList/titleImages/image5.png'),
            title: '爱车年检不用愁 要点全在这篇文章里了',
            keywords: ['车辆年检'],
            id: 5
          },
        ]

      }
    },
    props: ['title']
  }
</script>

<style scoped>
  .article-list {

  }
</style>

<template>
  <div class="article-detail">
    <NavigatorBar title="" navType="light" bgColor="#fff"/>
    <template v-if="articleData">
      <div class="article-container">
        <h2 class="title">{{articleData.title}}</h2>
        <div class="metadata">
          <span class="category">{{articleData.category}}</span>
          <span class="time">{{articleData.time}}</span>
        </div>
        <div class="content">
          <template v-for="i in articleData.text">
            <h2 v-if="i.type === 'h2'">{{i.node}}</h2>
            <h3 v-if="i.type === 'h3'">{{i.node}}</h3>
            <h4 v-if="i.type === 'h4'">{{i.node}}</h4>
            <h5 v-if="i.type === 'h5'">{{i.node}}</h5>
            <p v-if="i.type === 'p'">{{i.node}}</p>
            <p v-if="i.type === 'p.center'" style="text-align: center">{{i.node}}</p>
            <p v-if="i.type === 'b'"><b>{{i.node}}</b></p>
            <p v-if="i.type === 'b.center'" style="text-align: center"><b>{{i.node}}</b></p>
            <img :src="i.src" v-if="i.type === 'img'"/>
          </template>
        </div>
      </div>
      <ArticleList title="相关阅读"/>
    </template>
    <template v-else >
      没有该文章
    </template>
  </div>
</template>

<script>
  import allData from './allData'
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import ArticleList from '@/components/ArticleList/ArticleList'
  export default {
    name: "article-detail",
    data(){
      return {
        articleData: ''
      }
    },
    components: {
      NavigatorBar,
      ArticleList
    },
    beforeMount(){
      /* 返回顶部 */
      window.scrollTo(0, 0)
      /*抽出文章*/
      // console.log(this.$route.params.aid)
      allData.forEach(val => {
        if(val.id == this.$route.params.aid){
          this.articleData = val
        }
      })
    },
    watch: {
      '$route' (to, from) {
        window.scrollTo(0, 0)
        allData.forEach(val => {
          if(val.id == this.$route.params.aid){
            this.articleData = val
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .article-detail {
    padding-top: 44px;
    font-size: 16px;
    .article-container {
      padding: 25px;
      background: #fff;
      margin-bottom: 10px;
      .title {
        font-size: 22px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 10px;
      }
      .metadata {
        font-size: 16px;
        margin-bottom: 20px;
        color: #ababab;
        .category {
          color: #45a4f7;
          margin-right: 12px;
        }
      }
      .content {
        img {
          display: block;
          max-width: 100%;
          height: auto;
          margin-bottom: 18px;
          margin-left: auto;
          margin-right: auto;
        }
        h2 {
          font-size: 20px;
          margin-bottom: 18px;
          margin-top: 36px;
        }
        p {
          margin-bottom: 18px;
        }
      }
    }

  }
</style>

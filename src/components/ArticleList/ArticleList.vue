<template>
  <div class="article-list">
    <div class="title">
      <h2>{{title}}</h2>
      <div v-if="showChange" :class="['change-btn', {active: changing}]" @click="changeArticle"><div class="icon"></div><span>换一换</span></div>
    </div>
    <div class="list-container">
      <div class="list-item" v-for="list in articleData" :key="list.id" >
        <div class="thumb">
          <img :src="list.titleImage"/>
        </div>
        <div class="info">
          <h3>{{list.title}}</h3>
          <div class="keywords-container">
            <span class="keyword-item" v-for="keyword in list.keywords">{{keyword}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "article-list",
    mounted(){
      switch(this.articleGroup){
        case 'normal':
          this.articleData = [
            {
              titleImage: require('./images/titleImages/image1.png'),
              title: '虚线变道也可能扣2分罚300，你知道哪些时候不能变道吗？',
              keywords: ['交通法规', '变道'],
              id: 1
            },
            {
              titleImage: require('./images/titleImages/image2.png'),
              title: '春节长途自驾归来，汽车的检查养护很重要！',
              keywords: ['车辆保护', '自驾'],
              id: 2
            },
            {
              titleImage: require('./images/titleImages/image3.png'),
              title: '各种交通标识傻傻分不清，9张图让你秒成老司机！',
              keywords: ['交通标识'],
              id: 3
            },
            {
              titleImage: require('./images/titleImages/image4.png'),
              title: '哪几类算无证？ 交警：无证驾驶无责也会成有责！',
              keywords: ['交通法规', '无证驾驶'],
              id: 4
            },
            {
              titleImage: require('./images/titleImages/image5.png'),
              title: '爱车年检不用愁 要点全在这篇文章里了',
              keywords: ['车辆年检'],
              id: 5
            },
          ]
          break;
        case 'endorsement':
          this.articleData = [
            {
              titleImage: require('./images/titleImages/image6.png'),
              title: '如何认定故意遮挡、污损机动车号牌行为',
              keywords: ['遮挡车牌', '污损号牌'],
              id: 6
            },
            {
              titleImage: require('./images/titleImages/image7.png'),
              title: '汽车牌照污损怎样换新？',
              keywords: ['污损号牌', '补办号牌'],
              id: 7
            },
            {
              titleImage: require('./images/titleImages/image8.png'),
              title: '“车牌照反光漆”网上热销 交警：属故意污损号牌',
              keywords: ['污损号牌'],
              id: 8
            },
          ]
          break;
      }

    },
    data() {
      return {
        articleData: [],
        changing: false,
      }
    },
    methods: {
      changeArticle() {
        if(!this.changing){
          this.changing = true
          setTimeout(() => {
            this.articleData.sort(() => Math.random() < 0.5 ? -1: 1)
            this.changing = false
          }, 1000)
        }
      }
    },
    props: {
      title: {
        required: true
      },
      showChange: {
        default: false
      },
      articleGroup: {
        default: 'normal'
      }
    }
  }
</script>

<style scoped>
  .article-list {
    margin-top: 10px;
    background: #fff;
    padding: 15px;
    padding-bottom: 0;
  }
  .article-list .title {
    margin-bottom: 8px;
    position: relative;
  }
  .article-list .title h2{
    font-size: 15px;
    line-height: 15px;
    color: #4A4A4A;
    font-weight: normal;
  }
  .article-list .change-btn {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 11px;
    line-height: 16px;
    color: #ABABAB;
    vertical-align: middle;
  }
  .article-list .change-btn .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url("./images/changeIcon.png") center no-repeat;
    background-size: 16px 16px;
    margin-right: 5px;
  }
  .article-list .change-btn.active .icon {
    animation: rotate 700ms linear infinite;
  }
  .article-list .change-btn span {
    display: inline-block;
  }
  .article-list .list-container {
    margin-right: -15px;
  }
  .article-list .list-container .list-item{
    padding: 10px 15px 10px 0;
    border-bottom: 1px solid #DBDBDB;
    min-height: 80px;
    position: relative;
    overflow: hidden;
  }
  .article-list .list-container .list-item:last-child{
    border-bottom: none;
  }
  .article-list .list-container .list-item .thumb {
    width: 80px;
    height: 60px;
    position: absolute;
    top: 10px;
    left: 0;
  }
  .article-list .list-container .list-item .thumb img{
    width: 100%;
    height: auto;
  }
  .article-list .list-container .list-item .info{
    float: left;
    padding-left: 95px;
    width: 100%;
  }
  .article-list .list-container .list-item .info h3{
    font-size: 13px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    font-weight: normal;
  }
  .article-list .list-container .list-item .info .keywords-container{
    text-align: right;
  }
  .article-list .list-container .list-item .info .keywords-container span{
    display: inline-block;
    margin-left: 10px;
    font-size: 10px;
    line-height: 18px;
    padding: 0 6px;
    color: #45A4F7;
    border: 1px solid #45A4F7;
    border-radius: 4px;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

</style>

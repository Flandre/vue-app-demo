<template>
  <div :class="['article-list', articleType]">
    <div class="title" v-if="title != ''">
      <h2>{{title}}</h2>
      <div v-if="showChange" :class="['change-btn', {active: changing}]" @click="changeArticle"><div class="icon"></div><span>换一换</span></div>
    </div>
    <div class="list-container">
      <div class="list-item" v-for="(list, index) in articleData.slice(0, articleLimit)" :key="index" @click="tapList(list.id)">
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
    beforeMount(){
      switch(this.articleGroup){
        case 'normal':
          let data = [
            // {
            //   titleImage: require('./images/titleImages/image1.png'),
            //   title: '开车并线时如何掌握正确的时机和安全距离',
            //   keywords: ['并线', '变道'],
            //   id: 1
            // },
            // {
            //   titleImage: require('./images/titleImages/image2.png'),
            //   title: '春节长途自驾归来，汽车的检查养护很重要！',
            //   keywords: ['车辆保护', '自驾'],
            //   id: 2
            // },
            // {
            //   titleImage: require('./images/titleImages/image3.png'),
            //   title: '各种交通标识傻傻分不清，9张图让你秒成老司机！',
            //   keywords: ['交通标识'],
            //   id: 3
            // },
            // {
            //   titleImage: require('./images/titleImages/image4.png'),
            //   title: '哪几类算无证？ 交警：无证驾驶无责也会成有责！',
            //   keywords: ['交通法规', '无证驾驶'],
            //   id: 4
            // },
            // {
            //   titleImage: require('./images/titleImages/image5.png'),
            //   title: '爱车年检不用愁 要点全在这篇文章里了',
            //   keywords: ['车辆年检'],
            //   id: 5
            // },
            {
              titleImage: require('./images/titleImages/image9.png'),
              title: '开车并线时如何掌握正确时机和安全距离',
              keywords: ['变更车道', '并线'],
              id: 9
            },
            {
              titleImage: require('./images/titleImages/image10.png'),
              title: '老司机为什么都说：让速不让道',
              keywords: ['变更车道'],
              id: 10
            },
            {
              titleImage: require('./images/titleImages/image11.png'),
              title: '为什么你总是堵在路上？可能是“幽灵堵车”在作怪',
              keywords: ['拥堵', '变更车道'],
              id: 11
            },
            {
              titleImage: require('./images/titleImages/image12.jpg'),
              title: '防御性驾驶 | 高速出口行驶法则',
              keywords: ['防御性驾驶', '行车技巧'],
              id: 12
            },
            {
              titleImage: require('./images/titleImages/image13.png'),
              title: '世界各国如何处理酒驾？真是想都想不到！',
              keywords: ['交通法规', '酒驾'],
              id: 13
            },
          ], newData = []
          if(this.articleSort){
            `${this.articleSort}`.split('').forEach(val => {
              if(data[val]){
                newData.push(data[val])
              }
            })
            data = newData
          }
          this.articleData = data
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
      },
      tapList(id) {
        if(this.articleGroup == 'normal'){
          this.$router.push({path: `/article_detail/${id}`})
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
      },
      articleType: {
        default: 'normal'
      },
      articleLimit: {
        default: 5
      },
      articleSort: {
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .article-list {
    background: #fff;
    padding: 0 15px;
    overflow: hidden;
    .title {
      margin-bottom: 8px;
      margin-top: 15px;
      position: relative;
      h2{
        font-size: 15px;
        line-height: 15px;
        color: #4A4A4A;
        font-weight: normal;
      }
    }
    .change-btn {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 11px;
      line-height: 16px;
      color: #ABABAB;
      vertical-align: middle;
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        background: url("./images/changeIcon.png") center no-repeat;
        background-size: 16px 16px;
        margin-right: 5px;
      }
      &.active {
        .icon {
          animation: rotate 700ms linear infinite;
        }
      }
      span {
        display: inline-block;
      }
    }
    .list-container {
      margin-right: -15px;
      .list-item{
        padding: 10px 15px 10px 0;
        border-bottom: 1px solid #DBDBDB;
        min-height: 80px;
        position: relative;
        overflow: hidden;
        &:last-child{
          border-bottom: none;
        }
        .thumb {
          width: 80px;
          height: 60px;
          position: absolute;
          top: 10px;
          left: 0;
          img{
            width: 100%;
            height: auto;
          }
        }
        .info{
          float: left;
          padding-left: 95px;
          width: 100%;
          h3{
            font-size: 13px;
            line-height: 18px;
            height: 36px;
            overflow: hidden;
            font-weight: normal;
          }
          .keywords-container{
            text-align: right;
            span{
              display: inline-block;
              margin-left: 10px;
              font-size: 10px;
              line-height: 18px;
              padding: 0 6px;
              color: #45A4F7;
              border: 1px solid #45A4F7;
              border-radius: 4px;
            }
          }
        }
      }
    }
    &.endorsement-type {
      .title {
        margin-left: -15px;
        margin-right: -15px;
        h2 {
          color: #000;
          font-size: 13px;
          padding: 0 15px 11px;
          margin-bottom: 0;
          border-bottom: 1px solid #dbdbdb
        }
      }
      .list-container {
        .list-item {
          .info {
            .keywords-container {
              text-align: left;
              span {
                color: #A4B2C3;
                border-color: #A4B2C3;
                &:first-child {
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
    }
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

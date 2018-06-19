<template>
  <div class="class-simple">
    <NavigatorBar title="" bgColor="#fff" navType="dark" scrollType="fade" navTypeChange="change"/>
    <video :src="videoSrc" controls="controls" class="vedio-box" autoplay>
      your browser does not support the video tag
    </video>
    <div class="class-control">
      <div class="class-info">
        <p class="title">{{title}}</p>
        <p class="text">{{desc}}</p>
      </div>
      <div class="class-test">
        <div class="action-bar">
          <p class="last-score" v-if="lastScore >= 0">测评得分：<em>{{lastScore}}</em>/100</p>
          <div class="button" @click="tapQuestion">
            <span>{{buttonText}}</span>
          </div>
        </div>
        <p class="desc">学完视频并通过测评，可获得<em>200</em>积分！</p>
      </div>
    </div>
    <ClassList title="新手上路宝典" v-if="showList == true"  isReplace="true"/>
    <ClassCard title="相关视频" isReplace="true"/>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  import ClassList from '../components/ClassList/ClassList'
  import ClassCard from '@/components/ClassCard/ClassCard'
  export default {
    name: "class-simple",
    data() {
      return {
        videoData: [
          {
            videoSrc: require('../assets/pages/ClassSimple/0.mp4'),
            title: '变更车道隐患多，正确方法学起来',
            desc: '变更车道是日常驾驶中一个再平常不过的操作，但是您知道变更车道的正确方法吗？'
          },
          {
            videoSrc: require('../assets/pages/ClassSimple/1.mp4'),
            title: '请慢一点，平安是福！',
            desc: '人们常说“十次事故九次快”，有研究结果表明，车辆平均速度越高，事故发生率越高，其造成的伤害也就越大'
          }
        ],
        showList: false,
        buttonText: '开始测评',
        lastScore: -1,
        videoSrc: '',
        title: '',
        desc: '',
        vid: '1'
      }
    },
    components: {
      NavigatorBar,
      ClassList,
      ClassCard
    },
    beforeMount() {
      window.scrollTo(0, 0)
      let vid = this.$route.query.vid || 0
      this.vid = vid
      this.videoSrc = this.videoData[vid].videoSrc
      this.title = this.videoData[vid].title
      this.desc = this.videoData[vid].desc

      if(this.$route.query.showList) {
        this.showList = true
      }
      if(sessionStorage.getItem(`lastScore_${vid}`)){
        this.lastScore = sessionStorage.getItem(`lastScore_${vid}`)
        this.buttonText = '继续测评'
      }
    },
    methods: {
      tapQuestion(){
        if(this.$route.query.vid == 1){
          this.$router.push('/class_question_1')
        } else {
          this.$router.push('/class_question')
        }
      }
    },
    watch: {
      '$route' (to, from) {
        window.scrollTo(0, 0)
        if(to.query.vid != from.query.vid){
          console.log(1)
          let vid = this.$route.query.vid || 0
          this.vid = vid
          this.videoSrc = this.videoData[vid].videoSrc
          this.title = this.videoData[vid].title
          this.desc = this.videoData[vid].desc
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .class-simple {
    .vedio-box {
      display: block;
      width: 100%;
      height: 210px;
      background: #000;
    }
    .class-control {
      padding: 20px 15px;
      background: #fff;
      margin-bottom: 10px;
      .class-info {
        position: relative;
        overflow: hidden;
        padding-bottom: 15px;
        border-bottom: 1px solid #dbdbdb;
        .title {
          font-size: 15px;
          line-height: 15px;
          color: #333;
          margin-bottom: 15px;
        }
        .text {
          font-size: 13px;
          color: #666666;
          line-height: 18px;
        }
      }
      .class-test {
        .action-bar {
          padding: 15px;
          .last-score {
            text-align: center;
            font-size: 12px;
            color: #666666;
            margin-bottom: 10px;
            em {
              color: #45A4F7;
              font-size: 15px;
              font-style: normal;
            }
          }
          .button {
            width: 100%;
            height: 44px;
            background: #45A4F7;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            span {
              line-height: 44px;
            }
          }
        }
        .desc {
          text-align: center;
          font-size: 12px;
          line-height: 12px;
          em {
            font-style: normal;
            color: #FEAB34;
          }
        }
      }
    }
    .class-list {
      margin-bottom: 10px;
    }
  }
</style>

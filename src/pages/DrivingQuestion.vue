<template>
  <div class="driving-question">
    <NavigatorBar title="评分说明" navType="light" bgColor="#fff"/>
    <div class="text">
      <p>“好司机日记”在完善的驾驶行为分析模型的基础上，利用先进算法从多个维度进行综合计算，最终得到综合评分。您的分数越高，说明驾驶风险越低。</p>
      <p><b>评分有哪些维度？</b></p>
      <p>“好司机日记”依据驾驶中的速控、操控、专注、环境、疲劳这五个维度，做出分析得到综合评分。</p>
      <p>（1）速控：在高速公路和城市道路里，驾驶速度超过最高限速或低于最低限速，会增加驾驶风险系数，合理控制速度，有利于保证驾驶安全。</p>
      <p>（2）操控：评测您在驾驶中不良行为的频度，包括急加速、急减速、急转弯等。这些行为结合里程、速度等其它条件将产生较高的风险。</p>
      <p>（3）专注：开车时玩手机和打电话会分散您的注意力，驾驶中时刻集中注意力是保证驾驶安全的主要因素。</p>
      <p>（4）环境：根据您在各种环境下的驾驶行为评估风险，环境因素包括天气状况、事故路段、拥堵情况等。</p>
      <p>（5）疲劳：单次行程行车时间过长，容易导致疲劳驾驶，增加驾驶风险。</p>
      <p><b>分数代表怎样的水准？</b></p>
      <p>0-59：需努力</p>
      <p>60-84：一般</p>
      <p>85-100：很好</p>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "driving-question",
    components: {
      NavigatorBar,
    },
  }
</script>

<style lang="less" scoped>
  .driving-question {
    padding-top: 44px;
    .text {
      padding: 20px;
      background: #fff;
      p {
        color: #333333;
        font-size: 13px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }

  }
</style>

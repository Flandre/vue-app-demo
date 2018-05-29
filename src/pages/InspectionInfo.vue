<template>
  <div class="inspection-info">
    <NavigatorBar title="年检提醒" bgColor="#fff" navType="light"/>
    <div class="inspection-panel" :style="{backgroundColor: panelColor}">
      <p class="info">距下次年检还剩</p>
      <p class="num">{{remainingDay}}<em>天</em></p>
      <p class="desc">请在2018年4月30日前{{otherDesc}}</p>
    </div>
    <div class="reminding-switch" @click="tapSwitch">
      <div class="info">
        <p class="title">主动提醒</p>
        <p class="desc">到期前90天/30天/10天/3天会提醒您</p>
      </div>
      <div :class="['choose-btn', switchActive? 'active': '']"></div>
    </div>
    <div class="collapse">
      <div :class="['collapse-item', showCollapse == 1 ? 'active' : '']">
        <div class="title" @click="tapCollapse(1)">
          <span>年检期限</span>
          <img src="../assets/pages/InspectionInfo/arrow-down.png" class="arrow-down">
        </div>
        <div class="detail">
          <p>已注册登记的机动车，按照下列期限申请机动车检验合格标志：</p>
          <p>1. 营运载客汽车5年以内每年检验1次；达到和超过5年的，每6个月检验1次；</p>
          <p>2. 载货汽车和大型、中型非营运载客汽车10年以内每年检验1次；达到和超过10年的，每6个月检验1次；</p>
          <p>3. 摩托车4年以内每2年检验1次；达到和超过4年的，每年检验1次；</p>
          <p>4. 专用校车应当自注册登记之日起每6个月检验一次；</p>
          <p>5. 非专用校车应当自取得校车标牌后每6个月检验一次；</p>
          <p>6. 其他机动车每年检验1次；</p>
          <p>7.注册登记达到和超过6年的小型、微型非营运载客汽车每年检验1次；达到和超过15年的，每6个月检验1次。</p>
          <p>按照相关法律规定，在机动车检验有效期满前三个月内可向登记地车辆管理所申请机动车检验合格标志。如逾期未年检，将被记3分，并处相应罚款。</p>
        </div>
      </div>
      <div :class="['collapse-item', showCollapse == 2 ? 'active' : '']">
        <div class="title" @click="tapCollapse(2)">
          <span>申请条件</span>
          <img src="../assets/pages/InspectionInfo/arrow-down.png" class="arrow-down">
        </div>
        <div class="detail">
          <p>1. 机动车已达到检验有效期；</p>
          <p>2. 提供法律、法规、部门规章规定的证明凭证；</p>
          <p>3. 处理完毕机动车涉及的道路交通安全违法行为和交通事故。</p>
          <p>存在下列情形的不予核发机动车检验合格标志：</p>
          <p>1. 机动车号牌号码、行驶证、机动车交通事故责任强制保险凭证、车船税纳税或者免税证明、机动车安全技术检验合格证明上记载内容不一致的；</p>
          <p>2. 机动车存在未处理完毕的道路交通安全违法行为和交通事故的；</p>
          <p>3. 机动车非本市登记且没有机动车登记地公安机关委托检验的委托书。</p>
        </div>
      </div>
      <div :class="['collapse-item', showCollapse == 3 ? 'active' : '']">
        <div class="title" @click="tapCollapse(3)">
          <span>所需资料</span>
          <img src="../assets/pages/InspectionInfo/arrow-down.png" class="arrow-down">
        </div>
        <div class="detail">
          <p>1. 身份证；</p>
          <p>2. 《机动车牌证申请表》；</p>
          <p>3. 机动车行驶证；</p>
          <p>4. 机动车交通事故责任强制保险凭证；</p>
          <p>5. 机动车安全技术检验机构出具的机动车安全技术检验合格证明（免检车除外）；</p>
          <p>6. 机动车查验记录表（免检车除外）；</p>
          <p>7. 车船税纳税或者免税证明。</p>
        </div>
      </div>
      <div :class="['collapse-item', showCollapse == 4 ? 'active' : '']">
        <div class="title" @click="tapCollapse(4)">
          <span>办理地点</span>
          <img src="../assets/pages/InspectionInfo/arrow-down.png" class="arrow-down">
        </div>
        <div class="detail">
          <p>1. 对符合机动车国家安全技术标准的机动车，在检验该机动车的检测场申请办理机动车检验合格标志。</p>
          <p>2. 注册登记6年以内的非营运轿车和其他小型、微型载客汽车（面包车、7坐及7坐以上车辆除外）按规定期限到登记地车辆管理所申请机动车检验合格标志。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigatorBar from '@/components/NavigatorBar/NavigatorBar'
  export default {
    name: "inspection-info",
    data() {
      return {
        panelColor: '#45A4F7',
        remainingDay: 373,
        otherDesc: '办理',
        switchActive: true,
        showCollapse: 0,
      }
    },
    components: {
      NavigatorBar
    },
    mounted() {
      /* 返回顶部 */
      window.scrollTo(0, 0)
      if(this.$route.query.type == 2){
        this.panelColor = '#FBCB61'
        this.remainingDay = 12
        this.otherDesc = '至检验机构完成安全技术检验'
      }
    },
    methods: {
      tapSwitch() {
        this.switchActive = !this.switchActive
      },
      tapCollapse(num){
        if(num == this.showCollapse){
          this.showCollapse = 0
        } else {
          this.showCollapse = num
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .inspection-info {
    margin-top: 44px;
    .inspection-panel {
      padding: 30px;
      color: #fff;
      text-align: center;
      .info {
        font-size: 13px;
        line-height: 13px;
        margin-bottom: 20px;
      }
      .num {
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 30px;
        em {
          font-style: normal;
          font-size: 15px;
          line-height: 15px;
          margin-left: 5px;
        }
      }
      .desc {
        font-size: 11px;
      }
    }
    .reminding-switch {
      background: #fff;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .info {
        .title {
          font-size: 13px;
          line-height: 13px;
          color: #333;
          margin-bottom: 10px;
        }
        .desc {
          font-size: 11px;
          line-height: 11px;
          color: #666;
        }
      }
      .choose-btn {
        box-shadow: #ccc 0 0 0 1px;
        width: 40px;
        height: 20px;
        border-radius: 20px;
        position: relative;
        background-color: #bdbdbd;
        overflow: hidden;
        float: right;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          background-color: #fff;
          z-index: 20;
          transition: all 0.5s;
        }
        &.active {
          background-color: #45A4F7;
          &:before {
            left: 20px;
          }
        }
      }
    }
    .collapse {
      padding-left: 15px;
      background: #fff;
      .collapse-item {
        .title {
          font-size: 13px;
          line-height: 48px;
          border-bottom: 1px solid #dbdbdb;
          position: relative;
          .arrow-down {
            width: 12px;
            height: 7px;
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -3px;
            transition: 300ms;
          }
        }
        .detail {
          padding: 0 15px 0 0;
          height: 0;
          overflow: hidden;
          transition: 300ms;
          border-bottom: 1px solid #dbdbdb;
          margin-top: -1px;
          p {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 5px;
            color: #666666
          }
        }
        &.active {
          .title {
            .arrow-down {
              transform: rotate(180deg);
            }
          }
          .detail {
            padding-top: 10px;
            padding-bottom: 10px;
            height: auto;
          }
        }
        &:last-child {
          .title {
            border-bottom: 0;
          }
          &.active {
            .title {
              border-bottom: 1px solid #dbdbdb;
            }
          }
          .detail {
            border-bottom: 0;
          }
        }
      }
    }
  }

</style>

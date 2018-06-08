import Vue from 'vue'
import Router from 'vue-router'

/* add all component */
import MenuSelect from '@/pages/MenuSelect'
import Index from '@/pages/menu-select/Index'
import Study from '@/pages/menu-select/Study'
import Find from '@/pages/menu-select/Find'
import Home from '@/pages/menu-select/Home'
import CreditDetail from '@/pages/CreditDetail'
import CreditUp from '@/pages/CreditUp'
import CreditKnow from '@/pages/CreditKnow'
import Identity from '@/pages/credit-type/Identity'
import LawAbiding from '@/pages/credit-type/LawAbiding'
import Appointment from '@/pages/credit-type/Appointment'
import Learn from '@/pages/credit-type/Learn'
import Conduct from '@/pages/credit-type/Conduct'
import EndorsementsDetail from '@/pages/EndorsementsDetail'
import EndorsementsEmpty from '@/pages/EndorsementsEmpty'
import EndorsementsMore from '@/pages/EndorsementsMore'
import EditCar from '@/pages/EditCar'
import ManagerIndex from '@/pages/ManagerIndex'
import InspectionInfo from '@/pages/InspectionInfo'
import InsuranceInfo from '@/pages/InsuranceInfo'
import InspectionAdd from '@/pages/InspectionAdd'
import InsuranceAdd from '@/pages/InsuranceAdd'
import MyInsurance from '@/pages/MyInsurance'
import RecommendStudy from '@/pages/menu-select/study-type/RecommendStudy'
import SafeStudy from '@/pages/menu-select/study-type/SafeStudy'
import lawStudy from '@/pages/menu-select/study-type/lawStudy'
import LicenseStudy from '@/pages/menu-select/study-type/LicenseStudy'
import ClassSimple from '@/pages/ClassSimple'
import ClassGroup from '@/pages/ClassGroup'
import ClassQuestion from '@/pages/ClassQuestion'
import LicenseEdit from '@/pages/LicenseEdit'
import LicenseInfo from '@/pages/LicenseInfo'
import LicenseAuth from '@/pages/LicenseAuth'
import AuthStep1 from '@/pages/auth-steps/AuthStep1'
import AuthStep2 from '@/pages/auth-steps/AuthStep2'
import LicenseQrcode from '@/pages/LicenseQrcode'
import LicenseDetail from '@/pages/LicenseDetail'
import Headline from '@/pages/menu-select/find-type/Headline'
import Follow from '@/pages/menu-select/find-type/Follow'
import Community from '@/pages/menu-select/find-type/Community'
import Activity from '@/pages/menu-select/find-type/Activity'
import Lighthouse from '@/pages/menu-select/find-type/Lighthouse'
import HeadlineGroup1 from '@/pages/menu-select/find-type/headline-group/HeadlineGroup1'
import HeadlineGroup2 from '@/pages/menu-select/find-type/headline-group/HeadlineGroup2'
import HeadlineGroup3 from '@/pages/menu-select/find-type/headline-group/HeadlineGroup3'
import HeadlineGroup4 from '@/pages/menu-select/find-type/headline-group/HeadlineGroup4'
import HeadlineGroup5 from '@/pages/menu-select/find-type/headline-group/HeadlineGroup5'
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail'
import DrivingEvaluation from '@/pages/DrivingEvaluation'
import DrivingList from '@/pages/DrivingList'
import _404 from '@/pages/404'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Router.prototype.backTo = function($router, path) {
  this.isBack = true
  $router.push(path)
}

Router.prototype.goBackLength = function(length = 1){
  this.isBack = true
  window.history.go(-length)
}

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '重定向首页', redirect: '/index' },
    { path: '/menuselect', name: '含Menu的所有页面', component: MenuSelect, children: [
        { path: '/index', name: '首页', component: Index },
        { path: '/study', name: '学习', redirect: '/study/recommend', component: Study, children: [
            { path: '/study/recommend', name: '推荐学习', component: RecommendStudy },
            { path: '/study/safe', name: '安全驾驶', component: SafeStudy },
            { path: '/study/law', name: '交通法规', component: lawStudy },
            { path: '/study/license', name: '驾照考证', component: LicenseStudy },
          ]
        },
        { path: '/find', name: '发现', component: Find, redirect: '/find/headline', children: [
            { path: '/find/headline', name: '头条', component: Headline, redirect: '/find/headline/group1', children: [
                { path: '/find/headline/group1', name: '推荐阅读', component: HeadlineGroup1},
                { path: '/find/headline/group2', name: '驾驶技巧', component: HeadlineGroup2},
                { path: '/find/headline/group3', name: '事故警示', component: HeadlineGroup3},
                { path: '/find/headline/group4', name: '行车趣闻', component: HeadlineGroup4},
                { path: '/find/headline/group5', name: '养车技巧', component: HeadlineGroup5},
              ]
            },
            { path: '/find/follow', name: '关注', component: Follow},
            { path: '/find/community', name: '圈子', component: Community},
            { path: '/find/activity', name: '活动', component: Activity},
            { path: '/find/lighthouse', name: '曝光台', component: Lighthouse},
          ]
        },
        { path: '/home', name: '我的', component: Home }
      ]
    },
    { path: '/creditDetail', name: '信用信息', component: CreditDetail},
    { path: '/creditKnow', name: '了解分数', redirect: './creditKnow/identity', component: CreditKnow, children: [
        { path: '/creditKnow/identity', name: '身份信息', component: Identity },
        { path: '/creditKnow/lawAbiding', name: '守法信息', component: LawAbiding },
        { path: '/creditKnow/appointment', name: '履约信息', component: Appointment },
        { path: '/creditKnow/learn', name: '学习信息', component: Learn },
        { path: '/creditKnow/conduct', name: '行为信息', component: Conduct }
      ]
    },
    { path: '/creditUp', name: '提升分数', component: CreditUp},
    { path: '/endorsement_detail', name: '违章查询结果', component: EndorsementsDetail},
    { path: '/endorsement_empty', name: '违章查询结果(空)', component: EndorsementsEmpty},
    { path: '/endorsement_more', name: '更多内容', component: EndorsementsMore},
    { path: '/edit_car', name: '编辑车辆', component: EditCar},
    { path: '/manager', name: '车辆管家首页', component: ManagerIndex},
    { path: '/inspection', name: '年检信息', component: InspectionInfo},
    { path: '/insurance', name: '保险提醒', component: InsuranceInfo},
    { path: '/addInspection', name: '开通年检提醒', component: InspectionAdd},
    { path: '/addInsurance', name: '添加保险提醒', component: InsuranceAdd},
    { path: '/myInsurance', name: '我的保单', component: MyInsurance},
    { path: '/class_simple', name: '单个课程', component: ClassSimple},
    { path: '/class_group', name: '课程组', component: ClassGroup},
    { path: '/class_question', name: '课程问题', component: ClassQuestion},
    { path: '/license_edit', name: '编辑驾照', component: LicenseEdit},
    { path: '/license_info', name: '驾照信息', component: LicenseInfo},
    { path: '/license_auth', name: '申请认证', redirect: '/license_auth/step1', component: LicenseAuth, children: [
        {path: '/license_auth/step1', name: '认证身份证', component: AuthStep1},
        {path: '/license_auth/step2', name: '认证人脸', component: AuthStep2},
      ]
    },
    { path: '/license_qrcode', name: '驾照二维码', component: LicenseQrcode},
    { path: '/license_detail', name: '驾照详情', component: LicenseDetail},
    { path: '/article_detail/:aid', name: '文章详情', component: ArticleDetail},
    { path: '/driving_evaluation', name: '驾驶评测', component: DrivingEvaluation},
    { path: '/driving_list', name: '我的行程', component: DrivingList},
    { path: '/404', name: '404页面', component: _404},
    { path: '*', redirect: '/404' }
  ]
})


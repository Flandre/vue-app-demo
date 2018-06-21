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
import ExitStudy from '@/pages/menu-select/study-type/ExitStudy'
import ChildStudy from '@/pages/menu-select/study-type/ChildStudy'
import ClassSimple from '@/pages/ClassSimple'
import ClassGroup from '@/pages/ClassGroup'
import ClassQuestion from '@/pages/ClassQuestion'
import ClassQuestion1 from '@/pages/ClassQuestion1'
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
import DrivingDetail from '@/pages/DrivingDetail'
import DrivingQuestion from '@/pages/DrivingQuestion'
import DrivingMap from '@/pages/DrivingMap'
import LicenseJZCF from '@/pages/LicenseJZCF'
import JzcfNow from '@/pages/jzcf-type/JzcfNow'
import JzcfHistory from '@/pages/jzcf-type/JzcfHistory'
import PayForfeit from '@/pages/PayForfeit'
import LicenseXfjl from '@/pages/LicenseXfjl'
import XfjlStudy from '@/pages/xfjl-type/XfjlStudy'
import XfjlCheck from '@/pages/xfjl-type/XfjlCheck'
import XfjlComplete from '@/pages/xfjl-type/XfjlComplete'
import ExposureEdit from '@/pages/ExposureEdit'
import ExposureDetail from '@/pages/ExposureDetail'
import MessageEdit from '@/pages/MessageEdit'
import CommunityDetail from '@/pages/CommunityDetail'
import StudyEntry from '@/pages/StudyEntry'
import StudyFull from '@/pages/StudyFull'
import StudyList from '@/pages/study-full/StudyList'
import StudyReport from '@/pages/study-full/StudyReport'
import StudyTest from '@/pages/StudyTest'
import WebView from '@/pages/WebView'
import AddFriend from '@/pages/AddFriend'
import AddPhone from '@/pages/AddPhone'
import MyFriends from '@/pages/MyFriends'
import NewFriends from '@/pages/NewFriends'
import MyQrcode from '@/pages/MyQrcode'
import SettingEntry from '@/pages/SettingEntry'
import UserInfo from '@/pages/UserInfo'
import ChangeInfo from '@/pages/ChangeInfo'
import ChangePassword from '@/pages/ChangePassword'
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
            { path: '/study/exit', name: '出境自驾', component: ExitStudy },
            { path: '/study/child', name: '儿童教育', component: ChildStudy },
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
    { path: '/class_question_1', name: '课程问题1', component: ClassQuestion1},
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
    { path: '/driving_detail', name: '行程详情', component: DrivingDetail},
    { path: '/driving_question', name: '评分说明', component: DrivingQuestion},
    { path: '/driving_map', name: '评分说明', component: DrivingMap},
    { path: '/license_jzcf', name: '驾照查分', component: LicenseJZCF, redirect: '/license_jzcf/now', children: [
        {path: '/license_jzcf/now', name: '当前记分周期', component: JzcfNow},
        {path: '/license_jzcf/history', name: '历史违法记录', component: JzcfHistory},
      ]
    },
    { path: '/404', name: '404页面', component: _404},
    { path: '/pay_forfeit', name: '缴纳罚款', component: PayForfeit},
    { path: '/license_xfjl', name: '销分记录', component: LicenseXfjl, redirect: '/license_xfjl/study', children: [
        {path: '/license_xfjl/study', name: '销分记录学习中', component: XfjlStudy},
        {path: '/license_xfjl/check', name: '销分记录待审核', component: XfjlCheck},
        {path: '/license_xfjl/complete', name: '销分记录已完成', component: XfjlComplete},
      ]
    },
    { path: '/exposure_edit', name: '违法曝光', component: ExposureEdit},
    { path: '/exposure_detail', name: '举报受理页面', component: ExposureDetail},
    { path: '/message_edit', name: '发布动态', component: MessageEdit},
    { path: '/community_detail', name: '关注详情', component: CommunityDetail},
    { path: '/study_entry', name: '学习入口', component: StudyEntry},
    { path: '/study_full', name: '满分学习', component: StudyFull, redirect: '/study_full/list', children: [
        { path: '/study_full/list', name: '课程列表', component: StudyList},
        { path: '/study_full/report', name: '成绩单', component: StudyReport}
      ]
    },
    { path: '/study_test', name: '申请考试成功页面', component: StudyTest},
    { path: '/web_view', name: '浏览web页面', component: WebView},
    { path: '/add_friend', name: '添加好友', component: AddFriend},
    { path: '/add_phone', name: '手机通讯录', component: AddPhone},
    { path: '/my_friends', name: '我的好友', component: MyFriends},
    { path: '/new_friends', name: '新的好友', component: NewFriends},
    { path: '/my_qrcode', name: '我的二维码', component: MyQrcode},
    { path: '/setting_entry', name: '我的二维码', component: SettingEntry},
    { path: '/user_info', name: '个人资料', component: UserInfo},
    { path: '/change_info', name: '修改信息', component: ChangeInfo},
    { path: '/change_password', name: '修改密码', component: ChangePassword},
    { path: '*', redirect: '/404' }
  ]
})


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
import ClassSimple from '@/pages/ClassSimple'
import ClassGroup from '@/pages/ClassGroup'
import ClassQuestion from '@/pages/ClassQuestion'
import LicenseEdit from '@/pages/LicenseEdit'
import LicenseInfo from '@/pages/LicenseInfo'
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
            { path: '/study/safe', name: '安全驾驶', component: SafeStudy }
          ]
        },
        { path: '/find', name: '发现', component: Find },
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
    { path: '/404', name: '404页面', component: _404},
    { path: '*', redirect: '/404' }
  ]
})


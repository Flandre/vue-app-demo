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
import _404 from '@/pages/404'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '重定向首页', redirect: '/index' },
    { path: '/menuselect', name: '含Menu的所有页面', component: MenuSelect, children: [
        { path: '/index', name: '首页', component: Index },
        { path: '/study', name: '学习', component: Study },
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
    { path: '/404', name: '404页面', component: _404},
    { path: '*', redirect: '/404' }
  ]
})


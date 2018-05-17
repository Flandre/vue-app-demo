import Vue from 'vue'
import Router from 'vue-router'

/* add all component */
import MenuSelect from '@/pages/MenuSelect'
import Index from '@/pages/menu-select/Index'
import Study from '@/pages/menu-select/Study'
import Find from '@/pages/menu-select/Find'
import Home from '@/pages/menu-select/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '重定向首页', redirect: './index' },
    { path: '/menuselect', name: '含Menu的所有页面', component: MenuSelect, children: [
        { path: '/index', name: '首页', component: Index },
        { path: '/study', name: '学习', component: Study },
        { path: '/find', name: '发现', component: Find },
        { path: '/home', name: '我的', component: Home }
      ]
    },
    { path: '*', redirect: '/404' }
  ]
})

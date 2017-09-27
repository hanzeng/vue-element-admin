import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

import AccountSummary from './views/nav1/accountSummary.vue'
import FundsManagement from './views/nav2/fundsManagement.vue'
import OrderManagement from './views/nav3/orderManagement.vue'
import UserManagement from './views/nav4/UserManagement.vue'
import Feedback from './views/nav5/Feedback.vue'
import HardwareB from './views/nav6/hardwareB.vue'
import HardwareU from './views/nav6/hardwareU.vue'
import LossManagement from './views/nav7/lossManagement.vue'
import DotGain from './views/nav8/dotGain.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    // =======================================================
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-bars',
        leaf: true,//只有一个节点
        children: [
            { path: '/accountSummary', component: AccountSummary, name: '信息总览' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-jpy',
        leaf: true,//只有一个节点
        children: [
            { path: '/fundsManagement', component: FundsManagement, name: '资金管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-file-text',
        leaf: true,//只有一个节点
        children: [
            { path: '/orderManagement', component: OrderManagement, name: '订单管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-user',
        leaf: true,//只有一个节点
        children: [
            { path: '/UserManagement', component: UserManagement, name: '用户管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-user-md',
        leaf: true,//只有一个节点
        children: [
            { path: '/Feedback', component: Feedback, name: '用户反馈' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '硬件管理',
        iconCls: 'fa fa-tasks',
        children: [
            { path: '/hardwareB', component: HardwareB, name: '伞柜' },
            { path: '/hardwareU', component: HardwareU, name: '雨伞' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-volume-down',
        leaf: true,//只有一个节点
        children: [
            { path: '/lossManagement', component: LossManagement, name: '报损管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-plus-square',
        leaf: true,//只有一个节点
        children: [
            { path: '/dotGain', component: DotGain, name: '网点投放' }
        ]
    },


    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
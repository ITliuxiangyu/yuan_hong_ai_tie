import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/chanpin_manager'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/user_setting',
                    component: resolve => require(['../components/page/my_content/User_setting.vue'], resolve),
                    meta: { title: '用户设置' }
                },
                {
                    path: '/user_money',
                    component: resolve => require(['../components/page/my_content/User_money.vue'], resolve),
                    meta: { title: '用户资金信息' }
                },
                {
                    path: '/delegate_setting',
                    component: resolve => require(['../components/page/my_content/Delegate_setting.vue'], resolve),
                    meta: { title: '代理设置' }
                },
                {
                    path: '/delegate_tree',
                    component: resolve => require(['../components/page/my_content/Delegate_tree.vue'], resolve),
                    meta: { title: '代理树状图' }
                },
                {
                    path: '/chanpin_manager',
                    component: resolve => require(['../components/page/my_content/Chanpin_manager.vue'], resolve),
                    meta: { title: '产品管理' }
                },
                {
                    path: '/delegate_list',
                    component: resolve => require(['../components/page/my_content/Delegate_list.vue'], resolve),
                    meta: { title: '代理列表' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})

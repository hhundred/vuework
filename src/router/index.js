import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);//使用VueRouter中间件
//创建VueRouter实例对象router
const router = new VueRouter({
    //配置路由表
    routes:[
        {
            path:"/",
            redirect:"/home",//重定向
            meta:{tabbar:true},
        },
        {
            path:"/login",
            name:'login',
            component:()=>import("../views/login"),
            meta:{tabbar:false},
        },
        {
            path:"/register",
            name:'register',
            component:()=>import("../views/register"),
            meta:{tabbar:false},
        },
        {
            path:"/home",
            name:'home',
            component:()=>import("../views/home"),
            meta:{tabbar:true},
        },
        {
            path:"/pro",
            name:'pro',
            component:()=>import("../views/pro"),
            meta:{tabbar:true},
        },
        {
            path:"/cart",
            name:'cart',
            component:()=>import("../views/cart"),
            meta:{tabbar:true},
        },
        {
            path:"/mine",
            name:'mine',
            component:()=>import("../views/mine"),
            meta:{tabbar:true},
        },
        {
            path:"/Collect",
            component:()=>import("../views/mine/Collect.vue"),
            meta:{tabbar:true},
        },
        {
            path:"/Address",
            name:'Address',
            component:()=>import("../views/mine/Address.vue"),
            meta:{tabbar:true},
        },
        {
            path:"/Appraise",
            name:'Appraise',
            component:()=>import("../views/mine/Appraise.vue"),
            meta:{tabbar:true},
        },
        {
            path:"/ChangeInfo",
            name:'ChangeInfo',
            component:()=>import("../views/mine/ChangeInfo.vue"),
            meta:{tabbar:true},
        },
    ],
    linkActiveClass:"active",//设置点击高亮class属性
})
//导出路由router
export default router;
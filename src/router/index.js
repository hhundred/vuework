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
            component:()=>import("../views/login"),
            meta:{tabbar:false},
        },
        {
            path:"/register",
            component:()=>import("../views/register"),
            meta:{tabbar:false},
        },
        {
            path:"/home",
            component:()=>import("../views/home"),
            meta:{tabbar:true},
        },
        {
            path:"/pro",
            component:()=>import("../views/pro"),
            meta:{tabbar:true},
        },
        {
            path:"/cart",
            component:()=>import("../views/cart"),
            meta:{tabbar:true},
        },
        {
            path:"/mine",
            component:()=>import("../views/mine"),
            meta:{tabbar:true},
        },
    ],
    linkActiveClass:"active",//设置点击高亮class属性
})
//导出路由router
export default router;
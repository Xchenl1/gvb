import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:"web",
      path:"/",
      // component:()=>import("@/views/web/index.vue"),
      redirect:"/admin"
    },{
      name:"login",
      path:"/login",
      // @ts-ignore
      component:()=>import("@/views/login/index.vue")
    },
    {
      name:"admin",
      path:"/admin",
      meta:{
        title:"首页",
      },
      component:()=>import("@/views/admin/index.vue"),
      children: [
        {
          name:"home",
          path:"",
          component:()=>import("@/views/admin/home/index.vue"),
          meta:{
            title:"个人中心",
          }
        },
        {
          name:"userCenter",
          path:"user_center",
          meta:{
            title:"个人中心",
          },
          children:[
            {
              name:"userInfo",
              path:"user_info",
              meta:{
                title:"用户信息",
              },
              component:()=>import("@/views/admin/user_center/index.vue"),
            }
          ]
        },
        {
          name:"userManage",
          path:"user_manage",
          meta:{
            title:"用户管理",
          },
          children:[
            {
              name:"userList",
              path:"user_list",
              meta:{
                title:"用户列表",
              },
              component:()=>import("@/views/admin/user_center/index.vue")
            }
          ]
        },
        {
          name:"settingManage",
          path:"settings_manage",
          meta:{
            title:"系统配置",
          },
          children:[
            {
              name:"settings",
              path:"settings",
              meta:{
                title:"系统信息",
              },
              component:()=>import("@/views/admin/user_center/index.vue"),
            }
          ]
        },
      ]
    }
  ]
})

export default router

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
      // @ts-ignore
      component:()=>import("@/views/admin/index.vue"),
      children: [
        {
          name:"home",
          path:"",
          component:()=>import("@/views/admin/home/index.vue")
        },
        {
          name:"userCenter",
          path:"user_center",
          children:[
            {
              name:"userInfo",
              path:"user_info",
              component:()=>import("@/views/admin/user_center/index.vue")
            }
          ]
        },
        {
          name:"userManage",
          path:"user_manage",
          children:[
            {
              name:"userList",
              path:"user_list",
              component:()=>import("@/views/admin/user_center/index.vue")
            }
          ]
        },
        {
          name:"settingManage",
          path:"settings_manage",
          children:[
            {
              name:"settings",
              path:"settings",
              component:()=>import("@/views/admin/user_center/index.vue")
            }
          ]
        },
      ]
    }
  ]
})

export default router

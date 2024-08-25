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
      component:()=>import("@/views/admin/index.vue")
    }
  ]
})

export default router

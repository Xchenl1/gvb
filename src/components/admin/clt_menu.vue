<template>
  <div class="clt_menu" :class="{collapsed:collapsed}">
      <div class="clt_menu_inner" scrollbar>
          <a-menu
              @menu-item-click="menuItemClick"
              v-model:collapsed="collapsed"
              v-model:open-keys="openKeys"
              :default-selected-keys="[route.name]"
              show-collapse-button>
              <template v-for="menu in menuList">
                  <a-menu-item :key="menu.name" v-if="!menu.children">
                      <template #icon>
                          <component :is="menu.icon"></component>
                      </template>
                      {{ menu.title }}

                  </a-menu-item>

                  <a-sub-menu :key="menu.name" v-else :title="menu.title">
                      <template #icon>
                          <clt_component :is="menu.icon"></clt_component>
                      </template>

                      <a-menu-item :key="sub.name" v-for="sub in menu.children">
                          <template #icon>
                              <component :is="sub.icon"></component>
                          </template>
                          {{ sub.title }}
                      </a-menu-item>

                  </a-sub-menu>
              </template>
          </a-menu>
      </div>
  </div>
</template>

<script setup lang="ts">
import type {Component} from "vue";
import {IconHome,IconUser,IconSettings} from "@arco-design/web-vue/es/icon";
import Clt_component from "@/components/common/clt_component.vue";
import {collapsed} from "@/components/admin/clt_menu";
import router from "@/router";
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()

interface MenuType{
    title: string
    name: string
    icon?: string | Component
    children?: MenuType[]
}


const menuList : MenuType[] = [
    {title:"首页",name:"admin",icon:IconHome},
    {title:"个人中心",name:"userCenter",icon:IconUser,children:[
            {title:"用户信息",name:"userInfo",icon:"icon-yonghuxinxi"}
        ]},
    {title:"用户管理",name:"userManage",icon:"icon-yonghuguanli",children:[
            {title:"用户列表",name:"userList",icon:"icon-yonghuliebiao"}
        ]},
    {title:"系统设置",name:"settingsManage",icon:IconSettings,children:[
            {title:"系统信息",name:"settings",icon:"icon-xitongxinxi"}
        ]},
]

function menuItemClick(key:string){
   router.push({
       name: key
   })
}

const openKeys =ref<string[]>([])

function initRoute(){
    if (route.matched.length===3){
        openKeys.value=[route.matched[1].name as string]
    }
}

initRoute()
</script>

<style lang="less">
    .clt_menu{
        height: calc(100vh - 90px);
        position: relative;

        &.collapsed{
            .arco-menu-collapse-button{
                left: 48px!important;
            }
        }

        &:hover{
            .arco-menu-collapse-button{
                opacity: 1 !important;
            }
        }

        .clt_menu_inner{
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;

            .arco-menu{
                position: inherit;

                .arco-menu-collapse-button{
                    top: 50%;
                    transform: translate(-50%,-50%);
                    left: 240px;
                    transition: all .3s;
                    opacity: 0;
                }
            }
        }
    }
</style>
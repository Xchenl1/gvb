<script setup lang="ts">
import Clt_theme from "@/components/common/clt_theme.vue";
import {theme} from "@/components/common/clt_theme";
import Clt_screen from "@/components/common/clt_screen.vue";
import Clt_menu from "@/components/admin/clt_menu.vue";
import {collapsed} from "@/components/admin/clt_menu";
import Ctl_Breadcrumb from "@/components/admin/ctl_Breadcrumb.vue";
import Clt_user_dropdown from "@/components/common/clt_user_dropdown.vue";
import router from "@/router";
import Clt_tabs from "@/components/admin/clt_tabs.vue";
import Clt_logo from "@/components/admin/clt_logo.vue";

function goHome(){
    router.push({name:"web"})
}
</script>

<template>
<div class="clt_admin">
  <div class="clt_aside" :class="{collapsed:collapsed}">
      <clt_logo></clt_logo>
    <clt_menu></clt_menu>
  </div>
  <div class="clt_main">
      <div class="clt_head">
          <ctl_-breadcrumb></ctl_-breadcrumb>
          <div class="clt_actions">
              <span title="去首页" @click=goHome><icon-home/></span>
              <clt_theme></clt_theme>
              <clt_screen></clt_screen>
              <clt_user_dropdown></clt_user_dropdown>
              <div class="clt_info_action"></div>
          </div>
      </div>
      <clt_tabs></clt_tabs>
      <div class="clt_container scrollbar">
          <router-view class="clt_base_view" v-slot="{Component}">
              <transition name="fade" mode="out-in">
                  <component is="Component"></component>
              </transition>
          </router-view>
      </div>
  </div>
</div>
</template>


<style lang="less">

.clt_admin {
    display: flex;
    background-color: var(--color-bg-1);
    color: @color-text-1;

    .clt_aside {
        width: 240px;
        height: 100vb;
        border-right: @clt_border;
        transition: width .3s;

        .clt_logo {
            width: 100%;
            height: 90px;
        }

        &.collapsed{
          width: 48px;

          &~.clt_main{
            width: calc(100% - 48px);
          }
        }
    }

    .clt_main {
        width: calc(100% - 240px);
        transition: width .3s;

        .clt_head {
            width: 100%;
            height: 60px;
            border-bottom:  @clt_border;
            display: flex;
            justify-content: space-between;
            align-items: center;

          .clt_actions{
            display: flex;
            align-items: center;

            svg{
              font-size: 10px;
              cursor: pointer;
              margin-right: 10px;
            }
          }
        }

        .clt_tabs {
            width: 100%;
            height: 30px;
            border-bottom:  @clt_border;
        }

        .clt_container {
            width: 100%;
            height: calc(100vh - 90px);
            overflow-y: auto;
            overflow-x: hidden;
            background-color: @color-fill-2;
            padding: 20px;

          .clt_base_view{
            background-color: var(--color-bg-1);
            border-radius: 5px;
          }
        }
    }
}

// 组件刚开始离开
.fade-leave-active{

}

// 组件离开结束
.fade-leave-to{
    transform: translateX(30px);
    opacity: 0;
}

// 组件刚开始进入
.fade-enter-active{
  transform: translateX(-30px);
  opacity: 0;
}

// 组件进入完成
.fade-enter-to{
  transform: translateX(0);
  opacity: 1;
}

.fade-leave-active .fade-enter-active{
    transition: all .3s ease-out;
}

</style>

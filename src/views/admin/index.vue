<script setup lang="ts">

import Clt_theme from "@/components/common/clt_theme.vue";
</script>

<template>
<div class="clt_admin">
  <div class="clt_aside">
      <div class="clt_logo"></div>
      <div class="clt_menu"></div>
  </div>
  <div class="clt_main">
      <div class="clt_head">
          <div class="clt_breadcrumbs"></div>
          <div class="clt_actions">
              <icon-home />
              <clt_theme></clt_theme>
              <icon-fullscreen />
              <icon-fullscreen-exit />
              <div class="clt_info_action"></div>
          </div>
      </div>
      <div class="clt_tabs"></div>
      <div class="clt_container">
          <router-view >
              <button>按钮</button>
          </router-view>
      </div>
  </div>
</div>
</template>


<style lang="less">

.clt_admin {
    display: flex;
    background-color: @color-fill-1;
    color: @color-text-1;

    .clt_aside {
        width: 240px;
        height: 100vb;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: @clt_border;

        .clt_logo {
            width: 100%;
            height: 90px;
        }
    }

.clt_main {
    width: calc(100% - 240px);

    .clt_head {
        width: 100%;
        height: 60px;
        border-bottom:  @clt_border;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
}
}

</style>

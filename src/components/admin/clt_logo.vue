<template>
  <div class="clt_logo" :class="{collapsed:collapsed}">
      <img src="https://www.keaitupian.cn/cjpic/frombd/0/253/3655621348/1444233956.jpg" class="logo" alt="logo">
      <div class="slogan">
          <div>努力小陈</div>
          <div>nulixiaochen</div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {collapsed} from "@/components/admin/clt_menu";



</script>

<style lang="less">
  .clt_logo{
    display: flex;
    justify-content: center;
    align-items: center;

    &.collapsed{
      .slogan {
        transform: scale(0);
        transform-origin: left;
      }
      .logo{
        transform: translateX(42px);
        width: 40px;
        height: 40px;
      }
    }

    .logo{
      width: 40px;
      height: 40px;
      transition: all .3s;
    }
    .slogan{
      margin-left: 10px;
      transition: all .3s;

      div:nth-child(1){
        font-size: 22px;
        font-weight: 600;
      }

      div:nth-child(2){
        font-size: 12px;
        margin-top: 1px;
      }
    }
  }
</style>
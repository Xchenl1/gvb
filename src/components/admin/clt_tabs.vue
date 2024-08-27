<template>
  <div class="clt_tabs">
      <div class="swiper">
          <div class="item" @click="check(item)" @mousedown.middle.stop="removeItem(item)" :class="{active:route.name === item.name}" v-for="item in tabs">
              {{ item.title }}
              <span class="close" @click.stop="removeItem(item)" title="删除" v-if="item.name !== 'home'">
              <IconClose></IconClose>
          </span>
          </div>
      </div>
      <div class="item" @click="removeAllItem">
        删除全部
      </div>
  </div>
</template>

<script setup lang="ts">
import {IconClose} from "@arco-design/web-vue/es/icon"
import {useRoute} from "vue-router";
import router from "@/router";
import {ref} from "vue";

const route=useRoute()

interface TabType{
    name:string
    title:string
}

const tabs = ref<TabType[]>([
    {title:"首页",name:"home"},
    {title:"个人信息",name:"userInfo"},
    {title:"用户列表",name:"userList"},
    {title:"系统信息",name:"settings"},
])


function check(item:TabType){
    router.push({
        name:item.name
    })
    saveTabs()
}


function saveTabs(){
    localStorage.setItem("clt_tabs",JSON.stringify(tabs.value))
}

function removeItem(item:TabType){
    if (item.name==="home"){
        return
    }
  const index=tabs.value.findIndex((value)=>item.name === value.name)
    if (index !== -1){
        //判断删除的这个元素是不是我当前所在
        if (item.name === route.name){
            //首页100%不会被删除，放心删除
            router.push({
                name:tabs.value[index-1].name
            })
        }
        tabs.value.splice(index,1)
    }
    saveTabs()
}

function removeAllItem(item:TabType){
  tabs.value=[
      {title:"首页",name:"home"},
  ]
    router.push({
        name:"home"
    })
    saveTabs()
}


function loadTabs(){
    const clt_tabs=localStorage.getItem("clt_tabs")
    if (clt_tabs){
        try {
           tabs.value=JSON.parse(clt_tabs)
        }catch(e){
            console.log(e)
        }
    }
}

loadTabs()
</script>

<style lang="less">
.clt_tabs{
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  .swiper{
    display: flex;
  }

  .item{
    padding: 3px 8px;
    background: var(--color-bg-1);
    border: @clt_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;

    &:hover{
      background-color: var(--color-fill-1);
    }

    &.active{
      background-color: @primary-6;
      color: white;
    }
  }
}

</style>
<template>
  <div class="clt_tabs">

      <swiper class="clt_tabs_swiper" slides-per-view="slideCount">
          <swiper-slide v-for="item in tabs" :class="{active:route.name === item.name}" >
              <div class="item" @click="check(item)" @mousedown.middle.stop="removeItem(item)"
                   :class="{active:route.name === item.name}" >
                  {{ item.title }}
                  <span class="close" @click.stop="removeItem(item)" title="删除" v-if="item.name !== 'home'">
              <IconClose></IconClose>
          </span>
              </div>
          </swiper-slide>
      </swiper>

      <div class="item" @click="removeAllItem">
        删除全部
      </div>
  </div>
</template>

<script setup lang="ts">
import {IconClose} from "@arco-design/web-vue/es/icon"
import {useRoute} from "vue-router";
import router from "@/router";
import {onMounted, ref, watch} from "vue";
import {Swiper,SwiperSlide} from "swiper/vue";

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

// loadTabs()
watch(()=>route.name,()=>{
    //判断当前路由名称在不在tabs里如果不在加入进去
    const index=tabs.value.findIndex((value)=>route.name === value.name)
    if (index === -1) {
        tabs.value.push({
            name:route.name as string,
            title:route.meta.title,
        })
    }
},{immediate:true})

const slideCount = ref(100)
onMounted(()=>{
    // 显示总宽度
    const swiperDom =document.querySelector(".clt_tabs_swiper")
    const swiperwidth = swiperDom.clientWidth
    // 实际总宽度
    const wrapperDom = document.querySelector(".clt_tabs_swiper") as HTMLDivElement
    const wrapperwidth = wrapperDom.scrollWidth

    if (swiperwidth>wrapperwidth){
        return
    }
    // 如果实际总宽度大于显示总宽度
    // 遍历swiper-slide,从前往后加

    const slideList=document.querySelectorAll(".clt_tabs_swiper .swiper-slide")
    let allwidth = 0
    let index = 1


    for (const slideListElement of slideList) {
        allwidth += (slideListElement.clientWidth+20)
        index++
        if (allwidth >= swiperwidth){
            break
        }
    }

    slideCount.value = index

    // 选中高亮的元素
   const activeSlide = document.querySelector(".clt_tabs_swiper .swiper-slide.active") as HTMLDivElement
  if (activeSlide.offsetLeft > swiperwidth){
      const offsetLeft = swiperwidth - activeSlide.offsetLeft

      setTimeout(()=>{
          wrapperDom.style.transform =  'translate3d(${offsetLeft}px, 0px ,0px)'
          console.log(offsetLeft)
      },1000)
  }

})
</script>

<style lang="less">
.clt_tabs{
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  .swiper{
    width: calc(100% - 100px);
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;

    .swiper-wrapper{
      display: flex;
      align-items: center;

      .swiper-slide{
        width: fit-content !important;
        flex-shrink: 0;
      }
    }
  }

  .item{
    padding: 3px 8px;
    background: var(--color-bg-1);
    border: @clt_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    flex-shrink: 0;

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
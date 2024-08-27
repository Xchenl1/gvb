<template>
    <a-dropdown @select="handleSelect" :popup-max-height="false">
        <div class="clt_user_dropdown">
            <a-avatar :size="35"
                image-url="https://pic.netbian.com/tupian/35033.html"></a-avatar>
            <span class="user_name">努力小陈</span>
            <icon-down/>
        </div>
        <template #content>
            <a-doption v-for="item in options" :value="item.name">{{ item.title }}</a-doption>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import router from "@/router";

function handleSelect(val:string){
    if (val==="logout"){
        return
    }
    router.push({name:val})
}

interface OptionType{
    name:string
    title:string
}

const options: OptionType[] = [
    {title:"个人信息",name:"userInfo"},
    {title:"用户列表",name:"userList"},
    {title:"系统配置",name:"settings"},
    {title:"注销退出",name:"logout"},
]


</script>

<style lang="less">
.clt_user_dropdown{
    cursor: pointer;
    .user_name{
        margin: 0 5px;
    }
    svg{
        margin-right: 0 !important;
    }
}

</style>
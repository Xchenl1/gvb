<template>
    <a-dropdown @select="handleSelect" :popup-max-height="false">
        <div class="clt_user_dropdown">
            <a-avatar :size="35"
                image-url="https://pic.netbian.com/tupian/35033.html"></a-avatar>
            <span class="user_name">努力小陈</span>
            <icon-down/>
        </div>
        <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption disabled>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
            <a-doption>Option 4</a-doption>
            <a-doption>Option 5</a-doption>
            <a-doption>Option 6</a-doption>
            <a-doption>Option 7</a-doption>
            <a-doption>Option 8</a-doption>
            <a-doption>Option 9</a-doption>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
function handleSelect(val:string){

}
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
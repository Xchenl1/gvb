<script setup lang="ts">

import {ref} from "vue";
// 记录全屏状态
const isFullScreen = ref(false)

// 全屏
function fullScreen(){
    document.documentElement?.requestFullscreen()
    isFullScreen.value =true
}
// 退出全屏
function exitScreen(){
    document?.exitFullscreen()
    isFullScreen.value =false
}
</script>

<template>
    <icon-fullscreen v-if="!isFullScreen" @click="fullScreen()"/>
    <icon-fullscreen-exit title="退出全屏" v-else @click="exitScreen()"/>
</template>

<style scoped>
</style>
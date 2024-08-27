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
    <span title="全屏" v-if="!isFullScreen" ><icon-fullscreen @click="fullScreen()"/></span>
    <span title="退出全屏" v-else ><icon-fullscreen-exit @click="exitScreen()"/></span>
</template>

<style scoped>
</style>
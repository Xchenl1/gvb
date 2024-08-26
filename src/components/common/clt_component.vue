
<script setup lang="ts">
import type {Component} from "vue";

interface Props{
    is?:string|Component
}

const props =defineProps<Props>()

</script>

<template>
    <component v-if="typeof props.is ==='object'" :is="props.is"></component>
    <i :class="props.is" v-else></i>
</template>

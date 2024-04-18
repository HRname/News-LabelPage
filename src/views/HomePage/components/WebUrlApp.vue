<script setup>
import { defineProps, ref } from 'vue'
import { useSettingStore } from '@/stores/settingStore'
    defineProps({
        webUrlApp: {
            type:Object,
            default: ()=>{}
        }
    })
    const settingStore = useSettingStore()
</script>

<template>
    <a :href="webUrlApp.url" target="_blank" :style="{ opacity:settingStore.settingList[1].webAppOpacity }">
        <img :src="webUrlApp.domainNameImg" alt="" :style="{height:settingStore.settingList[1].webAppSize+'px', width:settingStore.settingList[1].webAppSize+'px', borderRadius:settingStore.settingList[1].webAppBorderRadius+'%'}">
        <span :style="{fontSize:settingStore.settingList[1].webAppFontSize+'px'}">{{ webUrlApp.webName }}</span>
    </a>
</template>

<style scoped>
img{
    height: 55px;
    width: 55px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid black;
}
span{
    width: 100%;
    flex-shrink: 1;
    display: block;
}
a{
    width: 100px;
    display: inline-block;
    text-decoration: none;
    color:white;
    text-align: center;
    user-select: none;
    font-size: 12px;
}
</style>
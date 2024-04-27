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
        <span class="bgc" :style="{backgroundColor: webUrlApp.bgcColor,height:settingStore.settingList[1].webAppSize+2+'px', width:settingStore.settingList[1].webAppSize+2+'px', borderRadius:settingStore.settingList[1].webAppBorderRadius+'%'}"></span>
        <img :src="webUrlApp.domainNameImg" alt="" :style="{ height:settingStore.settingList[1].webAppSize+'px', width:settingStore.settingList[1].webAppSize+'px', borderRadius:settingStore.settingList[1].webAppBorderRadius+'%'}">
        <span :style="{fontSize:settingStore.settingList[1].webAppFontSize+'px'}">{{ webUrlApp.webName }}</span>
    </a>
</template>

<style scoped>
.bgc{
    display: block;
    position: absolute;
    top: 0;
    left: 21.5px;
    z-index: -100;
}
img{
    height: 55px;
    width: 55px;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    border: 1px solid black;
    image-rendering: -webkit-optimize-contrast;
    z-index: 10;
}
span{
    width: 100%;
    flex-shrink: 1;
    display: block;
}
a{
    position: relative;
    width: 100px;
    display: inline-block;
    text-decoration: none;
    color:white;
    text-align: center;
    user-select: none;
    font-size: 12px;
    background-image: none;
}
</style>
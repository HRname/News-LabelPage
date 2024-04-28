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
    <a :href="webUrlApp.url" target="_blank" :style="{ opacity:settingStore.webAppSetting.webAppOpacity }">
        <div class="bgcApp" :style="{ height:settingStore.webAppSetting.webAppSize+'px', width:settingStore.webAppSetting.webAppSize+'px'}">
            <span class="bgc" :style="{backgroundColor: webUrlApp.bgcColor,height:settingStore.bgcSize+'px', width:settingStore.bgcSize+'px', borderRadius:settingStore.webAppSetting.webAppBorderRadius+'%'}"></span>
            <img :src="webUrlApp.domainNameImg" alt="" :style="{ height:settingStore.webAppSetting.webAppSize+'px', width:settingStore.webAppSetting.webAppSize+'px', borderRadius:settingStore.webAppSetting.webAppBorderRadius+'%'}">
        </div>
        <span class="webname" :style="{fontSize:settingStore.webAppSetting.webAppFontSize+'px'}">{{ webUrlApp.webName }}</span>
    </a>
</template>

<style scoped>
.bgc{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
}
.bgcApp{
    position: relative;
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
.webname{
    display: block;
    height: 30px;
    line-height: 30px;
}
a{
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color:white;
    text-align: center;
    user-select: none;
    font-size: 12px;
    background-image: none;
}
</style>
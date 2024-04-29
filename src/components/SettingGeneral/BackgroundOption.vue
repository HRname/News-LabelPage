<script setup>
import { useSettingStore } from '@/stores/settingStore';
import ModifyBackground from '@/components/SettingGeneral/ModifyBackground.vue';
import BackgroundSelect from '@/components/SettingGeneral/BackgroundSelect.vue';
import { ref } from 'vue';

const settingStore = useSettingStore();
const enterStyle = ref(false);
</script>

<template>
    <div class="backgroundOption" v-show="settingStore.closeBackgroundOption">
        <div class="backgroundNav">
            <span @click="settingStore.activeModifyBackground" :class="{ activeSpan: settingStore.modifyBackground }">自定义背景</span>
            <span @click="settingStore.activeSelectBackground" :class="{ activeSpan: settingStore.selectBackground}">选择背景</span>
        </div>
        <span class="lineBetween"></span>
        <div class="backgroundBody">
            <ModifyBackground></ModifyBackground>
            <BackgroundSelect></BackgroundSelect>
        </div>
        <span class="close" @click="settingStore.switchBackgroundOption" :class="{ enterStyle: enterStyle}" @mouseover="enterStyle = true" @mouseout="enterStyle = false">
            ×
        </span>
    </div>
    <!-- 打开背景设置选项卡时遮挡窗口 -->
    <div class="placeholder" v-show="settingStore.closeBackgroundOption"></div>
</template>

<style scoped>
.placeholder {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(28,28,30);
    opacity: 0.5;
    z-index: 100;
}
.backgroundOption {
    position: absolute;
    top: 40%;
    left: 50%;
    height: 500px;
    width: 1000px;
    background-color: black;
    border-radius: 10px;
    transform: translate(-50%, -40%);
    z-index: 101;
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
}
.backgroundNav {
    display: flex;
    height: 200px;
    width: 200px;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.backgroundNav span {
    display: block;
    width: 160px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
    background-color: rgb(28,28,30,0.8);
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
}
.lineBetween{
    width: 2px;
    height: 100%;
    background-color: #fff;
}
.activeSpan {
    color: rgb(77, 170, 252);
}

.close{
    position: absolute;
    display: block;
    color: #fff;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-family: "宋体";
    font-size: 20px;
    right: 0;
    top: 0;
    border-top-right-radius: 10px;
    user-select: none;
    cursor: pointer;
}

.enterStyle{
    background-color: rgb(77, 170, 252,0.2);
}
</style>
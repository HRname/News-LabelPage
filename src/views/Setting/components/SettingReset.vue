<script setup>
import { useSettingStore } from '@/stores/settingStore';
import { ref } from 'vue';

const settingStore = useSettingStore();

const defaultColor = ref(true)
const warningColor = ref(false)
const enterDefaultColor = () => {
    defaultColor.value = true;
    warningColor.value = false;
}
const enterWarningColor = () => {
    defaultColor.value = false;
    warningColor.value = true;
}
</script>

<template>
    <div class="settingReset" v-show="settingStore.optionList[7].isSelect">
        <div class="resetHeader">
            <span>重置样式设置</span>
        </div>
        <div class="resetBody">
            <button @click="settingStore.resetSearchSetting()" :class="{ defaultColor:true }">重置搜索框设置</button>
            <button @click="settingStore.resetWebAppSetting()" :class="{ defaultColor:true }">重置网站图标区设置</button>
            <button @click="settingStore.resetTimeSetting()" :class="{ defaultColor:true }">重置时间设置</button>
            <button @click="settingStore.resetNavSetting()" :class="{ defaultColor:true }">重置左侧导航栏设置</button>
            <button @click="settingStore.resetAllSetting()" @mouseover="enterWarningColor" @mouseout="enterDefaultColor" :class="{ defaultColor:defaultColor, warningColor:warningColor }">重置所有设置</button>
        </div>
    </div>
</template>

<style scoped>
.settingReset {
    height: 100%;
    width: 350px;
}
.resetHeader {
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.resetHeader span {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}
button{
    width:300px;
    height: 50px;
    text-align:left;
    border-radius: 10px;
    border: none;
    background-color: black;
    user-select: none;
    letter-spacing: 5px;
    cursor: pointer;
}
.resetBody {
    height: 400px;
    width: 330px;
    margin: 10px;
    background-color: rgba(28, 28, 30, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.defaultColor{
    color: rgb(24, 144, 255);
}
.warningColor{
    color: rgb(182, 38, 66);
}
</style>
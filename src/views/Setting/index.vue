<script setup>
import { useSettingStore } from '@/stores/settingStore';
import SettingPersonal from './components/SettingPersonal.vue';
import SettingSearch from './components/SettingSearch.vue';
import SettingWebApp from './components/SettingWebApp.vue';
import SettingTime from './components/SettingTime.vue';
import SettingBackgroundImg from './components/SettingBackgroundImg.vue';
import SettingPattern from './components/SettingPattern.vue';
import SettingNav from './components/SettingNav.vue';
import SettingReset from './components/SettingReset.vue';
import { ref } from 'vue';

const settingStore = useSettingStore();
const enterStyle = ref(false);
</script>

<template>
    <div class="setting">
        <span class="close" @click="settingStore.changeShowSetting()" :class="{ enterStyle:enterStyle }" @mouseover="enterStyle = true" @mouseout="enterStyle = false">
            ×
        </span>
        <div class="settingNav">
            <ul>
                <li v-for="(item,index) in settingStore.optionList" :key="item.id">
                    <span :class="{selectColor:item.isSelect}" @click="settingStore.changeSelect(index)">
                        {{ item.name }}
                    </span>
                </li>
            </ul>
        </div>
        <span class="lineBetween"></span>
        <div class="settingbody">
            <SettingPersonal></SettingPersonal>
            <SettingSearch></SettingSearch>
            <SettingWebApp></SettingWebApp>
            <SettingTime></SettingTime>
            <SettingBackgroundImg></SettingBackgroundImg>
            <SettingPattern></SettingPattern>
            <SettingNav></SettingNav>
            <SettingReset></SettingReset>
        </div>
    </div>
</template>

<style scoped>
div{
    user-select: none;
}
.setting {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    height: 100%;
    width: 502px;
    display: flex;
    z-index: 99;
}
.settingNav {
    width: 150px;
    height: 100%;
    color: white;
}
.settingbody {
    width: 350px;
    height: 100%;
    color:white;
}
.setting .close {
    text-align: center;
    position: absolute;
    left: -30px;
    font-size: 20px;
    font-family: "宋体";
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #ccc;
    cursor: pointer;
}
.settingNav ul {
    height: 100%;
    width: 150px;
}
.settingNav ul li {
    width: 110px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color: white;
    display: inline-block;
    vertical-align: top;
    margin: 10px 20px;
}
.lineBetween{
    width: 2px;
    height: 100%;
    background-color: #fff;
}
.settingNav span{
    display: inline-block;
    height: 50px;
    width: 110px;
    line-height: 50px;
    border-radius: 10px;
}
.selectColor{
    background-color: rgba(28, 28, 30, 0.9);
    color: rgb(77, 170, 252);
}
.enterStyle{
    background-color: rgb(28, 28, 30, 0.5);
}
</style>
<script setup>
import { useSettingStore } from '@/stores/settingStore';
import { usePictureStore } from '@/stores/pictureStore.js';

const settingStore = useSettingStore();
const pictureStore = usePictureStore();

const changeBackground = (src) => {
    settingStore.settingList[3].backgroundFullPath = src;
    settingStore.settingList[3].closeBackgroundOption = false;
}
</script>

<template>
    <div class="backgroundSelect" v-show="settingStore.settingList[3].selectBackground">
        <div class="pictureStoreTitle">
            <span>默认图库</span>
        </div>
        <div class="pictureStore">
            <img v-for="item in pictureStore.pictureList" :key="item.id" :src=item.src alt="" @click="changeBackground(item.src)">
        </div>
    </div>
</template>

<style scoped>
.backgroundSelect{
    width: 798px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pictureStoreTitle{
    height: 80px;
    width: 750px;
    display: flex;
    color: white;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.pictureStoreTitle span{
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}
.pictureStore{
    margin: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.pictureStore img{
    width: 200px;
    height: 100px;
    border:1px solid rgb(77, 170, 252);
    cursor: pointer;
}
</style>
<script setup>
import { useSettingStore } from '@/stores/settingStore';

const settingStore = useSettingStore();
</script>

<template>
    <div class="setting">
        <span class="close" @click="settingStore.changeShowSetting()">
            ×
        </span>
        <div class="settingNav">

        </div>
        <div class="settingbody">

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
    width: 500px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
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
    font-size: 30px;
    width: 30px;
    height: 30px;
    color: #ccc;
    cursor: pointer;
}
</style>
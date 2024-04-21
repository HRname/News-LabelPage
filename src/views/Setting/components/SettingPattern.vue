<script setup>
import { useSettingStore } from '@/stores/settingStore';

const settingStore = useSettingStore();
</script>

<template>
    <div class="settingPattern" v-show="settingStore.optionList[5].isSelect">
        <div class="patternHeader">
            <span>模式设置</span>
        </div>
        <div class="patternBody">
            <div @click="settingStore.enterSimplePattern">
                <img src="@/assets/极简.png" alt="" :class="{ selectImg: settingStore.settingList[4].isSimplePattern }">
                <span :class="{ selectSpan: settingStore.settingList[4].isSimplePattern }">极简</span>
            </div>
            <div @click="settingStore.enterComponent">
                <img src="@/assets/组件.png" :class="{ selectImg: !settingStore.settingList[4].isSimplePattern }" alt="">
                <span :class="{ selectSpan: !settingStore.settingList[4].isSimplePattern }">组件</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.settingPattern {
    width: 100%;
    height: 100%;
}
.patternHeader {
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.patternHeader span {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}

.patternBody{
    width: 330px;
    height: 250px;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.patternBody div{
    width: 150px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.patternBody div img{
    width: 150px;
    height: 100px;
    cursor: pointer;
}
.patternBody div span{
    width: 50px;
    height: 24px;
    font-size: 14px;
    text-align: center;
    line-height: 25px;
    border-radius: 12px;
    cursor: pointer;
}

.selectSpan{
    background-color: rgb(77, 170, 252);
}
.selectImg{
    border: 1px solid rgb(77, 170, 252);
}
</style>
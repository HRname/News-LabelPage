<script setup>
import { useSettingStore } from '@/stores/settingStore';
import { onMounted, ref } from 'vue';

const settingStore = useSettingStore();

const timeTwentyeFour = () => {
    settingStore.settingList[2].timeTypeTwentyeFour = !settingStore.settingList[2].timeTypeTwentyeFour;
}
// 按钮组件
const buttonComponentActive = ref(false);
const buttonSpanActive = ref(false);
const buttonSpanDefault = ref(true);
const activeButton = () => {
    buttonComponentActive.value = !buttonComponentActive.value;
    buttonSpanActive.value = !buttonSpanActive.value;
    buttonSpanDefault.value = !buttonSpanDefault.value;
    settingStore.settingList[2].isShow = !settingStore.settingList[2].isShow;
}
// 选择颜色组件
const colorSpanList = ref([
    { id: 1, color: 'white', isActive: false},
    { id: 2, color: 'blue', isActive: false },
    { id: 3, color: 'green', isActive: false },
    { id: 4, color: 'red', isActive: false },
    { id: 5, color: 'yellow', isActive: false },
    { id: 6, color: 'purple', isActive: false },
    { id: 7, color: 'orange', isActive: false },
    { id: 8, color: 'brown', isActive: false },
    { id: 9, color: 'black', isActive: false },
    { id: 10, color: 'gray', isActive: false },
    { id: 11, color: 'pink', isActive: false },
    { id: 12, color: 'cyan', isActive: false },
    { id: 13, color: 'lime', isActive: false },
    { id: 14, color: 'teal', isActive: false },
    { id: 15, color: 'violet', isActive: false },
    { id: 16, color: 'skyblue', isActive: false },
])
const selectColor = (index) => {
    for(let i = 0; i < colorSpanList.value.length; i++ ){
        colorSpanList.value[i].isActive = false;
    }
    colorSpanList.value[index].isActive = !colorSpanList.value[index].isActive;
    settingStore.settingList[2].timeFontColor = colorSpanList.value[index].color;
    settingStore.settingList[2].timeFontColorIndex = index;
}
// 初始化颜色
const selectColorStart = () => {
    const index = settingStore.settingList[2].timeFontColorIndex;
    colorSpanList.value[index].isActive = !colorSpanList.value[index].isActive;
}

onMounted(() => selectColorStart())
</script>

<template>
    <div class="settingTime" v-show="settingStore.optionList[3].isSelect">
        <div class="timeSettingHeader">
            <span>时间设置</span>
        </div>
        <div class="timeSettingBody">
            <div>
                <div class="settingTimeShow">
                    <span>隐藏时间</span>
                    <div class="buttonComponent" :class="{ buttonComponentActive: buttonComponentActive }" @click="activeButton">
                        <span :class="{ buttonSpanActive: buttonSpanActive, buttonSpanDefault:buttonSpanDefault }"></span>
                    </div>
                </div>
                <div class="spanOption">
                    <span :class="{ selectSpan: settingStore.settingList[2].isShowYear }" @click="settingStore.settingList[2].isShowYear = !settingStore.settingList[2].isShowYear">年</span>
                    <span :class="{ selectSpan: settingStore.settingList[2].isShowMonthDay }" @click="settingStore.settingList[2].isShowMonthDay = !settingStore.settingList[2].isShowMonthDay">月日</span>
                    <span :class="{ selectSpan: settingStore.settingList[2].isShowHourMinutes }" @click="settingStore.settingList[2].isShowHourMinutes = !settingStore.settingList[2].isShowHourMinutes">时分</span>
                    <span :class="{ selectSpan: settingStore.settingList[2].isShowWeek }" @click="settingStore.settingList[2].isShowWeek = !settingStore.settingList[2].isShowWeek">星期</span>
                    <span :class="{ selectSpan: settingStore.settingList[2].timeFontWeight }" @click="settingStore.settingList[2].timeFontWeight = !settingStore.settingList[2].timeFontWeight">粗体</span>
                    <span :class="{ selectSpan: settingStore.settingList[2].timeTypeTwentyeFour }" @click="timeTwentyeFour">24</span>
                </div>
            </div>
            <div class="timeFontSetting">
                <div class="timeFontSize">
                    <span>字体大小：{{ settingStore.settingList[2].timeFontSize }}px</span>
                    <input type="range" min="8" max="24" v-model="settingStore.settingList[2].timeFontSize">
                </div>
                <div class="timeFontColor">
                    <span>字体颜色:</span>
                    <div class="checkboxColor">
                        <span v-for="( item, index) in colorSpanList" :key="item.id" :style="{ backgroundColor: item.color }" :class="{ colorSpanActive: item.isActive }" @click="selectColor(index)">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.settingTime{
    height: 100%;
    width: 350px;
}
.timeSettingHeader{
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.timeSettingHeader span{
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}
.timeSettingBody{
    height: 400px;
    width: 300px;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    display: flex;
    padding: 15px;
    flex-direction: column;
}
.settingTimeShow{
    display: flex;
    justify-content: space-between;
}
.spanOption{
    height: 160px;
    width: 300px;
    border-radius: 15px;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
.spanOption span{
    display: inline-block;
    width: 80px;
    height: 50px;
    background-color: rgba(28, 28, 30, 0.8);
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
.selectSpan{
    border: 1px solid rgb(77, 170, 252);
    color: rgb(77, 170, 252);
}
/* 按钮组件 */
.buttonComponent{
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
}
.buttonComponent span{
    background-color: #aaa;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
}

.buttonSpanDefault{
    border: 3px solid #aaa;
}
.buttonComponentActive{
    background-color: rgb(77, 170, 252);
    flex-direction: row-reverse;
}
.buttonSpanActive{
    border:3px solid rgb(77, 170, 252);
}
/* 按钮组件 */
.timeFontSetting{
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
}
.timeFontSize{
    height: 60px;
    width: 300px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.timeFontSize span{
    font-size: 14px;
}

.timeFontColor{
    margin-top: 10px;
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.checkboxColor{
    height: 60px;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.checkboxColor span{
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 3px;
    border-radius: 50%;
    cursor: pointer;
}
.colorSpanActive{
    border: 2px solid #ccc;
}

input[type="range"] {
    appearance: none;
    margin: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 50px;
    border-radius: 5px;
    -webkit-appearance: none;/*清除系统默认样式*/
    width: 200px;
    background-size: 75% 100%;/*设置左右宽度比例*/
    height: 3px;/*横条的高度*/
}
input[type="range"]::-webkit-slider-runnable-track {
      height: 10px;
      background: #eee;
      border-radius: 5px;
}
input[type="range" i]::-webkit-slider-container {
      height: 20px;
      overflow: hidden;
}
input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ccc;
      border: 1px solid transparent;
      margin-top: -5px;
      /* 使用border-image属性给拇指添加渐变边框 */
      border-image: linear-gradient(rgb(77, 170, 252), rgb(77, 170, 252)) 0 fill / 8 20 8 0 / 0px 0px 0 2000px;
}
</style>
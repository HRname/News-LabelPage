<script setup>
import { ref,onMounted } from "vue"
import { useSettingStore } from "@/stores/settingStore";

const settingStore = useSettingStore()

const selectColor = (index) => {
    settingStore.navBgcColorIsChange = true;
    settingStore.navSetting.backgroundRed = settingStore.colorSpanList[index].red
    settingStore.navSetting.backgroundGreen = settingStore.colorSpanList[index].green
    settingStore.navSetting.backgroundBlue = settingStore.colorSpanList[index].blue
}

// 颜色初始化
// const selectColorStart = () => {
//     const index = settingStore.settingList[2].timeFontColorIndex;
//     colorSpanList.value[index].isActive = !colorSpanList.value[index].isActive;
// }
// onMounted(() => selectColorStart())
</script>

<template>
    <div class="settingNav" v-show="settingStore.optionList[6].isSelect">
        <div class="settingNavHeader">
            <span>左侧导航设置</span>
        </div>
        <div class="settingNavBody">
            <div>
                <span>透明度：{{ settingStore.navSetting.backgroundOpacity }}</span>
                <input type="range" min="0" max="1" step="0.01" v-model="settingStore.navSetting.backgroundOpacity">
            </div>
            <div>
                <span>选中形状：</span>
                <div class="selectShape">
                    <div>
                        <span>圆形：</span>
                        <input type="radio" :value=true name="select" v-model="settingStore.navSetting.isBorderRadius">
                    </div>
                    <div>
                        <span>方形：</span>
                        <input type="radio" :value=false name="select" v-model="settingStore.navSetting.isBorderRadius">
                    </div>
                </div>
            </div>
            <div class="colorComponent">
                <span>选择背景颜色：</span>
                <div class="checkboxColor">
                    <span v-for="( item, index) in settingStore.colorSpanList" :key="item.id" :style="{ backgroundColor: 'rgb(' + item.red + ',' + item.green + ',' + item.blue +')' }" :class="{ colorSpanActive: item.isActive }" @click="selectColor(index)">
                    </span>
                </div>
            </div>
        </div>
        <div class="submit">
            <button @click="settingStore.updateNavSetting(settingStore.navSetting)">保存</button>
        </div>
    </div>
</template>

<style scoped>
.settingNav{
    position: relative;
    width: 100%;
    height: 100%;
}
.settingNavHeader{
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.settingNavHeader span{
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}

.settingNavBody{
    height: 400px;
    width: 330px;
    margin: 10px;
    background-color: rgba(28, 28, 30, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
.settingNavBody>div{
    height: 130px;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.selectShape{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.selectShape>div{
    display: flex;
    line-height: 23px;
    width: 100px;
}
.selectShape>div input{
    cursor: pointer;
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

input[type="radio"] {
    height: 20px;
    width: 20px;
}

.submit button{
    position: absolute;
    bottom: 20px;
    right: 10px;
    border: none;
    height: 40px;
    width: 70px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
    user-select: none;
    cursor: pointer;
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
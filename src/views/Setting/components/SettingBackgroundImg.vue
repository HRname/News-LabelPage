<script setup>
import { useSettingStore } from '@/stores/settingStore';

const settingStore = useSettingStore();
</script>

<template>
    <div class="settingBackgroundImg" v-show="settingStore.optionList[4].isSelect">
        <div class="settingBgImgHeader">
            <span>背景图片设置</span>
        </div>
        <div class="settingBgImgBody">
            <div class="changeBg">
                <span>背景</span>
                <img :src=settingStore.backgroundSetting.backgroundFullPath alt="">
                <div class="selectWay">
                    <span @click="settingStore.enterModifyBackground()">自定义背景</span>
                    <span @click="settingStore.enterSelectBackground()">选择背景</span>
                </div>
            </div>
            <div class="bgStyle">
                <div>
                    <span>背景遮罩度：{{ settingStore.backgroundSetting.shelterBackgroundOpacity }}%</span>
                    <input type="range" min="0" max="100" v-model="settingStore.backgroundSetting.shelterBackgroundOpacity">
                </div>
                <div>
                    <span>背景模糊：{{ settingStore.backgroundSetting.shelterBackgroundBlur * 10 }}%</span>
                    <input type="range" min="0" max="10" step="0.1" v-model="settingStore.backgroundSetting.shelterBackgroundBlur">
                </div>
            </div>
        </div>
        <div class="submit">
            <button @click="settingStore.updateBackgroundSetting(settingStore.backgroundSetting)">保存</button>
        </div>
    </div>
</template>

<style scoped>
.settingBackgroundImg {
    position: relative;
    width: 350px;
    height: 100%;
}
.settingBgImgHeader {
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.settingBgImgHeader span {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}
.settingBgImgBody {
    width: 330px;
    height: 600px;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
.changeBg {
    width: 330px;
    height: 320px;
    display: flex;
    flex-direction: column;
}
.changeBg>span {
    display: inline-block;
    width: 300px;
    margin: 15px 15px 0px 15px;
}
.changeBg img {
    width: 300px;
    height: 200px;
    margin: 15px;
    border-radius: 10px;
}
.selectWay {
    width: 300px;
    margin: 0 15px 15px 15px;
    display: flex;
    justify-content: space-evenly;
}
.selectWay span {
    display: inline-block;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: black;
    border-radius: 10px;
    cursor: pointer;
    color: rgb(77, 170, 252);
}

.bgStyle {
    width: 330px;
    height: 200px;
    display: flex;
    flex-direction: column;
}
.bgStyle div {
    height: 80px;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
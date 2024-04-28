<script setup>
import { useSettingStore } from '@/stores/settingStore';

const settingStore = useSettingStore();
</script>

<template>
    <div class="webAppSetting" v-show="settingStore.optionList[2].isSelect">
        <div class="webAppHead">
            <span>图标设置</span>
        </div>
        <div>
            <ul>
                <li>
                    <span>图标之间的纵向距离：{{ settingStore.settingList[1].webAppHeight + 'px' }}</span>
                    <input type="range" min="100" max="200" v-model="settingStore.settingList[1].webAppHeight">
                </li>
                <li>
                    <span>图标之间的横向距离：{{ settingStore.settingList[1].webAppWidth + 'px' }}</span>
                    <input type="range" min="80" max="200" v-model="settingStore.settingList[1].webAppWidth">
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li class="selectRadius">
                    <div @click="settingStore.selectDefault">
                        <img src="@/assets/默认.png" alt="" :class="{selectImg:settingStore.settingList[1].webAppSelectDefault}">
                        <span :class="{selectSpan:settingStore.settingList[1].webAppSelectDefault}">默认圆角</span>
                    </div>
                    <div @click="settingStore.selectRound">
                        <img src="@/assets/圆形.png" alt="" :class="{selectImg:settingStore.settingList[1].webAppSelectRound}">
                        <span :class="{selectSpan:settingStore.settingList[1].webAppSelectRound}">圆形图标</span>
                    </div>
                </li>
                <li>
                    <span>图标大小：{{ settingStore.settingList[1].webAppSize + 'px' }}</span>
                    <input type="range" min="30" max="100" v-model="settingStore.settingList[1].webAppSize">
                </li>
                <li>
                    <span>图标透明度：{{ settingStore.settingList[1].webAppOpacity }}</span>
                    <input type="range" min="0" max="1" step="0.01" v-model="settingStore.settingList[1].webAppOpacity">
                </li>
                <li>
                    <span>图标圆角：{{ settingStore.settingList[1].webAppBorderRadius + '%' }}</span>
                    <input type="range" min="0" max="50" v-model="settingStore.settingList[1].webAppBorderRadius">
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <span>网站名称字体大小：{{ settingStore.settingList[1].webAppFontSize + 'px'}}</span>
                    <input type="range" min="8" max="32" v-model="settingStore.settingList[1].webAppFontSize">
                </li>
            </ul>
        </div>
        <div class="submit">
            <button>保存</button>
        </div>
    </div>
</template>

<style scoped>
.webAppSetting {
    position: relative;
    height: 100%;
    width: 350px;
}
.webAppHead{
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.webAppHead span{
    font-size: 20px;
    color: #fff;
    letter-spacing: 5px;
}

.selectRadius{
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
}
.selectRadius div{
    display: flex;
    height: 100px;
    width: 50%;
    font-size: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.selectRadius div img{
    width: 50px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
}
.selectRadius div span{
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 55px;
    font-size: 12px;
    border-radius: 15px;
    cursor: pointer;
}

.selectSpan{
    background-color: rgb(24, 144, 255);
}
.selectImg{
    border: 2px solid rgb(24, 144, 255);
}

ul {
    display: flex;
    flex-direction: column;
    width: 330px;
    margin: 10px;
    background-color: rgba(28, 28, 30, 0.8);
    border-radius: 10px;
}
ul li{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80px;
    font-size: 12px;
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
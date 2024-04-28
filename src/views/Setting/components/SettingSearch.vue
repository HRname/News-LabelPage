<script setup>
import { useSettingStore } from '@/stores/settingStore'

const settingStore = useSettingStore()
</script>

<template>
    <div class="settingSearch" v-show="settingStore.optionList[1].isSelect">
        <div class="optiongName">
            <span>搜索框样式设置</span>
        </div>
        <div class="searchOption">
            <ul>
                <li>
                    <span>搜索框高度：{{ settingStore.searchSetting.searchHeight + 'px' }}</span>
                    <input type="range" name="" min="30" max="100" v-model="settingStore.searchSetting.searchHeight">
                </li>
                <li>
                    <span>搜索框透明度：{{ settingStore.searchSetting.searchOpacity }}</span>
                    <input type="range" name="" min="0" max="1" step="0.01" v-model="settingStore.searchSetting.searchOpacity">
                </li>
                <li>
                    <span>搜索框圆角大小：{{ settingStore.searchSetting.searchBorderRadius + 'px' }}</span>
                    <input type="range" name="" min="0" max="100" v-model="settingStore.searchSetting.searchBorderRadius">
                </li>
                <li>
                    <span>搜索框与网站图标区域之间的距离：{{ settingStore.searchSetting.searchBottomMargin + 'px' }}</span>
                    <input type="range" name="" min="0" max="200" v-model="settingStore.searchSetting.searchBottomMargin">
                </li>
                <li class="submit">
                    <button @click="settingStore.updateSearchSetting(settingStore.searchSetting)">保存</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.settingSearch {
    position: relative;
    height: 100%;
    width: 350px;
}
.optiongName {
    height: 120px;
    width: 330px;
    display: flex;
    align-items: center;
    background-color: rgba(28, 28, 30, 0.8);
    margin: 10px;
    border-radius: 10px;
    text-indent: 2em;
}
.optiongName span {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: "微软雅黑";
}

.searchOption {
    height: 500px;
    width: 330px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(28, 28, 30, 0.8);
    overflow: hidden;
}
.searchOption ul{
    height: 500px;
    width: 330px;
}
.searchOption ul li {
    width: 330px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.searchOption ul li span {
    font-size: 12px;
    font-family: "微软雅黑";
    letter-spacing: 2px;
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
<script setup>
import { ref } from 'vue'
import { useSettingStore } from '@/stores/settingStore'

const settingStore = useSettingStore()
const filePath = ref('')
const getImgFullPath = () => {
    const uploadFullPath = document.getElementById('uploadFullPath')
    console.log(uploadFullPath)
    const file = uploadFullPath.files[0]
    filePath.value = URL.createObjectURL(file)
}

const changeBackground = () => {
    if( filePath.value === '' ) return alert('请选择图片')
    settingStore.backgroundSetting.backgroundFullPath = filePath.value
    settingStore.switchBackgroundOption()
}
</script>

<template>
    <div class="modifyBackground" v-show="settingStore.backgroundSetting.modifyBackground">
        <div class="uploadFile">
            <span>选择文件</span>
            <input class="uploadImg" id="uploadFullPath" type="file" name="" @input="getImgFullPath">
        </div>
        <div class="seeImg">
            <span>预览</span>
            <img :src= filePath alt="请选择图片">
        </div>
    </div>
    <div class="getButton" v-show="settingStore.backgroundSetting.modifyBackground">
        <button @click="changeBackground">确定</button>
    </div>
</template>

<style scoped>
.modifyBackground {
    width: 798px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.uploadFile{
    position: relative;
    width: 100px;
    height: 50px;
    background: rgb(28, 28, 30, 0.8);
    color: #fff;
    border-radius: 5px;
    line-height: 50px;
    border: 1px solid rgb(77, 170, 252);
    text-align: center;
    user-select: none;
    cursor: pointer;
}
.uploadImg {
    opacity: 0;
    height: 50px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}
.seeImg {
    height: 300px;
    width: 400px;
}
.seeImg span {
    display: block;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 14px;
    user-select: none;
}
.seeImg img {
    color: #fff;
    display: block;
    height: 200px;
    width: 400px;
    border: 1px solid rgb(77, 170, 252);
}

.getButton {
    width: 798px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.getButton button {
    width: 100px;
    height: 50px;
    background-color: rgb(28, 28, 30, 0.8);
    border: 1px solid rgb(77, 170, 252);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
</style>
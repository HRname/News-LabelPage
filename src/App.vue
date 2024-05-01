<script setup>
import AddUrlListFrom from '@/views/HomePage/components/AddUrlListFrom.vue'
import BackgroundOption from '@/components/SettingGeneral/BackgroundOption.vue'
import { useAppUrlStore } from '@/stores/appurlStore'
import { useSettingStore } from '@/stores/settingStore'
import DetermineAlert from '@/components/SettingGeneral/DetermineAlert.vue'
import Setting from '@/views/Setting/index.vue'
import { useUserStore } from './stores/userStore'
import TipsAlert from './components/TipsAlert.vue'

const appUrlStore = useAppUrlStore()
const settingStore = useSettingStore();
const userStore = useUserStore();
const operationFunction = () => {
  if(userStore.operationNum == 1){
    userStore.outLogin()
  }else if(userStore.operationNum == 2){
    userStore.deleteUser()
  }else if(userStore.operationNum == 3){
    userStore.toLogin()
  }
  userStore.operationNum = 0
}
</script>

<template>
  <div class="app">
    <!-- 提示弹框 -->
    <TipsAlert></TipsAlert>
    <!-- 背景设置选项卡 -->
    <BackgroundOption></BackgroundOption>
    <!-- 警告弹框 -->
    <DetermineAlert>
      <template #title>
         <div>
          {{ userStore.warnings }}
        </div>
      </template>
     
      <template #submit>
        <button @click="operationFunction()">确定</button>
      </template>
    </DetermineAlert>
    <!-- 添加图标 -->
    <AddUrlListFrom v-show="appUrlStore.showAddForm">
      <input type="submit" value="添加网站" class="submit" @click="appUrlStore.addUrlApp()">
    </AddUrlListFrom>
    <!-- 修改图标 -->
    <AddUrlListFrom v-show="appUrlStore.showChangeForm">
      <input type="submit" value="修改网站" class="submit" @click="appUrlStore.changeUrlApp(appUrlStore.operationIndex)">
    </AddUrlListFrom>
    <!-- 设置窗口 -->
    <Setting v-show="settingStore.showSetting"></Setting>
     <!-- 一级路由出口 -->
    <RouterView/>
  </div>
</template>

<style scoped>
.app{
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.submit{
    width: 100px;
    height: 40px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 10px;
}
input[type=submit]{
    cursor:pointer;
}
button {
    border: none;
    height: 40px;
    width: 70px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(to right, rgb(77, 170, 252) 0%,rgb(24, 144, 255) 100%);
    user-select: none;
    cursor: pointer;
}
</style>

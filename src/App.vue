<script setup>
import AddUrlListFrom from '@/views/HomePage/components/AddUrlListFrom.vue'
import BackgroundOption from '@/components/SettingGeneral/BackgroundOption.vue'
import { useAppUrlStore } from '@/stores/appurlStore'
import { useSettingStore } from '@/stores/settingStore'
import DetermineAlert from '@/components/SettingGeneral/DetermineAlert.vue'
import Setting from '@/views/Setting/index.vue'
import { useUserStore } from './stores/userStore'

const appUrlStore = useAppUrlStore()
const settingStore = useSettingStore();
const userStore = useUserStore();
</script>

<template>
  <div class="app">
    <!-- 背景设置选项卡 -->
    <BackgroundOption></BackgroundOption>
    <!-- 警告弹框 -->
    <DetermineAlert></DetermineAlert>
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
    <div class="shelterBackground" :style="{ opacity: settingStore.settingList[3].shelterBackgroundOpacity + '%'}"></div>
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
.shelterBackground{
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -98;
}
</style>

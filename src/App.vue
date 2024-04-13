<script setup>
import AddUrlListFrom from '@/views/HomePage/components/AddUrlListFrom.vue'
import { useAppUrlStore } from '@/stores/appurlStore'
import { useSettingStore } from '@/stores/settingStore'
import Setting from '@/views/Setting/index.vue'

const appUrlStore = useAppUrlStore()
const settingStore = useSettingStore();
</script>

<template>
  <div class="app">
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
  background-image: url("./assets/preview.jpg");
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
</style>

<script setup>
import AddUrlListFrom from '@/views/HomePage/components/AddUrlListFrom.vue'
import { useAppUrlStore } from '@/stores/appurlStore'
import { ref } from 'vue'

const appUrlStore = useAppUrlStore()
</script>

<template>
  <div class="app">
    <!-- 添加图标 -->
    <AddUrlListFrom v-show="appUrlStore.showAddForm"/>
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
</style>
